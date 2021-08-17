import React from 'react'

const Display = (props) =>{
const {rices} = props
const loaded = () => (
    <div style = {{textAlign: 'center'}} className = 'rice'>
    {rices.map((rice, index) => (
        <article key = {index}>
            <h1>{rice.name}</h1>
            <h3>{rice.type}</h3>
            <p>{rice.description}</p>
            <img src = {rice.img}/>
            <p>{rice.uses}</p>
            <button onClick = {() => {
                props.selectRice(rice)
                props.history.push('/edit')
            }}>Edit</button>
            <button onClick = {() => {
                props.deleteRice(rice)
            }}>Delete</button>
        </article>
    ))}
    </div>
    )
    const loading = <h1>Waiting on rice</h1>
    return rices.length > 0 ? loaded() : loading
}
export default Display