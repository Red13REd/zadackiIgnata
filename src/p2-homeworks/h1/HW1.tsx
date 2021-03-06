import React from 'react'
import Message, {messageDataPropsType} from "./Message";


const messageData: messageDataPropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name ',
    message:  "Some text  " ,
    time: '22:00',
}


function HW1() {
    return (

        <div >
            <div style={{color:"white"}}>
                homeworks 1

                should work (должно работать)
            </div>
            <hr/>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    )
}

export default HW1
