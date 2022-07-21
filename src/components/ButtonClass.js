import React from "react";



// export function Button(props) {
//     console.log(props)
//     const { label = "Default" } = props;
//     return <button onClick={() => console.log()}>{props.label}</button>
// }
export class ButtonClass extends React.Component {
    constructor (props) {
        super(props)
    }



render() {
    const { label = "Default", handleClick = () => console.log("i am default")  } = this.props;
    // const {handleClick, label} = this.props
    return <button conClick={handleClick}>{label}</button>
}
}