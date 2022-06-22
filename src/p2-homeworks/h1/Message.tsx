import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={"ava"}/>
            <div className={s.title}>
                <div className={s.name}>{props.name}</div>
                <div className={s.mes}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
