import type { Dispatch, SetStateAction } from "react";

export type CardInputTypes = {
    cardHolderName: string
    cardNumber: string,
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
}

export type CardUpdateProps = {
    setCardHolderName: Dispatch<SetStateAction<string>>;
    setCardNumber: Dispatch<SetStateAction<string>>;
    setExpiryMonth: Dispatch<SetStateAction<string>>;
    setExpiryYear: Dispatch<SetStateAction<string>>;
    setCvv: Dispatch<SetStateAction<string>>;
    isSubmitted?: boolean;
    setIsSubmitted?: Dispatch<SetStateAction<boolean>>;
}