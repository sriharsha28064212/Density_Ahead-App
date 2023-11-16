'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Master() {
    return (
        <section id="section1">
            <div className="Mainpage">
                <div className="maintext" style={{ float: "left", width: '50%', wordWrap: 'break-word' }}>
                {/* Single Leaf */}
                <motion.div whileInView="visible" viewport={{ once: true }} animate={{ x :150 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }}  style={{position:'relative',left :"0px",top:"-180px"}}><Image src="/singleLeaf.png" height={48} width={48} alt="" /></motion.div>
                    <p style={{ fontSize: '24px', marginLeft: '7px' }}>Ahead app</p>
                    <h1>Master your life by mastering emotions</h1>
                    {/* <button className='btn btn-sm btn-dark'>App Store</button> */}
                    {/* small circle 1 */}
                {/* <motion.div whileInView="visible" viewport={{ once: true }}transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{position :'relative',bottom:"-153px",left:"-40px", width:'50px',height:'50px',backgroundColor:"orange",borderRadius:'50%'}}></motion.div> */}
                    <div style={{display:'flex'}}>
                        <Image
                            width={150}
                            height={50}
                            alt="Apple Play Store"
                            src="/appleStoreIcon.png"
                            style={{marginRight:'10px'}}
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                {[...Array(5)].map((val, index) => {
                                    return (
                                        <Image
                                            alt="star"
                                            src="/starIcon.svg"
                                            width={16}
                                            height={16}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                            <p className="">100+ AppStore reviews</p>
                        </div>
                    </div>
                </div>
                <div style={{ float: "right", width: '50%', marginTop: '150px', height: '400px' }}>
                    <div className="mobilebackground"></div>
                    <Image src="/mobile.svg" height={400} width={455.35}style={{ position: 'relative', top: '-360px' }} />
                    <motion.div
                        whileInView="visible"
                        viewport={{ once: true }}
                        initial="hidden"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: { opacity: 1, rotate: 360 },
                        }}
                        transition={{
                            type: "",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{ border: "3px solid white ", borderStyle: "dashed", borderRadius: '50%', width:'550px', height:"550px", position:'relative',top:'-840px', left:'30px'}} >
                        {/* red ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ position:'relative', right:'-240px',top: "-40px",width:'70px' }}><Image height={90} width={75} className='h-full w-full' src="/blue-ghost.png" alt="" /></motion.div>
                        {/* blue ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ position:'relative' ,left: "510px", top: "150px", width:'70px'}}><Image height={70} width={65} className='h-full w-full' src="/red-ghost.png" alt="" /></motion.div>
                        {/* voilet ghost */}
                        <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{  position:'relative' ,right: "25px", top: "150px",width:'70px'}}><Image height={70} width={60} src="/newGhost.png" alt="" /></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default Master;