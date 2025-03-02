import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Work.css';

function Work() {
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName('project-card');
      Array.from(cards).forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "motorsportsinfo.app",
      description: "A Formula 1, 2, 3 and Formula E weather tracker.",
      tags: ["HTML", "CSS", "JavaScript", "ExpressJS"],
      link: "https://motorsportsinfo.app/",
      status: "Live"
    },
    {
      title: "mcrep.gg",
      description: "A community-driven platform that helps Minecraft players build and verify their reputation.",
      tags: ["ReactJS", "TailwindCSS", "MongoDB", "ExpressJS"],
      link: "#",
      status: "Live"
    },
    {
      title: "Embedz",
      description: "A custom Discord bot offering advanced embed creation, presets, and interactive features",
      tags: ["DiscordJS", "NodeJS"],
      link: "https://builtbybit.com/resources/embedz-custom-discord-embeds.49629/",
      status: "Purchaseable",
      hasShoppingCart: true
    },
    {
      title: "WatchTower.sh",
      description: "A custom program written to protect your servers. Live notification, logs and protections.",
      tags: ["NodeJS", "MongoDB"],
      link: "#",
      status: "In Development"
    }
  ];

  return (
    <motion.div 
      className="Work"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav className="breadcrumb" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <Link to="/">alex</Link>
        </motion.div>
        <motion.span className="breadcrumb-separator" variants={itemVariants}>
          /
        </motion.span>
        <motion.div variants={itemVariants}>
          <Link to="/work" className="current">work</Link>
        </motion.div>
        <motion.span className="breadcrumb-separator" variants={itemVariants}>
          /
        </motion.span>
        <motion.div variants={itemVariants}>
          <Link to="/contact">contact</Link>
        </motion.div>
      </motion.nav>
      
      <main>
        <motion.h1 variants={itemVariants} className="title-shine">
          my work
        </motion.h1>
        
        <motion.a 
          href="mailto:contact@yourdomain.com" 
          className="contact-button"
          variants={itemVariants}
        >
          ✨ have something in mind? contact me →
        </motion.a>
        
        <motion.p className="intro" variants={itemVariants}>
          Here are some of the projects I've worked on. Each one represents a unique challenge
          and a chance to learn something new.
        </motion.p>
        
        <motion.div className="projects-grid" variants={itemVariants}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="status" data-status={project.status.toLowerCase().replace(" ", "-")}>
                  {project.hasShoppingCart && (
                    <svg className="shopping-cart" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  )}
                  {project.status === "In Development" && (
                    <svg className="code-icon" viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  )}
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="tag"
                    data-tech={tag.split(' ')[0]}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a 
                href={project.link}
                className="project-link"
                whileHover={{ scale: 1.05 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-divider" />
        
        <motion.div className="client-work" variants={itemVariants}>
          <motion.h2 variants={itemVariants}>Selected Client Work</motion.h2>
          <motion.ul className="client-list" variants={itemVariants}>
            <motion.li variants={itemVariants}>
              <span className="client-name">WeMod Academy</span>
              <span className="client-description">A social media company that helps you build a presence online</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="client-name">CamoBots</span>
              <span className="client-description">A robotics club</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span className="client-name">Ojalas.se</span>
              <span className="client-description">A Swedish professional window cleaning and maintenance company</span>
            </motion.li>
            <motion.li className="more-clients" variants={itemVariants}>...and many more amazing clients</motion.li>
          </motion.ul>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Work; 