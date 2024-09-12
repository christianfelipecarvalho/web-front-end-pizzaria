"use client"

import { createContext, ReactNode } from "react";

type OrderContextData = {
    isOpen: boolean;
    onRequestOpen: () => void;
    onRequestClose: () => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData);

