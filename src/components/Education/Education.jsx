import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import './Education.css';

const educationData = [
    {
        degree: "Post Graduate Diploma in Advanced Computing",
        institution: "CDAC ACTS, Silchar (Centre for Development of Advanced Computing, Pune)",
        year: "2023",
        type: "diploma"
    },
    {
        degree: "B-Tech",
        institution: "Delhi College of Technology & Management (Maharishi Dayanand University, Haryana)",
        year: "2018",
        type: "degree"
    },
    {
        degree: "12th (BSEB)",
        institution: "C.M Science College, Darbhanga, Patna",
        year: "2014",
        type: "school"
    },
    {
        degree: "10th (CBSE)",
        institution: "Kendriya Vidyalaya, Darbhanga, Delhi",
        year: "2012",
        type: "school"
    }
];

const Education = () => {
    return (
        <section className="education section" id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <motion.div
                            className="education-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="edu-icon">
                                {edu.type === 'diploma' || edu.type === 'degree' ? <FiAward /> : <FiBookOpen />}
                            </div>
                            <div className="edu-content">
                                <span className="edu-year">{edu.year}</span>
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <p className="edu-institution">{edu.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
