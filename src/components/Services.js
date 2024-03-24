import React from 'react'
import useReveal from "./useReveal";
import { service } from '../data/constants';
import styled from 'styled-components'

const Services = () => {
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

//   const imageRef = React.useRef(null);

//   useReveal(imageRef, {
//     delay: 1.5,
//     duration: 1.5,
//     start: "top 60%",
//     ease: "expo",
//   });
  return (
      <Wrapper>
        <div  className="container">
    <div className="title ">
                       <h1 ref={titleRef} className='gs_reveal_fromBottom' >OUR SERVICES</h1>
                        <div className='underline'></div>
                       <h2 ref={subtitleRef} className="gs_reveal_fromBottom">Our Driving School Provides Unique Services For Our Students</h2>
                    <div ref={sectionRef} className="services gs_reveal_fromBottom"> 
                       {service.map((services)=>{
                            const {id,service, name } = services;
                            return(
                                <div className="our-services" key={id}>
                                    <h4>{name}</h4>
                                    <h5>{service}</h5>
                                </div>
                            )
                       })}
                    </div>
                </div>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    text-align: center;
    margin-top: 160px;
}

h1{
    color: black;
}

h2{
    color: black;
}


.title{
       margin-top: 50px;
    }

    .underline{
    position: relative;
    bottom: 0;
    left:47%;
}

    .title > p{
        line-height: 36px;
        margin-top: 10px;
        font-family: 'Proza Libre';
    }

.services{
        display: grid;
        grid-template-rows: repeat(2,auto) ;
        grid-template-columns: repeat(4,auto);
        gap: 30px;
        justify-content: space-evenly;
        padding: 20px;
    }

.our-services{
    width: auto;
    height: auto;
    margin-top: 15px;  
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border: 1px ridge #ECB159;
    background:#F6FBF4;
    padding: 35px;
   

    h4{
        font-family: 'Cormorant Garamond';
        text-transform: uppercase;
        font: bold;
    }
}
@media (max-width: 992px) {
    .services{
        display: grid;
        grid-template-rows: repeat(4,auto) ;
        grid-template-columns: repeat(1,auto);
        gap: 30px;
}
`

export default Services
