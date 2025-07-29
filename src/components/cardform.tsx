// react hook form
import { useForm } from "react-hook-form";

//ui components
import CompleteState from "./completestate";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// types
import type { CardInputTypes, CardUpdateProps } from "../constant/types";

// utility functions
import {formatCardNumber, formatExpiry} from "../utils/helper";



// JSDoc
/**
 * CardForm component for handling card details input and submission.
 * @param {CardUpdateProps} props - Props containing card details setters and submission state.
 * The rendered CardForm component.
 */

const CardForm = ({
    setCardHolderName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCvv,
    isSubmitted,
    setIsSubmitted
}:CardUpdateProps) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, setValue, reset} = useForm<CardInputTypes>()

    async function onSubmit(data:CardInputTypes): Promise<void> {
        // updating card details in 5 seconds after submission, to make is look like a real submission
        await new Promise((resolve) => setTimeout(resolve, 5000))

        console.log("Form submitted:", data);
        // updating card details
        setCardHolderName(data.cardHolderName);
        setCardNumber(data.cardNumber.replace(/\s/g, "")); // Remove spaces for storage
        setExpiryMonth(data.expiryMonth);
        setExpiryYear(data.expiryYear);
        setCvv(data.cvv);
        setIsSubmitted?.(true)

        // reset the form after submission
        reset();
    }

    if (isSubmitted) {
        return (
            <div className="text-center">
                <CompleteState />
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto p-4">
            {/* card holder name */}
            <div className="space-y-2">
                <Label htmlFor="cardHolderName" className="block text-sm font-semibold">
                    CardHolder Name
                </Label>
                <Input
                    id="cardHolderName"
                    autoComplete="name"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Omoshola Elegbede"
                    className="border rounded w-full"
                    {...register("cardHolderName", {
                        required: "Full name is required"
                    })}
                />
                {errors?.cardHolderName && (
                    <p className="text-errorRed text-sm">{errors?.cardHolderName?.message}</p>
                )}
            </div>

            {/* Card Number */}
            <div className="space-y-2">
                <Label htmlFor="cardNumber" className="block text-sm font-semibold">
                    Card Number
                </Label>
                <Input
                    id="cardNumber"
                    type="text"
                    autoComplete="true"
                    disabled={isSubmitting}
                    placeholder="e.g. 1243 8986 5646 9976"
                    className="border rounded w-full"
                    {...register("cardNumber", {
                        required: "Card number is required",
                        validate: (value) =>
                        value.replace(/\s/g, "").length === 16 || "Must be 16 digits",
                    })}
                    onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setValue("cardNumber", formatted);
                    }}
                    maxLength={19}
                />
                {errors?.cardNumber && (
                    <p className="text-errorRed text-sm">{errors?.cardNumber?.message}</p>
                )}
            </div>

                {/* Expiry Date (MM/YY) and CVV */}
                {/* MM */}
                <div className="flex gap-4 items-center w-full">
                    <div className="flex-1 flex flex-col space-y-2">
                        <h3 className="text-sm font-semibold">Expiry Date (MM/YY)</h3>
                        <div className="flex gap-3">
                            <div className="flex flex-col">
                                <Input
                                    id="expiryMonth"
                                    type="text"
                                    autoComplete="month"
                                    placeholder="MM"
                                    disabled={isSubmitting}
                                    className="border rounded w-full"
                                    {...register("expiryMonth", {
                                        required: "Month is required",
                                        validate: (value) =>
                                            (value.length === 2 && Number(value) <= 12) || "Invalid month",
                                    })}
                                    onChange={(e) => {
                                        const formatted = formatExpiry(e.target.value, "expiryMonth");
                                        setValue("expiryMonth", formatted);
                                    }}
                                    maxLength={2}
                                />
                                {errors.expiryMonth && (
                                    <p className="text-errorRed text-sm">{errors.expiryMonth.message}</p>
                                )}
                            </div>

                            {/* YY */}
                            <div className="">
                                <Input
                                    id="expiryYear"
                                    type="text"
                                    autoComplete="year"
                                    placeholder="YY"
                                    disabled={isSubmitting}
                                    className="border rounded w-full"
                                    {...register("expiryYear", {
                                        required: "Year is required",
                                        validate: (value) => value.length === 2 || "Must be 2 digits",
                                    })}
                                    onChange={(e) => {
                                        const formatted = formatExpiry(e.target.value, "expiryYear");
                                        setValue("expiryYear", formatted);
                                    }}
                                    maxLength={2}
                                />
                                {errors.expiryYear && (
                                    <p className="text-errorRed text-sm">{errors.expiryYear.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* CVV */}
                    <div className="flex-1 space-y-2">
                        <Label htmlFor="cvv" className="block text-sm font-semibold">
                            CVV
                        </Label>
                        <Input
                            id="cvv"
                            autoComplete="cc-csc"
                            type="text"
                            placeholder="123"
                            className="border rounded w-full"
                            disabled={isSubmitting}
                            {...register("cvv", {
                                required: "CVV is required",
                                validate: (value) =>
                                    [3].includes(value.length) || "Must be 3 digits",
                            })}
                            maxLength={3}
                        />
                        {errors.cvv && (
                            <p className="text-errorRed text-sm">{errors.cvv.message}</p>
                        )}
                    </div>
                </div>

            <div className="flex justify-center w-full">
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-primaryPurple text-primaryGray rounded hover:bg-primaryPurple/85 w-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Confirm"}
                </Button>
            </div>
        </form>
    );
}

export default CardForm