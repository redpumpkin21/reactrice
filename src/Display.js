import React from 'react'
import Modalrice from './componets/Modal'
import { FaUtensilSpoon, FaTrashAlt} from "react-icons/fa";

const Display = (props) =>{
const {rices} = props
const loaded = () => (
    <div style = {{textAlign: 'center'}} className = 'rice'>
    {rices.map((rice, index) => (
        <article key = {index}>
            {/* <h1>{rice.name}</h1>
            <h3>{rice.type}</h3>
            <p>{rice.description}</p>
            <img src = {rice.img}/>
            <p>uses: {rice.uses}</p> */}
            <Modalrice rice = {rice}/>
            <button className = 'edit' onClick = {() => {
                props.selectRice(rice)
                props.history.push('/edit')
            }}><FaUtensilSpoon />Edit</button>
            <button className = 'delete' onClick = {() => {
                props.deleteRice(rice)
            }}><FaTrashAlt /></button>
        </article>
    ))}
    </div>
    )
    const loading = <h1>Waiting on rice</h1>
    return rices.length > 0 ? loaded() : loading
}
export default Display