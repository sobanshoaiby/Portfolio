import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaJava, FaGitAlt, FaGithub, FaNpm
} from 'react-icons/fa';
import {
    SiNextdotjs, SiRedux, SiJavascript, SiBootstrap,
    SiMui, SiTailwindcss, SiExpress, SiGraphql,
    SiSpringboot, SiMysql, SiMongodb, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", icon: <FaReact color="#61DAFB" /> },
            { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
            { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
            { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" /> },
            { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
            { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
            { name: "MUI", icon: <SiMui color="#007FFF" /> },
            { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> }
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
            { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
            { name: "RESTful APIs", icon: <FaNodeJs color="#339933" /> },
            { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
            { name: "Java", icon: <FaJava color="#007396" /> },
            { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> }
        ]
    },
    {
        title: "Database & Tools",
        skills: [
            { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
            { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
            { name: "Git", icon: <FaGitAlt color="#F05032" /> },
            { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
            { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
            { name: "VS Code", icon: <VscVscode color="#007ACC" /> }
        ]
    }
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="skill-category"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <motion.div
                                className="skills-grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        className="skill-card"
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="skill-icon">{skill.icon}</div>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
