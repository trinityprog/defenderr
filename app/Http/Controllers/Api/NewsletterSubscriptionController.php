<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsletterSubscriptionJoinRequest;
use App\Models\NewsletterSubscription;

class NewsletterSubscriptionController extends Controller
{
    public function join(NewsletterSubscriptionJoinRequest $request)
    {
        $email = $request->input('email');

        if(NewsletterSubscription::query()->where('email', $email)->exists())
            return response()->json([
                'status' => 'success',
                'message' => 'Email has already been added to the newsletter!'
            ]);

        NewsletterSubscription::create($request->validated());

        return response()->json([
            'status' => 'success',
            'message' => 'Email successfully added for newsletter!'
        ]);
    }
}
