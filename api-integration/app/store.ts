'use client';
import { configureStore } from "@reduxjs/toolkit";
//mport counterReducer from "./features/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/data";

export const store = configureStore({
    reducer: {

        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware
            
        ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;