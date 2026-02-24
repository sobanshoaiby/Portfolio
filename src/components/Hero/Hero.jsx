import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="hero section" id="home">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h3 variants={itemVariants} className="hero-greeting">
                        Hi there, I'm
                    </motion.h3>

                    <motion.h1 variants={itemVariants} className="hero-name">
                        Md Soban Shoaiby<span>.</span>
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="hero-title">
                        Full Stack Developer based in New Delhi.
                    </motion.h2>

                    <motion.p variants={itemVariants} className="hero-description">
                        Results-driven developer with 5+ years of experience designing and developing scalable web applications and backend services. Specializing in React.js, Node.js, Next.js, and creating secure, high-performance systems.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-cta">
                        <a href="#contact" className="btn btn-primary">
                            <FiMail /> Contact Me
                        </a>
                        <a href="#" className="btn btn-secondary" title="Download Resume">
                            <FiDownload /> Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visuals"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="hero-shape">
                        <div className="blob"></div>
                        <div className="blob blob-2"></div>
                        <div className="profile-placeholder">
                            <span className="profile-initial">S</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
