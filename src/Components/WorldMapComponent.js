import React ,{useState} from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import * as maps from '../Maps'
import styled from 'styled-components'
import { Popup } from 'semantic-ui-react'
import {Row , Col} from 'reactstrap'
import axios from 'axios';
import SpinnerComponent from './SpinnerComponent';
import AnimatedNumber from "animated-number-react";

function MapsDemo()
{

  const [hovered, setHovered] = useState('None');
  const [data , setData] = useState({})
  const [checkData , setCheckData] = useState(false)

const Map = styled.div`
  margin: 1rem auto;
  width: 100%;
  height : 70%
  margin-top : 20%;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168,43,43,0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168,43,43,0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

    }
  }
`;

const layerProps = {
  onMouseEnter: ({ target }) =>{
    setHovered(target.attributes.name.value)
    console.log(hovered)
  },
  onMouseLeave: ({ target }) =>{
    setHovered('None')
    console.log("OnMouseLeve")
    setCheckData(false)
  },
  onMouseOver : () =>{
      if(hovered == "United States")
      {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/USA`)
        .then((response) => {
            console.log("Raw",response)
            setData(response.data)
        })
        .catch((error) => console.log(error))
      }
      else if (hovered == "United Kingdom")
      {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/UK`)
        .then((response) => {
            console.log("Raw",response)
            setData(response.data)
        })
        .catch((error) => console.log(error))
      }
      else if(hovered == "Democratic Republic of Congo")
      {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/DRC`)
        .then((response) => {
            console.log("Raw",response)
            setData(response.data)
        })
        .catch((error) => console.log(error))
      }
      else{
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${hovered}`)
        .then((response) => {
            console.log("Raw",response)
            setData(response.data)
            setCheckData(true)
        })
        .catch((error) => console.log(error))
      }
  }
};

//console.log("Map Country",country)
    return(
      <div className = "container">
          <Row>
              <Col md = {11}>
              <Popup
                trigger = {            
                    <Map>
                        <VectorMap {...maps.World}  layerProps={layerProps} />
                    </Map>}>
                    <Popup.Header className = "popuphead">{hovered}</Popup.Header>
                    {
                        checkData ? <Popup.Content>
                                        <div>
                                            Cases : 
                                            <AnimatedNumber value = {data.cases} duration ={1000}/>
                                        </div>
                                        <div>
                                            Deaths : 
                                            <AnimatedNumber value = {data.deaths} duration ={1000}/>
                                        </div>
                                        <div>
                                            Recovered : 
                                            <AnimatedNumber value = {data.recovered} duration ={1000}/>
                                        </div>
                                        <div>
                                            Active Cases : 
                                            <AnimatedNumber value = {data.active} duration ={1000}/>
                                        </div>
                                        <div>
                                            Total Tests : 
                                            <AnimatedNumber value = {data.totalTests} duration ={1000}/>
                                        </div>
                                    </Popup.Content> : <SpinnerComponent/>
                    }
                </Popup>
              </Col>
          </Row>
      </div>

    )
}

export default MapsDemo