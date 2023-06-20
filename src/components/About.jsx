import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="sm:grid grid-cols-2 items-center block mt-4 mr-0 text-secondary text-[17px] leading-[30px] "
      >
        I'm a passionate software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js. Currently,
        I'm expanding my knowledge in Three.js and Next.js. As an individual,
        I'm motivated to understand how things work and continually expand my
        knowledge in frontend and backend development. I have collaborated
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. My main goal is to give my
        best and provide top-quality code.
        <div className="nonisImage"></div>
      </motion.p>
      <h2 className={styles.sectionHeadText}>Hobbies.</h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="sm:grid grid-cols-2 items-center block mt-4 mr-0 text-secondary text-[17px] leading-[30px] "
      >
        {/* <div className="nonisImage"></div> */}
        <iframe
          className="youtubevideo"
          src="https://www.youtube.com/embed/qskmwnxSEGQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
        I am deeply passionate about free diving, finding inner peace in the
        ocean's depths. Spearfishing is another love, combining my diving skills
        with underwater hunting. Alongside these pursuits, I grow through
        activities like boxing and gym workouts. I strongly believe in investing
        in my personal development, as it constitutes a significant part of my
        daily life. I am constantly striving to become a better person and
        consistently improve myself in every possible aspect.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
