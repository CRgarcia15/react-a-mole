import {useEffect} from "react";
import MoleImg from "./assets/Mole.png"

function Mole (props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleImg} onClick={props.handleClick} alt="moles"/>
        </div>
    )
}

export default Mole