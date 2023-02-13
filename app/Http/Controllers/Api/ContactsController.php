<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DistributorResource;
use App\Http\Resources\FaqCategoryResource;
use App\Models\Distributor;
use Illuminate\Http\Request;

class ContactsController extends Controller
{
    public function distributors()
    {
        return DistributorResource::collection(Distributor::where('active', true)->orderBy('country')->orderBy('city')->get());
    }
    public function distributorsExport(Request $request)
    {
        set_time_limit(0);

        try {
            $data = $request->input('data');

            foreach ($data as $item) {
                Distributor::query()->firstOrCreate([
                    'email' => $item['email'],
                ], [
                    'name' => $item['name'],
                    'email' => $item['email'],
                    'phone' => $item['phone'],
                    'website' => $item['website'],
                    'country' => $item['country'],
                    'city' => $item['city'],
                    'socials' => $item['socials']
                ]);
            }

        } catch (\Exception $exception) {
            return abort('500', $exception->getMessage());
        }

        return response()->json(['status' => 'successfully', 'message' => 'Distributors successfully exported!']);
    }
}
