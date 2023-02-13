<div>
    <span class="block text-sm text-gray-700 mb-2">Изображение</span>
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
        <input type="file" class="hidden" id="image" name="image" accept="image/png, image/jpeg">
    </label>
    {!! $errors->first('image', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="for" class="block text-sm text-gray-700">Назначение</label>
    <select name="for" id="for"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('for') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
        <option value>Выберите</option>
        @foreach(\App\Models\ProductImage::getForList() as $key=>$value)
            <option value="{{ $key }}" {{ isset($products_image->for) && $products_image->for == $key ? 'selected' : ''}}>{{ $value }}</option>
        @endforeach
    </select>
    {!! $errors->first('for', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="order" class="block text-sm text-gray-700">Порядок</label>
    <input type="number" id="order" name="order" value="{{ isset($products_image->order) ? $products_image->order : old('order', 1) }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('order') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('order', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-8">
    <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="submit">
        Сохранить
    </button>
</div>
