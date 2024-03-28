import React from 'react'
import useReveal from './useReveal';
import styled from 'styled-components'

const Schools = () => {
    const titleRef = React.useRef(null);

  useReveal(titleRef, {
    delay: 1,
    duration: 1,
    start: "top 80%",
    ease: "expo",
  });

const subtitleRef = React.useRef(null);
  useReveal(subtitleRef, {
    delay: 1,
    duration: 1,
    start: "top 50%",
    ease: "expo",
  });
  return (
    <Wrapper>
      
      <h1  ref={titleRef} className='gs_reveal_fromBottom' >PROUDLY SERVING THE FOLLOWING HIGH SCHOOLS</h1>
      <div ref={subtitleRef} className="underline gs_reveal_fromBottom"></div>
      <div className="container">
      <div className="grid-container">
            <div className="grid-item">
                <div className='first'>MIDDLESSEX COUNTY</div>
                    <ul>
                        <li>Bishop Arh</li>
                        <li>Colonia</li>
                        <li>Carteret</li>
                        <li>Dunellen</li>
                        <li>Edison</li>
                        <li>East Brunswick </li>
                        <li>Highland Park</li>
                        <li>John P Stevens</li>
                        <li>Metuchen</li>
                         <li>Middlesex HS</li>
                         <li>New Brunswick</li>
                    <li>North Brunswick</li>
                    <li>Piscataway</li>
                    <li>Syreville</li>
                        
                    </ul>
                
            </div>
            <div className="grid-item">
                <div></div>
                <br />
                <ul>
                  
                    <li>South Brunswick</li>
                    <li>South Plainfield</li>
                    <li>South River</li>
                    <li>Spotswood</li>
                    <li>St Joes</li>
                    <li>Timothy Christian</li>
                    <li>Wardlaw-Hartridge</li>
                    <li>Woodbridge</li>
                    <li>Votec</li>
                </ul>
        
            </div>
            

            <div className="grid-item">
                <div className='first'>SOMERSET COUNTY</div>
                   <ul>
                    <li>Franklin High School</li>
                    <li>Immaculata</li>
                    <li>Piscataway</li>
                    <li>Rutgers Prep</li>
                    <li>Somerville</li>
                </ul>
            </div>
    <div className="grid-item">
        <div className='first'>UNION COUNTY</div>
                   <ul>
                    <li>Arthur L.Johnson</li>
                    <li>Govenor Livingston</li>
                    <li>Mother Seton</li>
                    <li>North Plainfield</li>
                    <li>Plainfield</li>
                </ul>
            </div>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
  background:#F6FBF4;
}
h1{
  text-align:center;
  margin-top: 100px;
}
.underline{
    position: relative;
    bottom: 0;
    left:47%;
}
  .grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
    margin: 40px 0px 0px 30px;
    padding: 40px;
  }

  
  .grid-item{
    padding: 10px;
    line-height: 35px;
    .first{
    text-align: center;
    transfrom: translateX(-400px);
  }
  }

  .grid-item > div{
    font-size: 22px;
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-style: italic;
      line-height: 30px;
      margin-bottom: 30px;
  }
  li{
        list-style: none;
         font-family: "Lato", sans-serif;
      font-weight: 300;
      font-style: italic;
        font-size: 1.28rem;
    }
@media (max-width: 992px) {
   .grid-container{
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    margin: 40px 0px 0px 0px;
    padding: 0px;
  }

}
`
export default Schools
