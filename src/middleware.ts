// middleware/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { authMiddleware, authConfig } from "./middleware/auth";
import { adminMiddleware, adminConfig } from "./middleware/admin";

export async function middleware(request: NextRequest) {
    // Сначала проверяем аутентификацию, только для указанных маршрутов
    const isAuthRoute = authConfig.matcher.some(route => request.nextUrl.pathname.startsWith(route));
    if (isAuthRoute) {
        const authResponse = await authMiddleware(request);
        if (authResponse) return authResponse;
    }

    // Затем проверяем, что пользователь является администратором только для админ маршрутов
    const isAdminRoute = adminConfig.matcher.some(route => request.nextUrl.pathname.startsWith(route));
    if (isAdminRoute) {
        const adminResponse = await adminMiddleware(request);
        if (adminResponse) return adminResponse;
    }

    return NextResponse.next();
}