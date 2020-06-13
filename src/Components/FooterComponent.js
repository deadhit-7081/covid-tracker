import React from 'react'
import {Row , Col} from 'reactstrap'
import {faGithub , faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent()
{
    return(
        <div className = "container">
            <Row className = "footer">
                <Col md={3} className = "font">Connect with me<br/>
                <p>
                    <a href="https://github.com/deadhit-7081" className="font1">
                        <FontAwesomeIcon icon ={faGithub} size = "2x" color="black"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jai-kumar-singh-0b9b22190/" className = "font2">
                        <FontAwesomeIcon icon ={faLinkedinIn} size = "2x"/>
                    </a>
                </p>
                </Col>
                <Col md={6} className="font3">&copy; Jai Kumar Singh Impulsive</Col>
                <Col md={3} className = "font2">Be Stubbon to learn any thing<br/>
                <p className="sign">~Jai Kumar Singh</p></Col>
            </Row>
        </div>
    )
}

export default FooterComponent