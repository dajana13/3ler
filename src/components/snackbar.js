import React from "react";
import "../css/App.css"

export default function Snackbar(props) {

    return ( 
        <div className="modal-form-submit column">
            <p className="modal-form-text body2">{props.message}</p>
        </div>
    )
}