import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="image">
                 <img src={require('../Assets/road-track-6874080_1920.jpg')} width='100%' height='430px' alt="Track" />
                <div className="text">
                    <h1> Serving All Of MIDDLESEX, SOMMERSET <br /> AND  UNION COUNTRIES DRIVING! </h1>
                    <div className="tagline">
                           <h2>OUR INSTRUCTORS ARE ALL STATE CERTIFIED AND PUT THROUGH RIGOROUS TRAINING 
                    </h2>
                    <div className="btn">Get Started</div>
                    </div>

                </div>
            </div>
             
        </div>
     
    </Wrapper>
  )
}

const Wrapper = styled.div`

    .image{
        display:flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        width: 100vw;
        height: 350px;
        align-items: center; 
        margin: auto;
       
        img{
        background-position: center;
        background-repeat: no-repeat;
        object-fit: cover;
         filter: brightness(48%);
    }

.text{
    position: absolute;
    margin-left: 40px;
    width: 70%;
    height: 50%;
    top: 10%;
    left:0;
    padding: 15px;
    h1{
        color:#ECB159;
        font-size: 1.6rem;
        letter-spacing: 2.7px;
        line-height: 47px;
         font-family: "Lato", sans-serif;
            font-weight: 500;
            font-style: italic;
    }
    

}

.btn{
    position: absolute;
    right:0;
    bottom:0;
     font-family: "Lato", sans-serif;
    font-weight: 500;
    font-style: italic;
    transform: translate(-250px, 170px);

}
  .tagline {
    width: 80%;
    margin-top: 70px;
    flex: 1 0 0;
    font-style: normal;


    h2{
        color:white;
        font-size: 1.2rem;
         font-family: "Lato", sans-serif;
        font-weight: 300;
        font-style: italic;
        letter-spacing: 3px;
        line-height: 39px;
    }
   }`

export default Hero
