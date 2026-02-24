import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import './Experience.css';

const experiences = [
    {
        role: "Mid-Level Full Stack Developer",
        company: "Skylark Info Tech",
        date: "April 2023 – Present",
        location: "Remote",
        responsibilities: [
            "Architected and implemented a real-time verification system leveraging React, Redux, JWT authentication, Web Socket, and relational databases.",
            "Built secure and modular RESTful APIs with JWT based authentication and Role Based Access Control (RBAC).",
            "Optimized frontend and backend performance through code splitting, lazy loading, database query optimization, and image compression.",
            "Resolved production issues by debugging logs, analysing API response times, and implementing performance improvements.",
            "Collaborated in Agile/Scrum environment to deliver production-ready features within sprint timelines."
        ]
    },
    {
        role: "Frontend Developer Intern",
        company: "Skylark Info Tech",
        date: "February 2022 – August 2022",
        location: "New Delhi",
        responsibilities: [
            "Developed responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript.",
            "Assisted in migrating static pages to dynamic React components.",
            "Improved UI performance and cross-browser compatibility.",
            "Worked with senior developers to enhance functionality and optimize application performance."
        ]
    },
    {
        role: "Technical Operations Support",
        company: "Future Projects",
        date: "June 2018 – January 2022",
        location: "New Delhi",
        responsibilities: [
            "Provided technical support by resolving data inconsistencies, coordinating with engineering teams, and ensuring compliance.",
            "Generated and analysed project reports to monitor system performance and identify discrepancies.",
            "Managed and maintained operational data using Excel and internal ERP systems."
        ]
    }
];

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot">
                                <FiBriefcase />
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                </div>

                                <div className="timeline-meta">
                                    <span className="date"><FiCalendar /> {exp.date}</span>
                                    <span className="location">{exp.location}</span>
                                </div>

                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
