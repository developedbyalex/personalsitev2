import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Store.css';

interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
  link: string;
}

interface ProductCategories {
  Websites: Product[];
  Plugins: Product[];
  "Discord Bots": Product[];
}

function Store() {
  const [selectedCategory, setSelectedCategory] = useState<keyof ProductCategories>('Websites');

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

  const products: ProductCategories = {
    Websites: [
      {
        title: "CherryBurst Game Hosting Template",
        description: "A game hosting website template.",
        image: "https://builtbybit.com/attachments/cherryburst-cover-png.919930/?variant=display",
        price: 9.99,
        link: "https://builtbybit.com/resources/cherryburst-game-hosting-template.49629/"
      },
      {
        title: "Paste Website",
        description: "Host your own pastebin",
        image: "https://cdn.builtbybit.com/carousel_images/1729/1729961-348f5e68dbeea291599f48ee566986df.jpg?variant=card",
        price: 9.99,
        link: "https://builtbybit.com/resources/paste-website.49629/"
      },
      {
        title: "Minecraft Landing Page",
        description: "A responsive and visually appealing landing page for a Minecraft server",
        image: "https://cdn.builtbybit.com/carousel_images/1714/1714365-b855325a0ee081ff641a69349c2df228.jpg?variant=card",
        price: 9.99,
        link: "https://builtbybit.com/resources/minecraft-landing-page.49629/"
      }
    ],
    Plugins: [
      {
        title: "GlobalQuests",
        description: "Quests to be completed by everyone.",
        image: "https://cdn.builtbybit.com/carousel_images/1788/1788701-35242675715674aa37d130522e4748c1.jpg?variant=card",
        price: 4.99,
        link: "https://builtbybit.com/resources/globalquests.49629/"
      }
    ],
    "Discord Bots": [
      {
        title: "Embedz",
        description: "Embedz is a custom Discord bot offering advanced embed creation, presets, and interactive features",
        image: "https://cdn.builtbybit.com/carousel_images/1689/1689530-50efda939b604a10dabbb9c84b63287e.jpg?variant=card",
        price: 7.99,
        link: "https://builtbybit.com/resources/embedz-custom-discord-embeds.49629/"
      }
    ]
  };

  return (
    <motion.div 
      className="Store"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.nav className="breadcrumb" variants={itemVariants}>
        <Link to="/">alex</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/work">work</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/store" className="current">store</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/contact">contact</Link>
      </motion.nav>

      <main>
        <motion.h1 variants={itemVariants} className="title-shine">
          my products
        </motion.h1>

        <motion.div variants={itemVariants}>
          <Link 
            to="/contact" 
            className="contact-button"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
            >
              ✨
            </motion.span>
            interested in a custom project? contact me →
          </Link>
        </motion.div>

        <motion.p className="intro" variants={itemVariants}>
          Browse through my collection of ready-to-use products. From website templates to Discord bots,
          each product is crafted with attention to detail and modern best practices.
        </motion.p>

        <motion.div className="category-selector" variants={itemVariants}>
          {Object.keys(products).map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category as keyof ProductCategories)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className="products-grid" variants={containerVariants}>
          {products[selectedCategory].map((product, index) => (
            <motion.div 
              key={index}
              className="product-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="buy-button"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Store; 