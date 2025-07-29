import { Check } from "lucide-react";
import { Button } from "./ui/button";

const CompleteState = () => {
    return (
        <main className="flex flex-col items-center justify-center h-full space-y-6">
            <Check className="h-20 w-20 bg-primaryPurple p-2 text-primaryGray rounded-full" />
            <h1 className="uppercase font-semibold text-3xl tracking-widest">Thank You!</h1>
            <p className="text-sm tracking-widest text-secondaryGray">We've added your card details</p>

            <Button className="bg-primaryPurple text-white px-4 py-2 rounded mt-4 hover:bg-primaryPurple/85 transition-all duration-200 w-full">
                Continue
            </Button>
        </main>
    )
}

export default CompleteState