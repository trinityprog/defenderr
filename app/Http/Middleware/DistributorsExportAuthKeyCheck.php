<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DistributorsExportAuthKeyCheck
{
    public function handle(Request $request, Closure $next)
    {
        abort_if(
            ! $request->header('Auth-Key') || $request->header('Auth-Key') !== 'a8E6#3E4oUKol',
            401,
            'Unauthorized'
        );

        return $next($request);
    }
}
