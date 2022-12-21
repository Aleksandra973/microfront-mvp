import { useParams } from "react-router-dom"
import React from 'react';

const User = ({name}) => {
    let params = useParams()

    return (<h1>User id {params.id}</h1>)
}

export default User;