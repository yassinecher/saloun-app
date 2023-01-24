import React from "react"
import { Link } from "react-router-dom"
import { signInWithGoogle } from "../../firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { f1a0 } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../logo1.svg"
import "../../style/main.css"


export default function Mainf() {

    return (<>
    
        <div className="container">
            
            <div className="row">
                <div className="col-12 center">
                 <div className="logotext"><div className="logo"><img  src={logo} width="70"/></div> Saloun</div>
                </div> 
                <div className="col-12 center"><br/></div>
                <div className="col-12">
                <IndividualIntervalsExample/>

                </div>
                <div className="col-12">
                    <Link to="/signup" className="btn btn-primary  btn-block">Join now</Link>
                    <button onClick={signInWithGoogle} className="btn btn-outline-dark btn-block"><FontAwesomeIcon icon={faGoogle} /> | Continue with Google</button>
                    <Link to="/login" className="btn btn-block blue text-primary">login</Link></div>
            </div>
        </div>
    </>)
}
function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/im1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark font-weight-bold">First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/im2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark font-weight-bold">Second slide label</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="images/im3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark font-weight-bold">Third slide label</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  