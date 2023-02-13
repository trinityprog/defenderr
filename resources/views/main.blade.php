<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="url" content="{{ url('/') }}">
    <meta name="format-detection" content="telephone=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <title>{{ env('APP_NAME') }}</title>

    <meta name="description" content="DEFENDERR, cartridges and machines for PMU / TATTOO. Designed in the USA. Worldwide shipping.">
    <meta name="keywords" content="defender">

    {{--    FAVICON--}}
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('favicon/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('favicon/safari-pinned-tab.svg') }}" color="#000000">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">

    {{--    OG--}}
    <meta property="og:title" content="DEFENDERR, cartridges and machines for PMU / TATTOO.">
    <meta property="og:url" content="{{ url("/") }}" />
    <meta property="og:image" content="{{ asset('i/og.png') }}" />
    <meta property="og:description" content="Designed in the USA. Worldwide shipping." />
    <meta property="og:type" content="website" />

    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <main id="app" class="min-h-screen">
        <router-view/>
    </main>
</body>
</html>
