import React, {useRef} from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCarSide} from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
      const ref = useRef(null);

  React.useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector('.text'),
      { opacity: 0, y: 90, x:-90 },
      { opacity: 1, y: 0, x:0, scrollTrigger: { trigger: element, start: 'top 80%' } }
    );

    gsap.fromTo(
      element.querySelector('.image'),
      { opacity: 0, y: 90 },
      { opacity: 1, y: 0, scrollTrigger: { trigger: element, start: 'top 80%' } }
    );
  }, []);
  return (
    <Wrapper>
        <div ref={ref} className="container">
            <div className="image">
                 <img src={require('../Assets/road-track-6874080_1920.jpg')} width='100%' height='430px' alt="Track" />
                <div className="text">
                    <h1>We Cover ESSEX, UNION, MIDDLESEX <br /> AND SOMERSET County Areas.</h1>
                    <div className="tagline">
                           <h2>OUR INSTRUCTORS ARE ALL STATE CERTIFIED AND PUT THROUGH RIGOROUS TRAINING 
                    </h2>
                    <div className="btn">Get Started <span><FontAwesomeIcon icon={faCarSide} bounce size='xl'  /></span></div> 
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
    }
        @media (max-width: 992px) {
          .text{
            margin-left:15px;
            width:90%;
                h1{
                font-size: 15px;
                line-height: 27px;
              }

              h2{
                font-size: 0.8rem;
                line-height: 25px;
              }
          }
             
           .tagline{
            width:100%;
            margin-top: 30px;
           }   
           .btn{
    position: absolute;
    right:-85px;
    bottom:50px;
        }`

export default Hero
