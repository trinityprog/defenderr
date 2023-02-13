<div>
    <label for="question_en" class="block text-sm text-gray-700">Вопрос EN</label>
    <input type="text" id="question_en" name="question[en]" value="{{ isset($faq->question) ? $faq->getTranslation('question', 'en') : old('question.en') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('question.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('question.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="question_ru" class="block text-sm text-gray-700">Вопрос RU</label>
    <input type="text" id="question_ru" name="question[ru]" value="{{ isset($faq->question) ? $faq->getTranslation('question', 'ru') : old('question.ru') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('question.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('question.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="answer_en" class="block text-sm text-gray-700">Ответ EN</label>
    <textarea ckeditor rows="5" id="answer_en" name="answer[en]"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('answer.en') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">{{ isset($faq->answer) ? $faq->getTranslation('answer', 'en') : old('answer.en') }}</textarea>
    {!! $errors->first('answer.en', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="answer_ru" class="block text-sm text-gray-700">Ответ RU</label>
    <textarea ckeditor rows="5" id="answer_ru" name="answer[ru]"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('answer.ru') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">{{ isset($faq->answer) ? $faq->getTranslation('answer', 'ru') : old('answer.ru') }}</textarea>
    {!! $errors->first('answer.ru', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="category" class="block text-sm text-gray-700">Категория</label>
    <select name="category" id="category"
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('category') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
        <option value>Выберите</option>
        @foreach($faqs_categories as $faqs_category)
            <option value="{{ $faqs_category->id }}" @if(isset($faq->faq_category_id) && $faq->faq_category_id === $faqs_category->id) selected @endif>{{ $faqs_category->name }}</option>
        @endforeach
    </select>
    {!! $errors->first('category', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Активный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="1" @if(isset($faq->active) && $faq->active === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="0" @if(isset($faq->active) && $faq->active === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('active', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="order" class="block text-sm text-gray-700">Порядок</label>
    <input type="number" id="order" name="order" value="{{ isset($faq->order) ? $faq->order : old('order', 1) }}"
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
