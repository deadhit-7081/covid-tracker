import React , {useState,useEffect} from 'react'
import {Row , Col} from 'reactstrap'
import axios from 'axios'
import AnimatedNumber from "animated-number-react";
import LoadingComponent from './LoadingComponent';
import WorldMapComponent from './WorldMapComponent';

function RenderWorld({world})
{
    return(
        <div className = "container">
            <h2>World Data</h2>
            <Row>
                <Col md={3} className = "col1">Total Cases<br/>
                <AnimatedNumber value={world.cases} duration = {1000}/>
                </Col>
                <Col md={3} className = "col2">Active Cases<br/>
                <AnimatedNumber value={world.active} duration = {1000}/>
                </Col>
                <Col md={3} className = "col3">Recovered Cases<br/>
                <AnimatedNumber value={world.recovered} duration = {1000}/>
                </Col>
            </Row>
            <Row>
            <Col md={3} className = "col4">Total Deaths<br/>
                <AnimatedNumber value={world.deaths} duration = {1000}/>
            </Col>
            <Col md={3} className = "col5">Today Cases<br/>
                <AnimatedNumber value={world.deaths} duration = {1000}/>
            </Col>
            <Col md={3} className = "col6">Today Deaths<br/>
                <AnimatedNumber value={world.deaths} duration = {1000}/>
            </Col>
            </Row>
        </div>
    )
}


function WorldComponent(){
    const [world , setWorld] = useState("world")
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${world}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setWorld(response.data)
            setLoading(true)
        })
        .catch((error) => console.log(error))
    },[])
    return(
        <div className = "container">
            {
                loading ? <RenderWorld world={world}/> : <LoadingComponent/>
            }
            {
                loading ? <WorldMapComponent/> : <LoadingComponent/>
            }
        </div>
    )
}

export default WorldComponent