<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DistributorRequest;
use App\Models\Distributor;

class DistributorController extends Controller
{
    public function index()
    {
        $distributors = Distributor::query()
            ->get();

        return view('distributors.index', compact('distributors'));
    }

    public function create()
    {
        return view('distributors.create');
    }

    public function store(DistributorRequest $request)
    {
        $requestData = $request->validated();

        $distributor = Distributor::create($requestData);

        return redirect()->route('admin.distributors.index')->with('message', 'Дистрибьютор #'.$distributor->id.' создан!');
    }

    public function edit(Distributor $distributor)
    {
        return view('distributors.edit', compact('distributor'));
    }

    public function update(DistributorRequest $request, Distributor $distributor)
    {
        $requestData = $request->validated();

        $distributor->update($requestData);

        return redirect()->route('admin.distributors.index')->with('message', 'Дистрибьютор #'.$distributor->id.' изменён!');
    }

    public function destroy(Distributor $distributor)
    {
        $distributor->delete();

        return redirect()->route('admin.distributors.index')->with('message', 'Дистрибьютор #'.$distributor->id.' удален!');
    }
}
