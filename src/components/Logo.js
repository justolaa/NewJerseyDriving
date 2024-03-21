import React from 'react'
import {NavLink } from 'react-router-dom'
import { links } from '../data/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useProductsContext } from '../context/Context';

const Logo = () => {
   const {openSidebar, userRole} = useProductsContext();
  return (
    <Wrapper>

     <div className="Logo">
      <img src={require('../Assets/Logo.jpg')} width='150px' height='150px' alt="Logo" />
      <div className='Logo-name'>NewJersey<span>Driving</span></div>
         <button type='button' className="nav-toggle" onClick={openSidebar}>
                <FontAwesomeIcon icon={faBars} style={{color: "#FFD43B",}} />
            </button>
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

 .nav-toggle {
    background: transparent;
    border: transparent;
    color: #5FD068;
    cursor: pointer;
    margin-bottom: 7rem;
    position: absolute;
    right:0;
    svg {
      font-size: 2rem;
    }
  }
  
@media (max-width: 992px) {
      display: flex;
      margin-left: 0;
      margin-bottom: 30px;
      justify-content: center;
  }

  @media (min-width: 992px){
    .nav-toggle {
      display: none;
    }
`
export default Logo
