import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { courses } from '../data/constants'
import useReveal from './useReveal'

const Courses = () => {
    const titleRef = React.useRef(null);

  useReveal(titleRef, {
    delay: 1,
    duration: 1.5,
    start: "top 80%",
    ease: "expo",
  });

const subtitleRef = React.useRef(null);
  useReveal(subtitleRef, {
    delay: 2,
    duration: 1.5,
    start: "top 50%",
    ease: "expo",
  });

  const sectionRef = React.useRef(null);
  useReveal(sectionRef, {
    delay: 2,
    duration: 1.5,
    start: "top 50%",
    ease: "expo",
  });
  return (
    <Wrapper>
        <div ref={titleRef} className="container gs_reveal_fromBottom">
            <h1>COURSES WE OFFER</h1>
            <div className="underline"></div>
            <h2>Our Driving School Provides the Best Courses For Our Learners</h2>
            <div className="icons">
                {courses.map((course)=>{
                      const {id, src, content, width, height} = course;
                      return(
                        <div key={id} className="image">
                            <img src={src} width={width} height={height} alt="" />
                            <div className="text">{content}</div> 
                        </div>
                    )
                })}
       
            </div>
            <div className="font-awesome">
                <FontAwesomeIcon icon={faChevronRight} size='lg' beatFade />
            </div>
             
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container{
    text-align: center;
    margin-top: 150px;
    background:#ECB159;
    padding: 25px;
    width:90vw;
    margin-left:5%;
    border-radius:10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    animation: wiggle 3s linear infinite;
}
h1{
    transform: translateY(-90px);
    color: black;
}
h2{
    color: black;
    transform: translateY(-30px);
}
.underline{
    position: relative;
    bottom: 0;
    left:47%;
    transform: translateY(-90px);
}

.icons{
    display: flex;
    flex-direction: row;
    margin-top: 55px;
    justify-content: center;
    gap: 190px;
}
 .break{
        transform: translateY(-100px);
    }
.text{
    margin-top: 15px;
    align-items: center;
    font-size: 1rem;
     font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: italic;
        line-height: 15px;
    letter-spacing: 2px;
}

 @media (max-width: 992px) {
    .container{
        width:80vw;
        height:auto;
        margin:auto;
        margin-top: 150px;
       
    }
            .icons{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 30px;
        }
        .font-awesome{
          display: none;
}
    }

.font-awesome{
    transform: translateY(-100px);
}
  @keyframes wiggle{
    0%, 7% {
        transform: rotateZ(0);
    }
    15%{
        transform: rotateZ(-15deg);
    }
    20%{
        transform: rotateZ(10deg);
    }
     25%{
        transform: rotateZ(-10deg);
    }
     30%{
        transform: rotateZ(6deg);
    }

    35%{
        transform: rotateZ(-4deg);
    }
     40%, 100%{
        transform: rotateZ(0);
    }

`
export default Courses
