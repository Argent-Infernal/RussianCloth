// middleware/adminMiddleware.ts
import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "../services/auth/auth-token.service";
import { PUBLIC_URL } from "../config/url.config";
import { axiosWithAuth } from "@/api/api.interceptors";
import { IUser } from "@/shared/types/user.interface";
import { API_URL } from "@/config/api.config";
import { userService } from "@/services/user.service";

export async function adminMiddleware(request: NextRequest) {
    const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

    if (refreshToken === undefined) {
        return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url));
    }

    try {
        const response = await axiosWithAuth<any>({
            url: API_URL.users('/check-is-admin'),
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        });

        if (response.status !== 200) {
            console.error(`Error: Received status ${response.status}`);
            return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url));
        }

        const { data } = response;

        if (!data) {
            return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url));
    }
}

// Конфигурация для adminMiddleware
export const adminConfig = {
    matcher: ['/admin/:path*', '/admin'], // Укажите маршруты для adminMiddleware
};