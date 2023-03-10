<x-app-layout>
    <x-slot name="header">
        Изменение Документов Товара
    </x-slot>

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="mb-8">
            <a href="{{ url()->previous() }}" class="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                <svg class="w-5 h-5 inline-block align-text-bottom" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Назад
            </a>
        </div>
        <form method="POST" action="{{ route('admin.products.docs.store', $product->id) }}" enctype="multipart/form-data">
            @csrf

            @if($category->slug === 'machines')
                <div>
                    <span  class="block text-sm text-gray-700 mb-4">Презентация EN (<a href="{{ asset('docs/presentation-'. $product->parent_group .'-en.pdf') }}" target="_blank">{!! \Illuminate\Support\Facades\File::exists(public_path('docs/presentation-'. $product->parent_group .'-en.pdf')) ? '<b class="text-green-500">Файл найден</b>' : '<b class="text-red-500">Файл не найден</b>' !!}</a>)</span>

                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
                        <input type="file" class="hidden" name="docs[presentation-{{ $product->parent_group }}-en]" accept="application/pdf">
                    </label>
                    {!! $errors->first('docs.presentation-' . $product->parent_group . '-en', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
                </div>

                <div class="mt-4">
                    <span  class="block text-sm text-gray-700 mb-4">Презентация RU (<a href="{{ asset('docs/presentation-'. $product->parent_group .'-ru.pdf') }}" target="_blank">{!! \Illuminate\Support\Facades\File::exists(public_path('docs/presentation-'. $product->parent_group .'-ru.pdf')) ? '<b class="text-green-500">Файл найден</b>' : '<b class="text-red-500">Файл не найден</b>' !!}</a>)</span>

                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
                        <input type="file" class="hidden" name="docs[presentation-{{ $product->parent_group }}-ru]" accept="application/pdf">
                    </label>
                    {!! $errors->first('docs.presentation-' . $product->parent_group . '-ru', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
                </div>

                <div class="mt-4">
                    <span  class="block text-sm text-gray-700 mb-4">Мануал EN (<a href="{{ asset('docs/manual-'. $product->parent_group .'-en.pdf') }}" target="_blank">{!! \Illuminate\Support\Facades\File::exists(public_path('docs/manual-'. $product->parent_group .'-en.pdf')) ? '<b class="text-green-500">Файл найден</b>' : '<b class="text-red-500">Файл не найден</b>' !!}</a>)</span>

                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
                        <input type="file" class="hidden" name="docs[manual-{{ $product->parent_group }}-en]" accept="application/pdf">
                    </label>
                    {!! $errors->first('docs.manual-' . $product->parent_group . '-en', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
                </div>

                <div class="mt-4">
                    <span  class="block text-sm text-gray-700 mb-4">Мануал RU (<a href="{{ asset('docs/manual-'. $product->parent_group .'-ru.pdf') }}" target="_blank">{!! \Illuminate\Support\Facades\File::exists(public_path('docs/manual-'. $product->parent_group .'-ru.pdf')) ? '<b class="text-green-500">Файл найден</b>' : '<b class="text-red-500">Файл не найден</b>' !!}</a>)</span>

                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <span class="mt-2 text-base leading-normal">Выбрать файл</span>
                        <input type="file" class="hidden" name="docs[manual-{{ $product->parent_group }}-ru]" accept="application/pdf">
                    </label>
                    {!! $errors->first('docs.manual-' . $product->parent_group . '-ru', '<p class="mt-2 ml-2 text-xs text-red-600 dark:text-red-400">:message</p>') !!}
                </div>
            @endif

            <div class="mt-8">
                <button class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit">
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</x-app-layout>
