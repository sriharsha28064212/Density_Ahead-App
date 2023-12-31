import React from "react";
import Image from "next/image";

function Header(){
    return(
        <header style={{display:'flex'}}>
        <Image src='/head.png' width={80} height={90} alt="logo"/>
        <nav>
          <ul>
            <li><a href="#section3">Emotions</a></li>
            <li><a href="#section5">Manifesto</a></li>
            <li><a href="#section8">Self-awareness Test</a></li>
            <li><a href="#section9">Work With Us</a></li>
          </ul>
          <button className='btn btn-md btn-dark' style={{ borderRadius: '20px' }}>Download App</button>
        </nav>
      </header>
    );
}
export default Header;