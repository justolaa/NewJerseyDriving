import React from 'react'
import styled from 'styled-components'
import { links } from '../data/constants';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
     <div className="nav-container">
        <div className="nav-header">
            <div className="Links">
                    {links.map((links)=>{
                        const {id, title, url} = links;
                        return(
                            <div id="home">
                            <NavLink key={id} to={url} style={({isActive}) =>{return isActive ? {textDecoration:'none',color:'#ECB159'} :{textDecoration:'none',color:'white'}}}>{ <p1>{title}</p1> }</NavLink>
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
.nav-container{
    height: 60px;
    margin: 35px 0px 0px 0px;
     width: 100vw;
     max-width: var(--max-width);   
     background: black; 
     text-align: center;
    
      
}
 .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

     .Links{
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 380px;
    line-height: 60px;
   
}

.Links > div{
    margin-left: 70px;
    font-size: 17px;
    color: white;
    text-transform: uppercase;
}

p1{
   font-size: 15px;
   font-family: "Lato", sans-serif;
   font-weight: 300;
   font-style: italic;
   letter-spacing: 1.3px;
}

`
export default Navbar
