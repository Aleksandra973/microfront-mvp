import { useParams } from "react-router-dom"
import React from 'react';

const Fruit = ({name}) => {
    let params = useParams()

    return (<h1>Fruit id {params.id}</h1>)
}

export default Fruit;