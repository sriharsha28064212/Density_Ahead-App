import React from "react";
import Workcard from "./work";
import Image from "next/image";
function About() {
    return (
        <section id="section9">
          <div className='work'>
            <div className='work-left'>
              <h1 style={{textAlign:'left'}}>Work with us</h1>
              <div className='work-left-sub'>
              <div className='work-left-sub1'>
                <Image src='/about.png' width={59} height={67} alt="sdq" />
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat</p>
                </div>
                <div className='work-left-sub2'>
                <h3>Product</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat</p>
                
                </div>
              </div>

            </div>
            <div className='work-right'>
              <h1 style={{textAlign:'right',color: '#7d46ff'}}>ahead</h1>
              <div className='work-right-sub' id='style-2'>
                <Workcard name="Work through even when the going gets tough" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
                <Workcard name="Learn more about who you are and where you wnat to go" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
                <Workcard name="Play and grow together with others on the same journey" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
                <Workcard name="product" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
                <Workcard name="product" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
                <Workcard name="product" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias, fugiat accusamus cumque placeat" />
              </div>
            </div>
          </div>
        </section>
    );
}
export default About;