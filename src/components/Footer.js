import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
      <div className="grid-container">
            <div className="grid-item">
                <h1>ABOUT</h1>
                   <p>Welcome to New Jersey Driving School, where we empower individuals of all ages to become safe and responsible drivers.

We offer a diverse range of programs designed to meet your unique needs and goals, whether you're a nervous 16-year-old, a returning adult driver, or a seasoned driver seeking to refine your skills.</p>
                
                    <h2>Middlesex</h2>
                    <p>Liscence Number: 2222</p>
                    <h2>Woodbridge</h2>
                    <p>Liscence Number: 2222</p>
                
            </div>
            <div className="grid-item">
                <h1>NAVIGATION</h1>
                <ol>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Instructors</li>
                    <li>Practice Test</li>
                    <li>Contact Us</li>
                    <li>Videos</li>
                    <li>FAQ</li>
                    <li>Schedule A Road Test</li>
                </ol>
        
            </div>
            

            <div className="grid-item">
                <h1>EDISON DRIVING SCHOOL</h1>
                 <p> <FontAwesomeIcon icon={faLocationDot} /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, exercitationem!</p>
                  <br />
                    
                   <FontAwesomeIcon icon={faPhone} /> <a href="tel:">Telephone:(732)-423-3893</a>
                    
                    <p>Liscense Number: 22222</p>
                    <br />
                    <h2>OFFICE HOURS</h2>
                    <p>Open 7 Days A Week</p>
            </div>
    <div className="grid-item">
        <h1>ACCURATE DRIVING SCHOOL</h1>
                 <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nam animi unde assumenda, exercitationem 
                    doloribus praesentium et beatae amet similique sed!</p>
                    <br />
                   <FontAwesomeIcon icon={faPhone} /><a href="tel:">  Telephone:(732)-423-3893</a>
                    
                    <h2>OFFICE HOURS</h2>
                    <p>Open 7 Days A Week</p>
            </div>
         
      </div>


      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`

  .grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
    padding: 60px;
    background: #000000;
    color: #F6FBF4;
  }

  .grid-item{
    padding: 10px;
    line-height: 35px;

    li{
        list-style: none;
    }
  }

  hr{
    width: 80%;
  }
h1{
  color: white;
}

@media (max-width: 992px) {
 .grid-container{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 60px;
    background: #000000;
    color: #F6FBF4;
  }

`
export default Footer
