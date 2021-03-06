import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {inspect} from "util";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddTask: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressAddTask,} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.unerror // need to fix with (?:)
    const disabled = inputClass === s.error

    return (
        <div>
            <input onKeyPress={onKeyPressAddTask} value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={disabled} onClick={addUser}>add</button>
            <span style={{color:"white"}} >{totalUsers}</span>
            <div style={{color:"red"}}>{error}</div>
        </div>
    )
}

export default Greeting
