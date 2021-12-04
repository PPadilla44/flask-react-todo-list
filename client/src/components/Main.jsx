import React, { useEffect, useState } from "react";
import axios from "axios";


const Main = (props) => {

    const [tasks, setTasks] = useState([])

    const [name, setName] = useState("")


    const createTask = (e) => {
        e.preventDefault()
        console.log("BLEH");
        console.log(name);

        let data = {
            name
        }
        
        console.log(data);
        axios.post("http://localhost:5000/api/create/tasks", {
            data
        })
        .then(res => res.data)
        .then(data => {
            const { id } = data
            let newTask = {
                id,
                name,
                isCompleted: false
            }
            setTasks([...tasks, newTask])
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {

        axios.get("http://localhost:5000/api/get/tasks")
            .then((res) => {
                console.log(res.data);
                setTasks(res.data)

            })
            .catch(err => console.log(err))

    },[])

    return (
        <div className="App">

            {tasks && tasks.map((task,i) => {
                return (
                    <div key={i}>
                        <h1>{task.name}</h1>
                        <h1>{task.is_completed ? "True" : "False"}</h1>
                    </div>
                )
            })}

            <form onSubmit={createTask}>
                <h1>CREATE A TASK</h1>
                <input type="text" onChange={(e) => setName(e.target.value)}  name="name"/>
                <button>Create</button>
            </form>

        </div>
    )

}

export default Main;