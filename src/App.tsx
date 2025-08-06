// react hooks
import { useState } from "react";


// Importing UI components
import CardForm from "./components/cardform";
import CreditCard from "./components/creditcard"
import CardSection from "./components/cardsection";



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
            <div className=" relative w-full bg-[url('/bg-mobile.png')]  bg-cover bg-no-repeat h-[35dvh] sm:bg-[url('/bg-main-desktop.png')] sm:h-[100dvh] sm:w-[40vw]">
                <CardSection 
                    expiryMonth={expiryMonth} 
                    expiryYear={expiryYear} 
                    cardHolderName={cardHolderName} 
                    cardNumber={cardNumber} 
                    cvv={cvv} 
                />
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
