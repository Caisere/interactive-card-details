// react hooks
import { useState } from "react";

// utility functions
import { formatCardNumber } from "./utils/helper";

// Importing UI components
import CardForm from "./components/cardform";
import CreditCard from "./components/creditcard"
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';


//JSDoc
/** * App component that renders the main application layout.
 * It includes a credit card display and a form for entering card details.
 *  The rendered App component.
 */

function App() {
    const [cardHolderName, setCardHolderName] = useState<string>("")
    const [cardNumber, setCardNumber] = useState<string>("")
    const [expiryMonth, setExpiryMonth] = useState<string>("")
    const [expiryYear, setExpiryYear] = useState<string>("")
    const [cvv, setCvv] = useState<string>("")
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)


    return (
        <main className="w-full flex flex-col items-center gap-30 min-h-screen bg-gray-100 sm:flex-row">
            <div className=" relative w-full bg-[url('./bg-mobile.png')]  bg-cover bg-no-repeat h-[35dvh] sm:bg-[url('public/bg-main-desktop.png')] sm:h-[100dvh] sm:w-[40vw]">
                <div className="absolute top-[10%] left-[25%] w-[70%] sm:w-[80%] sm:left-[50%] sm:top-[50%] ">
                    <div className="relative">
                        <Avatar className="w-full">
                            <AvatarImage src="public/bg-card-back.png" className="w-full relative" />
                            <AvatarFallback className="text-primaryGray text-lg">
                                alt="credit-card back"
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute top-[50%] left-[10%] sm:top-[43%] sm:left-[75%]">
                            <p className="text-primaryGray text-lg ">
                                {cvv || "000"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[50%] left-[6%] w-[70%] sm:w-[100%] sm:left-[35%] sm:top-[12%]">
                    <div className="relative">
                        <Avatar className="w-full">
                            <AvatarImage src="public/bg-card-front.png" className="w-full relative" />
                            <AvatarFallback className="text-primaryGray text-lg">
                                alt="credit-card front"
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute top-[10%] left-[10%] sm:top-[60%] sm:left-[7%] flex flex-col gap-3">
                            <h1 className="text-primaryGray text-3xl tracking-widest font-bold">
                                {formatCardNumber(cardNumber) || "0000 0000 0000 0000"}
                            </h1>
                            <div className="flex justify-between items-center">
                                <p className="text-primaryGray text-sm font-semibold">
                                    {cardHolderName || "Omoshola"}
                                </p>
                                <p className="text-primaryGray text-sm font-semibold">
                                    {expiryMonth && expiryYear ? `${expiryMonth} / ${expiryYear}` : "00 / 00"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-[60vw] flex items-center justify-center">
                <CreditCard >
                    <CardForm
                        setCardHolderName={setCardHolderName}
                        setCardNumber={setCardNumber}
                        setExpiryMonth={setExpiryMonth}
                        setExpiryYear={setExpiryYear}
                        setCvv={setCvv}
                        isSubmitted={isSubmitted}
                        setIsSubmitted={setIsSubmitted}
                    />
                </CreditCard>
            </div>
        </main>
    )
}

export default App
