import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: () => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        {props.deleteAffairCallback()}

    }// need to fix

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            {props.affair.name} {props.affair.priority}
        </div>
    )
}

export default Affair
