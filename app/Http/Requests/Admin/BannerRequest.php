<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class BannerRequest extends FormRequest
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
            'image.en' => ['image', 'mimes:jpeg,jpg,png', 'max:10000', $this->imageRequired()],
            'image.ru' => ['image', 'mimes:jpeg,jpg,png', 'max:10000', $this->imageRequired()],
            'mob_image.en' => ['image', 'mimes:jpeg,jpg,png', 'max:10000', $this->imageRequired()],
            'mob_image.ru' => ['image', 'mimes:jpeg,jpg,png', 'max:10000', $this->imageRequired()],
            'link' => ['required', 'min:2'],
            'active' => ['boolean'],
            'order' => ['integer']
        ];
    }

    public function imageRequired()
    {
        return $this->route()->methods() === ['PUT', 'PATCH'] ? '' : 'required';
    }
}
