<?php

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class ProductCatalogFilter extends ModelFilter
{
    public function filter($filter)
    {
        foreach ($filter as $char=>$charValue) {
            $charCollection = cachedCharacteristics()->where('slug', $char)->first();
            $charId = $charCollection->id;
            $charValueId = $charCollection->values->where('slug', $charValue)->value('id');

            $this->whereHas('product_characteristic_value', fn($q) =>
                $q->where([ 'char_tic_id' => $charId, 'char_tic_val_id' => $charValueId ])
            );
        }
    }

    public function sort($value)
    {
        return match ($value) {
            'newest' => $this->latest('products.created_at'),
            'price_asc' => $this->orderBy('price_value'),
            'price_desc' => $this->orderByDesc('price_value'),
            default => $this->latest('products.created_at'),
        };
    }
}
