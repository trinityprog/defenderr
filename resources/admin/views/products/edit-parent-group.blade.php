<x-app-layout>
    <x-slot name="header">
        Изменение товаров "{{ parentGroupNormalize($product->parent_group) }}"
    </x-slot>

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="mb-8">
            <a href="{{ url()->previous() }}" class="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-5 h-5 inline-block align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Назад
            </a>
        </div>
        <form method="POST" action="{{ route('admin.products.update-parent-group', ['parent_group' => $product->parent_group]) }}" enctype="multipart/form-data">
            @csrf
            @method('POST')

            <div>
                <label for="description_en" class="block text-sm text-gray-700">Описание EN</label>
                <textarea ckeditor rows="5" id="description_en" name="description[en]"
                          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
              {{ $errors->has('description.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">{{ isset($product->description) ? $product->getTranslation('description', 'en') : old('description.en') }}</textarea>
                {!! $errors->first('description.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
            </div>

            <div class="mt-4">
                <label for="description_ru" class="block text-sm text-gray-700">Описание RU</label>
                <textarea ckeditor rows="5" id="description_ru" name="description[ru]"
                          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
              {{ $errors->has('description.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">{{ isset($product->description) ? $product->getTranslation('description', 'ru') : old('description.ru') }}</textarea>
                {!! $errors->first('description.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
            </div>

            <div class="mt-10">
                <label for="price_usd" class="block text-sm text-gray-700">Цена USD</label>
                <input type="number" id="price_usd" name="price[usd]" value="{{ isset($product->prices) ? $product->prices->where('for', 'USD')->value('value') : old('price.usd') }}" required
                       class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('price.usd') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
                {!! $errors->first('price.usd', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
            </div>

            <div class="mt-4">
                <label for="price_rub" class="block text-sm text-gray-700">Цена RUB</label>
                <input type="number" id="price_rub" name="price[rub]" value="{{ isset($product->prices) ? $product->prices->where('for', 'RUB')->value('value') : old('price.rub') }}" required
                       class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('price.rub') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
                {!! $errors->first('price.rub', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
            </div>

            <div class="mt-8">
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit">
                    Сохранить
                </button>
            </div>

        </form>
    </div>
</x-app-layout>
