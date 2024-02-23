import React from 'react'
import styled from 'styled-components'


const Logo = () => {
  return (
    <Wrapper>
     <div className="Logo">
      <img src={require('../Assets/Logo.jpg')} width='150px' height='150px' alt="Logo" />
      <div className='Logo-name'>NewJersey<span>Driving</span> </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.Logo {
  display: flex;
  flex-direction: row;
  text-align:center;
  gap:15px;
  margin: 35px 0px 0px 90px;
  img{
    border-radius:100%;
  }

.Logo-name{
    transform:translateY(60px);
    font-size: 1.5rem;
    color: black;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: italic;

    span{
        color:#ECB159;
    }
  
}
`
export default Logo
