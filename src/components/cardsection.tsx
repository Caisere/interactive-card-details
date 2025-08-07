import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { formatCardNumber } from "../utils/helper";
import type { CardInputTypes } from '@/types';

function CardSection ({expiryMonth, cvv, expiryYear, cardHolderName, cardNumber}:CardInputTypes) {
    return <>
        <div className="absolute top-[10%] left-[25%] w-[70%] sm:w-[80%] sm:left-[50%] sm:top-[50%] ">
            <div className="relative">
                <Avatar className="w-full">
                    <AvatarImage src="/bg-card-back.png" className="w-full relative" />
                    <AvatarFallback className="text-primaryGray text-lg">
                        alt="credit-card back"
                    </AvatarFallback>
                </Avatar>
                <div className="absolute top-[43%] left-[80%] sm:top-[43%] sm:left-[75%]">
                    <p className="text-primaryGray text-sm sm:text-xl ">
                        {cvv || "000"}
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute top-[65%] left-[6%] w-[70%] sm:w-[100%] sm:left-[35%] sm:top-[12%]">
            <div className="relative">
                <Avatar className="w-full">
                    <AvatarImage src="/bg-card-front.png" className="w-full relative" />
                    <AvatarFallback className="text-primaryGray text-lg">
                        alt="credit-card front"
                    </AvatarFallback>
                </Avatar>
                <div className="absolute top-[50%] left-[10%] sm:top-[60%] sm:left-[12%] flex flex-col gap-3">
                    <h1 className="text-primaryGray text-lg sm:text-3xl tracking-widest font-bold">
                        {formatCardNumber(cardNumber) || "0000 0000 0000 0000"}
                    </h1>
                    <div className="flex justify-between items-center">
                        <p className="text-primaryGray text-sm font-semibold">
                            {cardHolderName || "Omoshola"}
                        </p>
                        <p className="text-primaryGray text-sm font-semibold sm:text-xl">
                            {expiryMonth && expiryYear ? `${expiryMonth} / ${expiryYear}` : "00 / 00"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default CardSection;
