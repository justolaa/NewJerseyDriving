import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useProductsContext } from '../context/Context';

const Logo = () => {
   const {openSidebar} = useProductsContext();
  return (
    <Wrapper>

     <div className="Logo">
     <Link to='/'> <img src={require('../Assets/Logoo.jpg')} width='150px' height='150px' alt="Logo" /></Link>
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
    border-radius:50%;
    background-position: center;
    object-fit: contain;
  }

.Logo-name{
    transform:translateY(60px);
    position: absolute;
    left: 230px;

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
      margin-bottom: 30px;
      margin-left:10px;
      justify-content: flex-start;
      gap:9px;

      img{
        width:130px;
        height:140px;
      }
      .Logo-name{
        font-size:1.3rem;
        position: absolute;
        left: 145px;
      }
  }

  @media (min-width: 992px){
    .nav-toggle {
      display: none;
    }
`
export default Logo
