'use client'
import React from "react";
import { motion } from "framer-motion";
import { Nav } from "../components/nav";
import styles from "./price.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer } from "../components/footer";
import ROIPage from '../components/inp/page'
import Table from "../components/table/page";

const Page = () => {
  const items = [
    { text: "Integrated Email", icon: "fa-duotone fa-solid fa-check" },
    { text: "Team Collaboration Tools", icon: "fa-duotone fa-solid fa-check" },
    { text: "Workflow and To-Do List", icon: "fa-duotone fa-solid fa-check" },
    { text: "Billing and Payment", icon: "fa-duotone fa-solid fa-check" },
    { text: "User", icon: "fa-duotone fa-solid fa-check" },
  ];
  const items2 = [
    {
      text: "automatic client reminders",
      icon: "fa-duotone fa-solid fa-check",
    },
    { text: "task automation", icon: "fa-duotone fa-solid fa-check" },
    { text: "industry integrations", icon: "fa-duotone fa-solid fa-check" },
    {
      text: "time tracking and budget reporting",
      icon: "fa-duotone fa-solid fa-check",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
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

  const blockVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <motion.div 
        className={styles.box}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Nav />
        </div>

        <motion.p 
          className={styles.price}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Home /Pricing
        </motion.p>
        <motion.p 
          className={styles.pricing}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Pricing
        </motion.p>
      </motion.div>

      <motion.div 
        className={styles.pkg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className={styles.card}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className={styles.practice}>
            practice management for accounting firm
          </p>
          <p className={styles.practicebold}>
            practice management plans for accounting firms
          </p>
          <p className={styles.saved}>
            $23,130 saved per employee, per year for average customer its not
            surprise carbon is the no 1 accounting practice management software
            on G2
          </p>
        </motion.div>

        <motion.div 
          className={styles.pakage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Card */}
          <motion.div 
            className={styles.card1}
            variants={cardVariants}
          >
            <p className={styles.paid1}>Team</p>
            <p className={styles.paid2}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid3}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid4}>
              Essential work flow and collabration tools for small accounting firms
            </p>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={styles.order}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </motion.li>
                ))}
                <motion.button 
                  type="submit" 
                  className={styles.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </ul>
            </div>
          </motion.div>

          {/* Business Card */}
          <motion.div 
            className={styles.card1}
            variants={cardVariants}
          >
            <p className={styles.paid1}>Business</p>
            <p className={styles.paid2}>49 dollor per month,user paid anualy</p>
            <p className={styles.paid3}>34 dollor per month,user paid anualy</p>
            <p className={styles.paid4}>
              Essential work flow and collabration tools for small accounting firms
            </p>
            <div className={styles.line}></div>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items2.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={styles.order}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </motion.li>
                ))}
                <motion.button 
                  type="submit" 
                  className={styles.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </ul>
            </div>
          </motion.div>

          {/* Enterprise Card */}
          <motion.div 
            className={styles.card1}
            variants={cardVariants}
          >
            <p className={styles.paid1}>Enterprices</p>
            <p className={styles.paid2}>Custom Pricing</p>
            <p className={styles.paid3}>
              collaboration,security and reporting tools for large accounting firms
            </p>
            <p className={styles.paid4}>
              includes everything in team and business plus
            </p>
            <div className={styles.line}></div>

            <div>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {items.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className={styles.order}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px", marginTop: "10px" }}
                    >
                      <div className={styles.line}></div>
                    </i>
                    {item.text}
                  </motion.li>
                ))}
                <motion.button 
                  type="submit" 
                  className={styles.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </ul>
            </div>
          </motion.div>
        </motion.div>
       
        <motion.div 
          className={styles.box2}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className={styles.center}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className={styles.h2}>All Plans Include</h2>
          </motion.div>
          
          <motion.div 
            className={styles.wrap}
            variants={containerVariants}
          >
            {[
              { text1: "Email Traigle", text2: "share assign and comment on email accross your team" },
              { text1: "team collaboration", text2: "collaborate in the context of work, email, tasks and clients" },
              { text1: "poweful workflow", text2: "assign tasks, create work from templates, schedules, jobs,and view dashboards" },
              { text1: "documents management", text2: "automatically store and organize documents against client and jobs" },
              { text1: "client portal", text2: "Collaborate with clients in one streamlined workflow with tasks and document sharing" },
              { text1: "client management", text2: "share contact profiles,activity timelines, and automated client requests" },
              { text1: "Email Traigle", text2: "share assign and comment on email accross your team" },
              { text1: "billings and payments", text2: "flexible billing and faster payments, built into your workflow" },
              { text1: "ecosystem integrations", text2: "integrate with the suite of apps to streamline data and automate process" }
            ].map((block, index) => (
              <motion.div 
                key={index} 
                className={styles.block}
                variants={blockVariants}
              >
                <p className={styles.text1}>{block.text1}</p>
                <p className={styles.text2}>{block.text2}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
  <div>
   <Table/>
  </div>
 <div>
  <ROIPage/>
 </div>

 


      <Footer/>
    </div>
  );
};

export default Page;