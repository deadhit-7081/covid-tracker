import React ,{useState , useEffect} from 'react';
import { Jumbotron,Col,Row} from 'reactstrap';
import axios from 'axios'
import SpinnerComponent from './SpinnerComponent';

function JumbotronContainer() {
  const [image , setImage] = useState('')
  const [checkLoading , setCheckLoading] = useState(false)

  useEffect(() => {
    axios.get("https://pixabay.com/api/?key=YOUR_API_KEY=coronavirus&image_type=photo&pretty=true")
    .then((response) => {
      console.log(response.data.hits)
      setImage(response.data.hits[Math.floor(Math.random() * response.data.hits.length)])
      setCheckLoading(true)
    })
    .catch((error) => console.log(error))
  },[])
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col md={{size : 5 , offset : 2}}>
          <h1 className = "jumbo">Covid 19</h1><br/>
          <p className = "note1">Note -- Move mouse pointer on <b>World Map</b> to see country wise data or 
          move mouse pointer to <b>India Map</b> to see state-wise data</p><br/>
          <p className = "note2">If desired data dosen't popsup then move mouse pointer away from map and again hover
            on the desired place to see its data
          </p><br/>
          </Col>
          <Col md = {{size :3 }}>
            {
              console.log("Check Loading",checkLoading)
            }
            {
              checkLoading ? <img src = {image.webformatURL} className = "image" alt="corona"/> :<SpinnerComponent/> 
            }
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default JumbotronContainer;