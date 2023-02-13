<?php

namespace App\Http\Requests\Admin;

use App\Models\ProductImage;
use Illuminate\Foundation\Http\FormRequest;

class ProductImageRequest extends FormRequest
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
            'image' => ['image', 'mimes:jpeg,jpg,png', 'max:10000', $this->imageRequired()],
            'for' => ['required', 'in:' . collect(array_keys(ProductImage::getForList()))->implode(',')],
            'order' => ['integer'],
        ];
    }

    public function imageRequired()
    {
        return $this->route()->methods() === ['PUT', 'PATCH'] ? '' : 'required';
    }
}
