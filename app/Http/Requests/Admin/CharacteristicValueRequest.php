<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CharacteristicValueRequest extends FormRequest
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
            'name.en' => ['required', 'min:2'],
            'name.ru' => ['required', 'min:2'],
            'image' => ['image', 'mimes:jpeg,jpg,png,svg', 'max:10000']
        ];
    }
}
