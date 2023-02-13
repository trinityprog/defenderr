<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CharacteristicSetRequest;
use App\Models\Characteristic;
use App\Models\CharacteristicSet;
use App\Services\StorageService;

class CharacteristicSetController extends Controller
{
    public function index()
    {
        $characteristics_sets = CharacteristicSet::query()
            ->paginate(25);

        return view('characteristics-sets.index', compact('characteristics_sets'));
    }

    public function create()
    {
        return view('characteristics-sets.create');
    }

    public function store(CharacteristicSetRequest $request)
    {
        $requestData = $request->validated();
        $characteristics_set = CharacteristicSet::create($requestData);

        return redirect()->route('admin.characteristics-sets.index')->with('message', 'Характеристики Группа "'.$characteristics_set->name.'" создана!');
    }

    public function edit(CharacteristicSet $characteristics_set)
    {
        return view('characteristics-sets.edit', compact('characteristics_set'));
    }

    public function update(CharacteristicSetRequest $request, CharacteristicSet $characteristics_set)
    {
        $requestData = $request->validated();
        $characteristics_set->update($requestData);

        return redirect()->route('admin.characteristics-sets.index')->with('message', 'Характеристики Группа "'.$characteristics_set->name.'" изменена!');
    }

    public function destroy(CharacteristicSet $characteristics_set)
    {
        $characteristics_set->delete();

        return redirect()->route('admin.characteristics-sets.index')->with('message', 'Характеристики Группа "'.$characteristics_set->name.'" удалена!');
    }
}
