<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CharacteristicValueRequest;
use App\Models\Characteristic;
use App\Models\CharacteristicValue;
use App\Services\StorageService;

class CharacteristicValueController extends Controller
{
    public function index()
    {
        $characteristics_values = CharacteristicValue::query()
            ->paginate(25);

        return view('characteristics-values.index', compact('characteristics_values'));
    }

    public function create()
    {
        return view('characteristics-values.create');
    }

    public function store(CharacteristicValueRequest $request, StorageService $storageService)
    {
        $requestData = $request->validated();

        if(isset($requestData['image'])) {
            $requestData['image']= $storageService->saveFile($requestData['image'], 'characteristics');
        } else {
            $requestData['image']= '';
        }

        $characteristics_value = CharacteristicValue::create($requestData);

        return redirect()->route('admin.characteristics-values.index')->with('message', 'Характеристики Значение "'.$characteristics_value->name.'" создано!');
    }

    public function edit(CharacteristicValue $characteristics_value)
    {
        return view('characteristics-values.edit', compact('characteristics_value'));
    }

    public function update(CharacteristicValueRequest $request, CharacteristicValue $characteristics_value, StorageService $storageService)
    {
        $requestData = $request->validated();

        if(isset($requestData['image'])) {
            $requestData['image']= $storageService->saveFile($requestData['image'], 'characteristics');
            $storageService->deleteFile($characteristics_value->image, 'characteristics');
        }

        $characteristics_value->update($requestData);

        return redirect()->route('admin.characteristics-values.index')->with('message', 'Характеристики Значение "'.$characteristics_value->name.'" изменено!');
    }

    public function destroy(CharacteristicValue $characteristics_value, StorageService $storageService)
    {
        $storageService->deleteFile($characteristics_value->image, 'characteristics');

        $characteristics_value->delete();

        return redirect()->route('admin.characteristics-values.index')->with('message', 'Характеристики Значение "'.$characteristics_value->name.'" удалено!');
    }
}
