<div>
    <label for="name_en" class="block text-sm text-gray-700">Название EN</label>
    <input type="text" id="name_en" name="name[en]" value="{{ isset($characteristic->name) ? $characteristic->getTranslation('name', 'en') : old('name.en') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="name_ru" class="block text-sm text-gray-700">Название RU</label>
    <input type="text" id="name_ru" name="name[ru]" value="{{ isset($characteristic->name) ? $characteristic->getTranslation('name', 'ru') : old('name.ru') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="filter_all_variants_en" class="block text-sm text-gray-700">Название (множ. число. например: "All Patterns") EN</label>
    <input type="text" id="filter_all_variants_en" name="filter_all_variants[en]" value="{{ isset($characteristic->filter_all_variants) ? $characteristic->getTranslation('filter_all_variants', 'en') : old('filter_all_variants.en') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('filter_all_variants.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('filter_all_variants.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="filter_all_variants_ru" class="block text-sm text-gray-700">Название (множ. число. например: "All Patterns") RU</label>
    <input type="text" id="filter_all_variants_ru" name="filter_all_variants[ru]" value="{{ isset($characteristic->filter_all_variants) ? $characteristic->getTranslation('filter_all_variants', 'ru') : old('filter_all_variants.ru') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('filter_all_variants.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('filter_all_variants.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Фильтруется</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="filterable" value="1" required @if(isset($characteristic->filterable) && $characteristic->filterable === 1) checked @endif
               class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="filterable" value="0" required @if(isset($characteristic->filterable) && $characteristic->filterable === 0) checked @endif
               class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('filterable', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="set" class="block text-sm text-gray-700">Характеристики Группа</label>
    <select name="set" id="set"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('set') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
        <option value>Выберите</option>
        @foreach($sets as $set)
            <option value="{{ $set->id }}" {{ isset($characteristic->char_tic_set_id) && $characteristic->char_tic_set_id === $set->id ? 'selected' : ''}}>
                {{ $set->name }}</option>
        @endforeach
    </select>
    {!! $errors->first('set', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="submit">
        Сохранить
    </button>
</div>
