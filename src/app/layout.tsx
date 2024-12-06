import type { Metadata } from 'next'

import './globals.scss'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
// import {GeistSans} from 'geist/font/sans'
import { Providers } from './providers'

import '@fontsource/roboto/400.css'; // Обычный вес
import '@fontsource/roboto/500.css'; // Полужирный вес
import '@fontsource/roboto/700.css'; // Жирный вес

import '@fontsource/montserrat/400.css'; // Обычный вес
import '@fontsource/montserrat/500.css'; // Полужирный вес
import '@fontsource/montserrat/700.css'; // Жирный вес

export const metadata: Metadata = {
	title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
                <Providers>
                    {children}
                </Providers>
            </body>
		</html>
	)
}
