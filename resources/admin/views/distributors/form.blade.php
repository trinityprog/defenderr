<div>
    <label for="name" class="block text-sm text-gray-700">Название</label>
    <input type="text" id="name" name="name" value="{{ isset($distributor->name) ? $distributor->name : old('name') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('name') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('name', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="website" class="block text-sm text-gray-700">Сайт</label>
    <input type="text" id="website" name="website" value="{{ isset($distributor->website) ? $distributor->website : old('website') }}"
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('website') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('website', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="phone" class="block text-sm text-gray-700">Телефон</label>
    <input type="text" id="phone" name="phone" value="{{ isset($distributor->phone) ? $distributor->phone : old('phone') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('phone') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('phone', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="email" class="block text-sm text-gray-700">Email</label>
    <input type="email" id="email" name="email" value="{{ isset($distributor->email) ? $distributor->email : old('email') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('email') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('email', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <label for="country" class="block text-sm text-gray-700">Страна</label>
    <input type="text" id="country" name="country" value="{{ isset($distributor->country) ? $distributor->country : old('country') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('country') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('country', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-4">
    <label for="city" class="block text-sm text-gray-700">Город</label>
    <input type="text" id="city" name="city" value="{{ isset($distributor->city) ? $distributor->city : old('city') }}" required
           class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                {{ $errors->has('city') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}"/>
    {!! $errors->first('city', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

@foreach(range(1, 3) as $i)
    <div class="{{ $loop->iteration === 1 ? 'mt-10' : 'mt-4' }}">
        <div class="flex gap-x-2">
            <select name="socials[{{$loop->index}}][name]"
                    class="block w-[200px] px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                <option value>Выберите</option>
                <option value="instagram" @if(isset($distributor->socials) && $distributor->socials[$loop->index]->name === 'instagram') selected @endif>instagram</option>
                <option value="facebook" @if(isset($distributor->socials) && $distributor->socials[$loop->index]->name === 'facebook') selected @endif>facebook</option>
                <option value="whatsapp" @if(isset($distributor->socials) && $distributor->socials[$loop->index]->name === 'whatsapp') selected @endif>whatsapp</option>
                <option value="vk" @if(isset($distributor->socials) && $distributor->socials[$loop->index]->name === 'vk') selected @endif>vk</option>
                <option value="telegram" @if(isset($distributor->socials) && $distributor->socials[$loop->index]->name === 'telegram') selected @endif>telegram</option>
            </select>
            <input type="text" name="socials[{{$loop->index}}][link]" value="{{ isset($distributor->socials) ? $distributor->socials[$loop->index]->link : old('socials.' . $loop->index. '.link') }}"
                   class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"/>
        </div>
    </div>
@endforeach

<div class="mt-10">
    <span class="text-gray-700 dark:text-gray-400 block mb-2">Активный</span>
    <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="1" @if(isset($distributor->active) && $distributor->active === 1) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Да</span>
    </label>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input type="radio" name="active" value="0" @if(isset($distributor->active) && $distributor->active === 0) checked @endif
        class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
        <span class="ml-2">Нет</span>
    </label>
    {!! $errors->first('active', '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
</div>

<div class="mt-10">
    <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            type="submit">
        Сохранить
    </button>
</div>
