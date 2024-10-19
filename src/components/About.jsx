import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { styles } from "../styles"; // Import your styles
import { fadeIn } from "../utils/motion"; // Import your animation variants
import { services } from "../constant"; // Ensure this is correctly imported
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc"; // Use named import if that's how it's defined

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
        }} // Removed the extra semicolon here
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />{" "}
        {/* Display the icon */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="about-section">
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a final-year engineering student pursuing a BTech in Computer
        Science, driven by a strong passion for technology and hands-on
        experience. I excel at problem-solving, thrive in dynamic environments,
        and bring skills in full-stack development, software engineering, and
        design. With a solid foundation in computer science and a commitment to
        continuous learning, I'm eager to contribute to innovative projects and
        make a valuable impact in the field.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
