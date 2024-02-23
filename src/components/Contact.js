import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
<Wrapper>
     <div className="container">
  
        <div className="icon"><img src={require('../Assets/phone-receiver-silhouette.png')} height='30px' width='30px' alt="call" /><a href="tel:">(732)-423-3893</a></div>
      </div>
    {/* <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Freepik - Flaticon</a> */}
</Wrapper>
     
   
  )
}


const Wrapper = styled.div`
.container{
  margin: 5px 0px 0px 0px;
  height: 60px;
  background: #FEFBF6;
}

.icon{
  margin-left: 70px;

  a{
    margin-left: 10px;
    font-weight: 400;
    font-size: 2em;
    text-decoration: none;
    color: #ECB159;
    text-align: center;
    line-height:60px;
  }
 
}


`

export default Contact


