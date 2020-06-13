import React ,{useState} from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import * as maps from '../Maps'
import styled from 'styled-components'
import { Popup } from 'semantic-ui-react'
import axios from 'axios';
import AnimatedNumber from "animated-number-react";
import SpinnerComponent from './SpinnerComponent';

function IndiaMap()
{

  const [hovered, setHovered] = useState('None');
  const [states , setStates] = useState([])
  const [checkData , setCheckData] = useState(false)


const Map = styled.div`
  margin: 1rem auto;
  width: 300px;

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
  },
  onMouseLeave: ({ target }) =>{
    setHovered('None')
  },
  onMouseOver : () =>{
    axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/")
    .then((response) => {
      console.log(response.data.data.statewise)
      setStates(response.data.data.statewise)
      setCheckData(true)
    })
    .catch((error) => console.log(error))
  }
};

//console.log("Map Country",country)
    return(
      <div>
        <Popup 
        trigger = {            
        <Map>
          <VectorMap {...maps.India}  layerProps={layerProps} />
        </Map>}>
          <Popup.Header>{hovered}</Popup.Header>
          {
            checkData ? <Popup.Content>
                        {
                          states.filter(state => (state.state == hovered)).map(filterState =>(
                        <div>
                          <div>
                          Confirmed :<AnimatedNumber value={filterState.confirmed} duration = {1000}/>
                          </div>
                          <div>
                          Recovered :<AnimatedNumber value={filterState.recovered} duration = {1000}/>
                          </div>
                          <div>
                          Deaths :<AnimatedNumber value={filterState.deaths} duration = {1000}/>
                          </div>
                          <div>
                          Active :<AnimatedNumber value={filterState.active} duration = {1000}/>
                          </div>
                        </div>
                        ))
                        }
                        </Popup.Content> : <SpinnerComponent/>
          }
        </Popup>
      </div>

    )
}

export default IndiaMap