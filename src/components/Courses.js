import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { courses } from '../data/constants'

const Courses = () => {
  return (
    <Wrapper>
        <div className="container">
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
}
h1{
    color: black;
}
h2{
    color: black;
}
.underline{
    position: relative;
    bottom: 0;
    left:47%;
    background: black;
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

.font-awesome{
    transform: translateY(-100px);
}
`
export default Courses
