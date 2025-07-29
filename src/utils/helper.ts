
// function to format card number input
const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted.substring(0, 19); // 16 digits + 3 spaces
};

// function to format MM and YY
const formatExpiry = (value: string, field: "expiryMonth" | "expiryYear") => {
    const digitsOnly = value.replace(/\D/g, "");
    if (field === "expiryMonth") {
        // limit month to 12
        const month = Math.min(Number(digitsOnly.substring(0, 2)), 12);
        return month.toString().padStart(2, "0");
    } else {
        // limit year to 2 digits
        return digitsOnly.substring(0, 2);
    }
};

export {formatCardNumber, formatExpiry}


