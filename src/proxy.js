import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
}

export const config = {
    matcher: ['/my-bookings', '/add-car', '/my-added-cars'],
}