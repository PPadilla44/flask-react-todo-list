import React, { useEffect } from "react";
import axios from "axios";


const Other = (props) => {

    useEffect(() => {

        // 127.0.0.1:5000/
        axios.get("http://localhost:5000/api/get/tasks")
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err))

    })

    return (
        <h1>OTHER</h1>
    )

}

export default Other;