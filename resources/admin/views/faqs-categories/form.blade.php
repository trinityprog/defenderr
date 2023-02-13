<div>
    <label for="name_en" class="block text-sm text-gray-700">Название EN</label>
    <input type="text" id="name_en" name="name[en]" value="{{ isset($faqs_category->name) ? $faqs_category->getTranslation('name', 'en') : old('name.en') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="name_ru" class="block text-sm text-gray-700">Название RU</label>
    <input type="text" id="name_ru" name="name[ru]" value="{{ isset($faqs_category->name) ? $faqs_category->getTranslation('name', 'ru') : old('name.ru') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Активный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="1" @if(isset($faqs_category->active) && $faqs_category->active === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="0" @if(isset($faqs_category->active) && $faqs_category->active === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('active', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="order" class="block text-sm text-gray-700">Порядок</label>
    <input type="number" id="order" name="order" value="{{ isset($faqs_category->order) ? $faqs_category->order : old('order', 1) }}"
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
