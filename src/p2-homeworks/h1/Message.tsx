import React from 'react';
import s from "./Message.module.css";

export type messageDataPropsType = {
    avatar: string,
    name: string
    message: string
    time: string
}

function Message(props: messageDataPropsType) {
    return (
        <div className={s.all}>
            <div className={s.imgBlock}>
                <img className={s.img} src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.tri}></div>
            <div className={s.bodyMessage}>
                <h3 >{props.name}</h3>
                <p >{props.message}</p>
                <p className={s.time}>{props.time}</p>

            </div>
        </div>
    )
}

export default Message
