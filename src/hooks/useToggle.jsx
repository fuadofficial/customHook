import { useState } from "react"

export const useToggle = () => {
    const [state, seState] = useState(false)

    const displyValue = () => {
        seState(!state)
    }
    return {
        state, displyValue
    }
}