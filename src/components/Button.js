import React from "react";

export function Button(props) {
    console.log(props)
    const { label = "Default", handleClick = () => console.log("i am default")  } = props;
    return <button onClick={handleClick}>{label}</button>
}

