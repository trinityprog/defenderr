<x-app-layout>
    <x-slot name="header">
        Изменение Характеристик Товара "{{$product->name}}"
    </x-slot>

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="mb-8">
            <a href="{{ url()->previous() }}" class="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-5 h-5 inline-block align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Назад
            </a>
        </div>
        <form method="POST" action="{{ route('admin.products.characteristics.store', $product->id) }}" enctype="multipart/form-data">
            @csrf

            <div>
                <label  class="block text-sm text-gray-700">Характеристики Группа</label>
                <input type="text" value="{{ $product->char_tic_set->name }}" readonly
                       class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"/>
            </div>

            @foreach($product->char_tic_set->char_tic as $char_tic)
                <div class="mt-4">
                    <label for="char_tic_{{ $char_tic->id }}" class="block text-sm text-gray-700">{{ $char_tic->name }}</label>
                    <select name="char_tic[{{ $char_tic->id }}]" id="char_tic_{{ $char_tic->id }}" required
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600
                            {{ $errors->has('set') ? 'focus:border-red-400 focus:outline-none focus:shadow-outline-red' : ''}}">
                        <option value>Выберите</option>
                        @foreach($characteristics_values as $value)
                            <option value="{{ $value->id }}"  {{ $product_characteristic_value->where('name', $char_tic->id)->where('value', $value->id)->first() ? 'selected' : ''}}>
                                {{ $value->name }}</option>
                        @endforeach
                    </select>
                    {!! $errors->first('char_tic.' . $char_tic->id, '<p class="text-xs text-red-600 dark:text-red-400">:message</p>') !!}
                </div>
            @endforeach

            <div class="mt-8">
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit">
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</x-app-layout>
