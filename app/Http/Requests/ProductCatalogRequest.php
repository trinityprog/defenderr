<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCatalogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'sort' => ['in:newest,price_asc,price_desc']
        ];
    }

    public function passedValidation() {
        $this->merge(['filter' => $this->only(cachedCharacteristics()->pluck('slug')->toArray())]);
    }
}
