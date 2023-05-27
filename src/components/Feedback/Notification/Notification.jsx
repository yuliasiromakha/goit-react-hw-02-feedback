import React from "react";

const Notification = ({message, styles}) => {
    return(
        <p style={styles} >{message}</p>
    )
}

export default Notification;