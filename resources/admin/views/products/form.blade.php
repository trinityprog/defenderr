<div>
    <label for="name_en" class="block text-sm text-gray-700">Название EN</label>
    <input type="text" id="name_en" name="name[en]" value="{{ isset($product->name) ? $product->getTranslation('name', 'en') : old('name.en') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="name_ru" class="block text-sm text-gray-700">Название RU</label>
    <input type="text" id="name_ru" name="name[ru]" value="{{ isset($product->name) ? $product->getTranslation('name', 'ru') : old('name.ru') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="short_name_en" class="block text-sm text-gray-700">Короткое Название EN</label>
    <input type="text" id="short_name_en" name="short_name[en]" value="{{ isset($product->short_name) ? $product->getTranslation('short_name', 'en') : old('short_name.en') }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('short_name.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('short_name.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="short_name_ru" class="block text-sm text-gray-700">Короткое Название RU</label>
    <input type="text" id="short_name_ru" name="short_name[ru]" value="{{ isset($product->short_name) ? $product->getTranslation('short_name', 'ru') : old('short_name.ru') }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('short_name.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('short_name.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
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

@if(request()->route()->uri() === 'admin/products/create')
    <div class="mt-10">
        <span class="block text-sm text-gray-700 mb-2">Изображение</span>
        <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            <span class="mt-2 text-base leading-normal">Выбрать файл</span>
            <input type="file" class="hidden" id="main_image" name="main_image" accept="image/png, image/jpeg">
        </label>
        {!! $errors->first('main_image', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
    </div>
@endif

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

<div class="mt-10">
    <label for="category" class="block text-sm text-gray-700">Категория</label>
    <select name="category" id="category"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('category') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
        <option value>Выберите</option>
        @foreach($categories as $category)
            <option value="{{ $category->id }}" @if(isset($product->categories) && $product->categories->where('id', $category->id)->first()) selected @endif>
                {{ $category->name }}</option>
        @endforeach
    </select>
    {!! $errors->first('category', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="set" class="block text-sm text-gray-700">Характеристики Группа</label>
    <select name="set" id="set"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('set') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
        <option value>Выберите</option>
        @foreach($sets as $set)
            <option value="{{ $set->id }}" @if(isset($product->categories) && $product->categories->where('id', $category->id)->first()) selected @endif>
                {{ $set->name }}</option>
        @endforeach
    </select>
    {!! $errors->first('set', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>


<div class="mt-10">
    <label for="amazon_link" class="block text-sm text-gray-700">Ссылка на Amazon</label>
    <input type="text" id="amazon_link" name="amazon_link" value="{{ isset($product->amazon_link) ? $product->amazon_link : old('amazon_link') }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('amazon_link') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('amazon_link', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Новинка</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="is_newest" value="1" @if(isset($product->is_newest) && $product->is_newest === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="is_newest" value="0" @if(isset($product->is_newest) && $product->is_newest === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('is_newest', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Популярный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="is_popular" value="1" @if(isset($product->is_popular) && $product->is_popular === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="is_popular" value="0" @if(isset($product->is_popular) && $product->is_popular === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('is_popular', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Активный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="1" @if(isset($product->active) && $product->active === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="0" @if(isset($product->active) && $product->active === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('active', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>


<div class="mt-8">
    <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="submit">
        Сохранить
    </button>
</div>
