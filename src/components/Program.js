import React from 'react'
import styled from 'styled-components'
import { program } from '../data/constants'

const Program = () => {
  return (
    <Wrapper>
        <div className="container">
      <h1>New Jersey's Program</h1>
      <div className="underline"></div>
           <div className="program"> 
                       {program.map((programs)=>{
                            const {id, src, content } = programs;
                            return(
                                <div className="our-program" key={id}>
                                    <h4>{content}</h4>  
                                    <img src={src} width='70px' height='70px' alt="icon" />
                                </div>
                            )
                       })}
                    </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    text-align: center;
    margin-top: 150px;
}
.underline{
    position: relative;
    bottom: 0;
    left:47%;
}
h1{
    color: black;
}
.program{
        display: grid;
        grid-template-rows: repeat(2,auto) ;
        grid-template-columns: repeat(3,400px);
        gap: 30px;
        justify-content: center;
         margin-top: 15px;  
    }
    .our-program{
    width: 400px;
    height: 200px;
    margin-top: 15px;
    margin-left: 15px;
    border-style: ridge;
    background:#F6FBF4;
    padding: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border: 1px ridge #ECB159;
    }

    img{
      margin-top: 25px;
    }
`
export default Program
