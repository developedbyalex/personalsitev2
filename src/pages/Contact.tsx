import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="Contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav className="breadcrumb" variants={itemVariants}>
        <Link to="/">alex</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/work">work</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/store">store</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/contact" className="current">contact</Link>
      </motion.nav>

      <main>
        <motion.h1 variants={itemVariants} className="title-shine">
          let's work together
        </motion.h1>

        <motion.p className="contact-intro" variants={itemVariants}>
          I am always open to new opportunities and collaborations. If you have something in mind, 
          feel free to contact me. We can discuss how we can work together to make your project a success.
        </motion.p>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-info">
            <motion.div className="contact-item" variants={itemVariants}>
              <span className="contact-label">Email</span>
              <a href="mailto:email@byalex.gg" className="contact-value">
                email@byalex.gg
              </a>
            </motion.div>
            
            <motion.div className="contact-item" variants={itemVariants}>
              <span className="contact-label">Discord</span>
              <a href="https://discord.gg/QWN9ZqJd" target="_blank" rel="noopener noreferrer" className="contact-value">
                @DevelopedByAlex
              </a>
            </motion.div>
            
            <motion.div className="contact-item" variants={itemVariants}>
              <span className="contact-label">Twitter</span>
              <a href="https://x.com/byalexdotgg" target="_blank" rel="noopener noreferrer" className="contact-value">
                @ByAlexDotGG
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Contact; 