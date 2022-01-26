import React, {ChangeEvent, useState, KeyboardEvent,MouseEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>("Не может быть пустым") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
       // need to fix
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.ctrlKey && addUser()
        setError("")
    }

    const addUser = () => {
        if (name.trim() === "") {
            setError("Не может быть пустым")

        } else {
            addUserCallback(name.trim())
            setName("")

        }
        // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddTask={onKeyPressAddTask}
        />
    )
}


