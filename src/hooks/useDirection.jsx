import { useState } from "react"

export const useDirection = () => {
    const [direction, setDirection] = useState('ltr')

    const toggleDirection = () => {
        setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'));
    };

    return { direction, toggleDirection }
}