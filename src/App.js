import React, {useState, useEffect} from 'react'
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Display from "./Display";
import Form from "./Form";
import { CgBowl} from "react-icons/cg";

function App() {
  const url ="https://rice-api-628.herokuapp.com"

  const [rice, setRice] = useState([])
  

  const emptyRice = {
    name: "",
    type: "",
    description: "",
    img: "",
    uses: ""
  }
  const [selectedRice, setSelectedRice] = useState(emptyRice)

  const getRice = () => {
    fetch(url + '/rice') 
    .then((response) => response.json())
    .then((data) => {setRice(data)})
  }

  useEffect(() => {getRice()}, [])

  const handleCreate = (newRice) => {
    fetch(url + '/rice', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRice)
    }).then(() => {
      getRice()
    })
  }

  const handleUpdate = (rice) => {
    fetch(url + '/rice/' + rice._id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(rice)
    })
    .then(() => {
      getRice()
    })
  }
const selectRice = (rice) => {
  setSelectedRice(rice)
}
  const deleteRice = (rice) => {
    fetch(url + '/rice/' + rice._id, {
      method: 'delete'     
    })
    .then(() => {
      getRice()
    })
  }
  
  return (
    <div className="App">
      <h1> <CgBowl />Types of Rice!</h1>
      {/* <hr /> */}
      <Link to="/create">
        <button className = 'add'>ADD ANOTHER TYPE</button>
        </Link>
      
        <main>
          <Switch>
          <Route exact path="/" render={(rp) => <Display
         {...rp} 
         rices={rice}
          selectRice={selectRice}
          deleteRice ={deleteRice}/>} />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" rice={emptyRice} handleSubmit={handleCreate} />
            )}
          />
           <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" rice={selectedRice} handleSubmit={handleUpdate} />
            )}
          />
          </Switch>
        </main>
     
    </div>
  );
}

export default App;
