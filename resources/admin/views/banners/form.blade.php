<div>
    <span class="block text-sm text-gray-700 mb-2">Изображение EN</span>
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
        <input type="file" class="hidden" id="image_en" name="image[en]" accept="image/png, image/jpeg">
    </label>
    {!! $errors->first('image.en', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <span class="block text-sm text-gray-700 mb-2">Изображение RU</span>
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
        <input type="file" class="hidden" id="image_ru" name="image[ru]" accept="image/png, image/jpeg">
    </label>
    {!! $errors->first('image.ru', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <span class="block text-sm text-gray-700 mb-2">Мобильное Изображение EN</span>
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
        <input type="file" class="hidden" id="mob_image_en" name="mob_image[en]" accept="image/png, image/jpeg">
    </label>
    {!! $errors->first('mob_image.en', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <span class="block text-sm text-gray-700 mb-2">Мобильное Изображение RU</span>
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
        <input type="file" class="hidden" id="mob_image_ru" name="mob_image[ru]" accept="image/png, image/jpeg">
    </label>
    {!! $errors->first('mob_image.ru', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="link" class="block text-sm text-gray-700">Ссылка</label>
    <input type="text" id="link" name="link" value="{{ isset($banner->link) ? $banner->link : old('link') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('link') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('link', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Активный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="1" @if(isset($banner->active) && $banner->active === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="0" @if(isset($banner->active) && $banner->active === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('active', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="order" class="block text-sm text-gray-700">Порядок</label>
    <input type="number" id="order" name="order" value="{{ isset($banner->order) ? $banner->order : old('order', 1) }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('order') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('order', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="submit">
        Сохранить
    </button>
</div>
