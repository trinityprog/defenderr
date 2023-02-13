<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class StorageService
{
    public function saveFile(UploadedFile $file, $disk = 'public', $fileName = '')
    {
        if($file == null) return;
        if($fileName == null) $fileName = Str::uuid();

        $fileName = $fileName . '.' . $file->getClientOriginalExtension();
        Storage::disk($disk)->putFileAs('', $file, $fileName);
        return $fileName;
    }

    public function checkFile($fileName, $disk = 'public')
    {
        return isset($fileName) && !is_null($fileName) ? (Storage::disk($disk)->exists($fileName) ? asset('storage/' . $disk . '/' . $fileName) : null) : null;
    }

    public function deleteFile($fileName, $disk = 'public')
    {
        return isset($fileName) && !is_null($fileName) ? Storage::disk($disk)->delete($fileName) : false;
    }

    public function fileFromLocalUrl(string $url)
    {
        if($url == null) return;
        if(! $stream = @fopen($url, 'r')) return;
        $tempFile = tempnam(sys_get_temp_dir(), 'url-file-');
        file_put_contents($tempFile, $stream);
        $info = pathinfo($url);
        $originalName = $info['basename'];
        $mimeType = $info['extension'];
        return new UploadedFile($tempFile, $originalName, $mimeType);
    }

    public function fileFromWebUrl(string $url)
    {
        if($url == null) return;
        $client = Http::get($url);
        if(! $stream = $client->body()) return;
        $tempFile = tempnam(sys_get_temp_dir(), 'url-file-');
        file_put_contents($tempFile, $stream);
        $finiteUrl = explode('?', $client->handlerStats()['url'])[0];
        $info = pathinfo($finiteUrl);
        $originalName = $info['basename'];
        $mimeType = $info['extension'];
        return new UploadedFile($tempFile, $originalName, $mimeType);
    }
}
