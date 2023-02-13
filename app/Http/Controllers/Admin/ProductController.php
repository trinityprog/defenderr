<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductCharacteristicRequest;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Category;
use App\Models\CharacteristicSet;
use App\Models\CharacteristicValue;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\StorageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use function PHPUnit\Framework\isEmpty;

class ProductController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->get();

        $products = Product::query()
            ->with('images', fn($q) => $q->where('for', ProductImage::FOR_CARD))
            ->when(
                request()->filled('category'),
                fn($q) => $q->whereHas('categories', fn($q) => $q->where('categories.id', request()->input('category')))
            )->when(
                request()->filled('search'),
                fn($q) => $q->where('name', 'like', '%' . request()->input('search') . '%')
                    ->orWhere('short_name', 'like', '%' . request()->input('search') . '%')
                    ->orWhere('description', 'like', '%' . request()->input('search') . '%')
            )
            ->latest()
            ->paginate(25);

        return view('products.index', compact('categories', 'products'));
    }

    public function create()
    {
        $categories = Category::query()
            ->get();

        $sets = CharacteristicSet::query()
            ->get();

        return view('products.create', compact('categories', 'sets'));
    }

    public function store(ProductRequest $request, StorageService $storageService)
    {
        $requestData = $request->validated();
        $mainImage = $storageService->saveFile($requestData['main_image'], 'products');
        unset($requestData['main_image']);
        $category = $requestData['category'];
        unset($requestData['category']);
        $requestData['char_tic_set_id'] = $requestData['set'];
        unset($requestData['set']);

        $priceUSD = $requestData['price']['usd'];
        $priceRUB = $requestData['price']['rub'];
        unset($requestData['price']);

        $product = Product::create($requestData);
        $product->images()->create(['image' => $mainImage]);
        $product->categories()->sync($category);
        $product->prices()->updateOrCreate([
            'value' => $priceUSD,
            'for' => 'USD',
        ]);
        $product->prices()->updateOrCreate([
            'value' => $priceRUB,
            'for' => 'RUB',
        ]);

        return redirect()->route('admin.products.index')->with('message', 'Товар "'.$product->name.'" создан!');
    }

    public function edit(Product $product)
    {
        $categories = Category::query()
            ->get();

        $sets = CharacteristicSet::query()
            ->get();

        return view('products.edit', compact('product', 'categories', 'sets'));
    }

    public function update(ProductRequest $request, Product $product)
    {
        $requestData = $request->validated();

        $category = $requestData['category'];
        unset($requestData['category']);
        $requestData['char_tic_set_id'] = $requestData['set'];
        unset($requestData['set']);

        $priceUSD = $requestData['price']['usd'];
        $priceRUB = $requestData['price']['rub'];
        unset($requestData['price']);

        $product->update($requestData);
        $product->categories()->sync($category);
        $product->prices()->where('for', 'USD')->update([
            'value' => $priceUSD,
        ]);
        $product->prices()->where('for', 'RUB')->update([
            'value' => $priceRUB,
        ]);

        return redirect()->route('admin.products.index')->with('message', 'Товар "'.$product->name.'" изменён!');
    }

    public function destroy(Product $product, StorageService $storageService)
    {
        $product->images()->each(
            fn($image) =>
            $storageService->deleteFile($image->image, 'products')
        );
        $product->delete();

        return redirect()->route('admin.products.index')->with('message', 'Товар "'.$product->name.'" удален!');
    }

    public function characteristics(Product $product)
    {
        $characteristics_values = CharacteristicValue::query()
            ->get();

        $product_characteristic_value =  $product->product_characteristic_value->map(fn($item) => [
            'name' => $item->characteristic->id,
            'value' => $item->values->id,
        ]);

        return view('products.characteristics', compact('product', 'characteristics_values', 'product_characteristic_value'));
    }

    public function characteristicsStore(Product $product, ProductCharacteristicRequest $request)
    {
        DB::table('char_tic_char_tic_value_product')
            ->where('product_id', $product->id)
            ->delete();

        foreach ($request->char_tic as $name => $value) {
            DB::table('char_tic_char_tic_value_product')->insert([
                'char_tic_id' => $name,
                'char_tic_val_id' => $value,
                'product_id' => $product->id
            ]);
        }

        Cache::forget('characteristics');

        return redirect()->route('admin.products.index')->with('message', 'Характеристики добавлены для "'.$product->name.'"!');
    }

    public function docs(Product $product)
    {
        $category = $product->categories->first();

        return view('products.docs', compact('product', 'category'));
    }

    public function docsStore(Product $product, Request $request)
    {
        $requestData = $request->only('docs');
        if(count($requestData['docs'])) {
            foreach($requestData['docs'] as $key=>$doc) {
                if($request->hasFile('docs.' . $key)) {
                    $request->file('docs.' . $key)->move(public_path('docs'), $key . '.pdf');
                }
            }
        }

        return redirect()->route('admin.products.index')->with('message', 'Документы изменены для "'.$product->name.'"!');
    }

    public function editParentGroup(Request $request)
    {
        $product = Product::query()
            ->where('parent_group', $request->input('parent_group'))
            ->firstOrFail();

        return view('products.edit-parent-group', compact('product'));
    }

    public function updateParentGroup(Request $request)
    {
        $requestData = $request->validate([
            'description.*' => [],
            'price.*' => ['required', 'integer'],
        ]);

        $products = Product::query()
            ->where('parent_group', $request->input('parent_group'))
            ->get();

        $priceUSD = $requestData['price']['usd'];
        $priceRUB = $requestData['price']['rub'];

        foreach ($products as $product) {
            $product->update([
                'description' => $requestData['description']
            ]);
            $product->prices()->where('for', 'USD')->update([
                'value' => $priceUSD,
            ]);
            $product->prices()->where('for', 'RUB')->update([
                'value' => $priceRUB,
            ]);

        }

        return redirect()->route('admin.products.index')->with('message', 'Товары "'.parentGroupNormalize($request->input('parent_group')).'" изменёны!');
    }
}
