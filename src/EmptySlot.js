import {useEffect} from "react";
import MoleHill from './assets/MoleHill.png'

function EmptySlot (props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return() => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} alt="mole hill" />
        </div>
    )
}

export default EmptySlot