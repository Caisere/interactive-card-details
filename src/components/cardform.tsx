import { useForm } from "react-hook-form";
import type { CardInputTypes,CardUpdateProps } from "../constant/types";
import {formatCardNumber, formatExpiry} from "../utils/helper";


const CardForm = ({
    setCardHolderName,
    setCardNumber,
    setExpiryMonth,
    setExpiryYear,
    setCvv,
    isSubmitted,
    setIsSubmitted
}:CardUpdateProps) => {
    const {register, handleSubmit, formState: {errors}, setValue, reset} = useForm<CardInputTypes>()

    function onSubmit(data:CardInputTypes) {
        console.log("Form submitted:", data);
        // updating card details
        setCardHolderName(data.cardHolderName);
        setCardNumber(data.cardNumber.replace(/\s/g, "")); // Remove spaces for storage
        setExpiryMonth(data.expiryMonth);
        setExpiryYear(data.expiryYear);
        setCvv(data.cvv);
        setIsSubmitted?.(true)
        reset();
    }

    if (isSubmitted) {
        return (
            <div className="text-center text-green-500">
                <p>Card details updated successfully!</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto p-4">
            {/* card holder name */}
            <div className="space-y-2">
                <label htmlFor="cardHolderName" className="block text-sm font-medium">
                    CardHolder Name
                </label>
                <input
                    id="cardHolderName"
                    type="text"
                    placeholder="e.g. Omoshola Elegbede"
                    className="border rounded p-2 w-full"
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
                <label htmlFor="cardNumber" className="block text-sm font-medium">
                    Card Number
                </label>
                <input
                    id="cardNumber"
                    type="text"
                    placeholder="e.g. 1243 8986 5646 9976"
                    className="border rounded p-2 w-full"
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
                        <h3 className="text-sm font-medium">Expiry Date (MM/YY)</h3>
                        <div className="flex gap-3">
                            <div className="flex flex-col">
                                <input
                                    id="expiryMonth"
                                    type="text"
                                    placeholder="MM"
                                    className="border rounded p-2 w-full"
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
                                <input
                                    id="expiryYear"
                                    type="text"
                                    placeholder="YY"
                                    className="border rounded p-2 w-full"
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
                        <label htmlFor="cvv" className="block text-sm font-medium">
                            CVV
                        </label>
                        <input
                            id="cvv"
                            type="text"
                            placeholder="123"
                            className="border rounded p-2 w-full"
                            {...register("cvv", {
                                required: "CVV is required",
                                validate: (value) =>
                                    [3, 4].includes(value.length) || "Must be 3-4 digits",
                            })}
                            maxLength={3}
                        />
                        {errors.cvv && (
                            <p className="text-errorRed text-sm">{errors.cvv.message}</p>
                        )}
                    </div>
                </div>

            <div className="flex justify-center w-full">
                <button
                    type="submit"
                    className="bg-primaryPurple text-primaryGray p-2 rounded hover:bg-primaryPurple/85 w-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Confirm
                </button>
            </div>
        </form>
    );
}

export default CardForm