import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrap from "../hoc/SectionWrap";
import Cards from "./Cards";
const About = () => {
  return (
    <>
    
      <motion.div >
        <p className={styles.sectionSubText }>Introduction</p>
        <h2 className={styles.sectionHeadText}> About Me</h2>
      </motion.div> 
     
      <motion.p
       
        variants={fadeIn("", ",0.1.1")}
        className= "  text-[#cac4c6] text-[17px] relative leading-[30px] "
      >
        Hola! I'm Domenic, 24-year-old software engineer
        with a strong focus on front-end development. Lately, I've been utterly
        captivated by three.js and its incredible potential for integrating
        3D images into my projects and Ai technologies. Alongside my love for coding, I have a thriving
        side career as a personal trainer, which has influenced some of my
        fitness-related projects. My skillset includes JavaScript, React,
        Python, Web development and SQL, and I'm constantly eager to expand my knowledge
        and take on new challenges , currently working into the implementation of AI generated chatbots into webapps !.
        
      </motion.p>

      <Cards />
      
      
      
    </>
  );
};

export default SectionWrap (About, "about")
