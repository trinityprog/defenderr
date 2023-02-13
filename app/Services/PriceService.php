<?php

namespace App\Services;

class PriceService
{
    public function priceWithSymbol($price = 0)
    {
        $code = $this->relatedCurrencyCode();
        $symbol = $this->relatedCurrencySymbol();

        return match ($code) {
            'RUB' => "{$price} {$symbol}",
            default => "{$symbol} {$price}"
        };
    }

    public function relatedCurrencyCode()
    {
        return match (app()->getLocale()) {
            'ru' => 'RUB',
            default => 'USD'
        };
    }

    public function relatedCurrency()
    {
        return cachedCurrencies()->where('code', $this->relatedCurrencyCode())->first();
    }

    public function relatedCurrencySymbol()
    {
        return $this->relatedCurrency()->symbol;
    }
}
