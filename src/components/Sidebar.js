import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import { links } from '../data/constants'
import styled from 'styled-components'


const Sidebar = () => {
  const {isSidebarOpen, closeSidebar, userRole} = useProductsContext()
  return <SidebarContainer>
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : "sidebar"}`}>
      <div className="sidebar-header">
        <Link onClick={closeSidebar} to='/' className='Logo'>  <img src={require('../Assets/Logo.jpg')} width='130px' height='130px' alt="Logo" /><div className="text">NewJersey<span>Driving</span></div> </Link>
        <button onClick={closeSidebar} type='button' className="close-btn"> 
        <FontAwesomeIcon icon={faBars} style={{color: "#FFD43B",}} />
        </button>
      </div>
      <ul className="links">
        {links.map(({id,title,url})=>{
     return <li key={id}>
      <Link to={url} onClick={closeSidebar}>{title}</Link>
     </li>
        })}
        <li>
     </li>
     {/* {userRole ? <div className='btn'><Link to='/admin'>Account</Link></div> : <div className='btn'><Link to='/account'>Account</Link></div>} */}
      </ul>
    </aside>
  </SidebarContainer>
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .Logo img {
    justify-self: center;
    border-radius: 100%;
    
  }
  .text{
    flex-shrink:0;
     color: black;
     font-family: Cormorant Garamond;
     font-size: 18px;
     margin-left: 6px;
     margin-top: -80px;
     color: black;
     font-weight: 400;
     transform: translateX(137px);
     span{
        color:#ECB159;
    }
    }
  .links {
    margin-top: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
   li{
    list-style: none;
   }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
