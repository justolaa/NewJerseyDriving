import React from 'react'
import styled from 'styled-components'
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
                {/* <span class="material-symbols-outlined">f6fe</span> */}

            </div>
             <img className='break' src={require('../Assets/step_FILL0_wght400_GRAD0_opsz24.png')} width='50px' height='50px' alt="icon" />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container{
    text-align: center;
    margin-top: 150px;
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
`
export default Courses
