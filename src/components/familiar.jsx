'use client'
import React from "react";
import Slidecard from "./slide";
import { motion } from "framer-motion";
import Image from "next/image";
function Familiar() {
    return (
        <section id="section3">
            <h2 className="animate align-left" style={{width:'50%'}}>Does this sound familiar..</h2>
            <motion.div
          viewport={{ once: true }}
          transition={{ duration: 3.1, ease: "easeInOut", type: "spring",delay:0.3 }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -60],
              rotate: [-60, -45, -35,-35,-35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0},
          }}
          style={{position:'relative',right:'-75%',width:'100px'}}
        >
          <Image width={70} height={70} alt="" src="/red-ghost.png" />
        </motion.div>
            <div className="slide-container">
                <Slidecard emoji="😏" color="#FFC5C5" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
                <Slidecard emoji="🤨" color="#83A2FF" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
                <Slidecard emoji="😳" color="#C7DCA7" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
                <Slidecard emoji="😠" color="#DCBFFF" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
                <Slidecard emoji="😌" color="#F9B572" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
                <Slidecard emoji="😂" color="#AEC3AE" heading="Text for Slide 1 goes here." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quisquam molestias" />
            </div>
        </section>
    );
}
export default Familiar;