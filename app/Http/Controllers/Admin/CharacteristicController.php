<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CharacteristicRequest;
use App\Models\Characteristic;
use App\Models\CharacteristicSet;

class CharacteristicController extends Controller
{
    public function index()
    {
        $characteristics = Characteristic::query()
            ->paginate(25);

        return view('characteristics.index', compact('characteristics'));
    }

    public function create()
    {
        $sets = CharacteristicSet::query()
                    ->get();

        return view('characteristics.create', compact('sets'));
    }

    public function store(CharacteristicRequest $request)
    {
        $requestData = $request->validated();
        $requestData['char_tic_set_id'] = $requestData['set'];
        unset($requestData['set']);
        $characteristic = Characteristic::create($requestData);

        return redirect()->route('admin.characteristics.index')->with('message', 'Характеристики Название "'.$characteristic->name.'" создана!');
    }

    public function edit(Characteristic $characteristic)
    {
        $sets = CharacteristicSet::query()
            ->get();

        return view('characteristics.edit', compact('characteristic', 'sets'));
    }

    public function update(CharacteristicRequest $request, Characteristic $characteristic)
    {
        $requestData = $request->validated();
        $requestData['char_tic_set_id'] = $requestData['set'];
        unset($requestData['set']);
        $characteristic->update($requestData);

        return redirect()->route('admin.characteristics.index')->with('message', 'Характеристики Название "'.$characteristic->name.'" изменено!');
    }

    public function destroy(Characteristic $characteristic)
    {
        $characteristic->delete();

        return redirect()->route('admin.characteristics.index')->with('message', 'Характеристики Название "'.$characteristic->name.'" удалена!');
    }
}
