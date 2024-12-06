'use client'

import { PropsWithChildren, useState } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from "@/Providers/Theme.provider";
import { ModalProvider } from "@/Providers/Modal.provider";
import { Provider as ReduxProvider } from 'react-redux';
import store from "@/store/store";
import { ScrollProvider } from "@/Providers/ScrollProvider";

export function Providers({children}: PropsWithChildren){
    const [client] = useState(
        new QueryClient({
            defaultOptions:{
                queries:{
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            <ReduxProvider store={store}>
                <ScrollProvider>
                    <ThemeProvider>
                        <ModalProvider>
                            <Toaster />
                            {children}
                        </ModalProvider>
                    </ThemeProvider>
                </ScrollProvider>
            </ReduxProvider>
        </QueryClientProvider>
    )
}