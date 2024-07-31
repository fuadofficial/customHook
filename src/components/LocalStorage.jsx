import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
const Storage = () => {
    const [value, setValue] = useState('')
    const { setItem, getItem, deleteItem } = useLocalStorage('value')
    return (

        <div className="main">
            <div className="'sub">
                <input type='text' onChange={(e) => setValue(e.target.value)} />
                <div className="button">
                    <button onClick={() => setItem(value)} >Set</button>
                    <button onClick={() => console.log(getItem())} >Get</button>
                    <button onClick={deleteItem}>Delete</button>
                </div>
            </div>


        </div>

    )
}
export default Storage;