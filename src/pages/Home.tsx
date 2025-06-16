import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
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
      className="App"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <Link to="/work">work</Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/store">store</Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/contact">contact</Link>
        </motion.div>
      </motion.nav>
      
      <main>
        <motion.h1 variants={itemVariants}>
          hello, I'm Alex 👋
        </motion.h1>
        
        <motion.p className="intro" variants={itemVariants}>
          My name is Alex. I am a Full Stack Developer based in the UK.
        </motion.p>
        
        <motion.p className="skills" variants={itemVariants}>
          I like to create websites, discord bots and dabble in the occasional sysadmin work. 
          I specialize in building with <span className="highlight">React</span> and <span className="highlight">Node.js</span>. 
          When I'm not coding, you'll find me watching <span style={{color: 'var(--f1-red)'}}>Formula 1</span> or exploring my interest in <span style={{color: 'var(--aviation-blue)'}}>aviation</span>.
        </motion.p>
        
        <motion.p variants={itemVariants}>
          You can check out my work on my <Link to="/work">works</Link> page.
        </motion.p>
        
        <motion.p variants={itemVariants}>
          If you have a project in mind, <Link to="/contact">get in touch</Link>.
        </motion.p>
        
        <motion.div className="social-links" variants={itemVariants}>
          <motion.a 
            href="https://github.com/developedbyalex" 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            github
          </motion.a>
          <motion.a 
            href="https://discord.gg/QWN9ZqJd" 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="discord"
          >
            discord
          </motion.a>
          <motion.a 
            href="https://open.spotify.com/user/0iwwnhpesbxx35h07buugkfvr?si=0918103b421f42ad" 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="spotify"
          >
            spotify
          </motion.a>
        </motion.div>
        
        <motion.footer variants={itemVariants}>
          © 2025 byalex.gg. All rights reserved.
        </motion.footer>
      </main>
    </motion.div>
  );
}

export default Home; 