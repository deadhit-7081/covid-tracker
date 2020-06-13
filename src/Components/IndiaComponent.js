import React , {useState,useEffect} from 'react'
import {Row , Col} from 'reactstrap'
import axios from 'axios'
import AnimatedNumber from "animated-number-react";
import LoadingComponent from './LoadingComponent';
import IndiaMap from './IndiaMapComponent'

function RenderIndia({india})
{
    return(
        <div className = "container">
            <h2>India Data</h2>
            <Row>
                <Col md={3} className = "col1">Total Cases<br/>
                <AnimatedNumber value={india.cases} duration = {1000}/>
                </Col>
                <Col md={3} className = "col2">Active Cases<br/>
                <AnimatedNumber value={india.active} duration = {1000}/>
                </Col>
                <Col md={3} className = "col3">Recovered Cases<br/>
                <AnimatedNumber value={india.recovered} duration = {1000}/>
                </Col>
            </Row>
            <Row>
            <Col md={3} className = "col4">Total Deaths<br/>
                <AnimatedNumber value={india.deaths} duration = {1000}/>
            </Col>
            <Col md={3} className = "col5">Today Cases<br/>
                <AnimatedNumber value={india.todayCases} duration = {1000}/>
            </Col>
            <Col md={3} className = "col6">Today Deaths<br/>
                <AnimatedNumber value={india.todayDeaths} duration = {1000}/>
            </Col>
            </Row>
        </div>
    )
}


function IndiaComponent(){
    const [india , setIndia] = useState("India")
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${india}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setIndia(response.data)
            setLoading(true)
        })
        .catch((error) => console.log(error))
    },[])
    return(
        <div className = "container">
            {
                loading ? <RenderIndia india={india}/> : <LoadingComponent/>
            }
            {
                loading ? <IndiaMap/> : <LoadingComponent/>
            }
        </div>
    )
}

export default IndiaComponent