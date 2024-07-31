import { useState } from "react"

export const useLocalStorage = (key) => {

    const [value, setValue] = useState('')


    const setItem = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
        setValue('')
    }

    const getItem = () => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : undefined;
        } catch (error) {
            console.log(error)
        }
        setValue('')
    }

    const deleteItem = () => {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }
        setValue('')
    }

    return {value,setValue, getItem, setItem, deleteItem }
}