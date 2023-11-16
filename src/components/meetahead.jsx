'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
function Meet() {
  return (
    <section id="section4">
      <div className="Mainpage4">
        <div className="lefttext">
          <p>Built out of frustation</p>
          <h1>Meet the ahead app</h1>
          {/* <Image src='/section4.png' height={434} width={575} alt="Section4" /> */}
        </div>
        <div className="righttext">
          <p>A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.</p>
          <p>Think of it as a pocket cheerleader towards a better, more fulfilling</p>
        </div>
        <motion.div
          transition={{ duration: "1.5" }}
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { rotate: [0, 25, -15, 0] },
            hidden: { opacity: 0, scale: 0.5, rotate: 0 },
          }}
          style={{ position: 'relative', top: '50%', left: '-33%', zIndex: '2' }}
        >
          <Image height={80} width={80} src="/newGhost.png" className="h-full w-full" alt="" />
        </motion.div>
        <div style={{ position: 'relative', top: '31%', left: '10.5%', width: '200px', height: '200px', border: '5px solid #ddd', backgroundColor: 'white', borderRadius: '50%', zIndex: '1' }}></div>
        {/* circle div  */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
              x: [0, -550],
              y: [55, -18],
            },
          }}
          animate={{
            x: [0, -450],
            y: [55, -18],
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3
          }}
          style={{ position: 'relative', backgroundColor: '#FECDA6', width: '300px', height: '300px', borderRadius: '50%', bottom: "-100px", right: "-450px" }}
        ></motion.div>
        <Image height={50} width={50} src="/badge.png" alt="" style={{ position: 'relative', top: '-44%', left: '-31.3%', zIndex: '3' }} />
        {/* leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -125],
              rotate: 25,
            },
            hidden: { y: 55 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 20,
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6
          }}
          style={{ position:'relative', right: "-30%", bottom: "20%", transform: "translate(50%,50%)" ,width:'150px'}}
        >
          <Image height={220} width={165} src="/leaf.png" alt="" />
        </motion.div>
      </div>

    </section>
  );
}
export default Meet;