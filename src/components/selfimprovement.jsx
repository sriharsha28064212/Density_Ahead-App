'use client'
import React from "react";
import Content from "./timeline";
import { motion } from "framer-motion";
import Image from "next/image";

function Self() {
  return (
    <section id="section5" style={{ marginTop: '50px' }}>
      <p style={{ fontWeight: '600', marginLeft: '25px', textAlign: 'left' }}>Wrong with self-immprovement & how we&apos;re fixing it</p>
      <h1 style={{ fontWeight: 'bold', marginLeft: '25px', textAlign: 'left' }}>Self-improvement.Ugh.</h1>
      <motion.div
        viewport={{ once: true }}
        transition={{ duration: 3.2, ease: "easeInOut", type: "spring", delay: 0.3 }}
        intial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            x: [0, -100, -300, -450, -500],
            y: [35, 20, 10, 0, -60],
            rotate: [15, 35, 35, 35, 35, 45, 10],
          },
          hidden: { opacity: 0, scale: 0 },
        }}
        style={{ position: 'relative', right: '-80%', width: '100px' }}
      >
        <Image width={70} height={70} alt="" src="/blue-ghost.png" />
      </motion.div>
      <div className="timeline-container">
        <div className="timeline">
          <div>
            <ul>
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <Content heading="Sample Text" desc="A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." />
              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Self;