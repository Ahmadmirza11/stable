"use client";
import React from "react";
import styles from "./page.module.css";
import { Nav } from "./components/nav";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Footer } from "./components/footer";
import Image from "next/image";
import pic from "../public/Content.png";
import pic1 from "../public/contant1.png";
import pic2 from "../public/Frame1.png";
import pic3 from "../public/Frame2.png";
import pic4 from "../public/Frame3.png";
import logo from "../public/Logo1.png";
import logo1 from "../public/Logo3.png";
import logo4 from "../public/Logo4.png";
import log3 from "../public/Group185.png";
import logoo1 from "../public/Frame20.png";
import logoo11 from "../public/Frame11.png";
import team from "../public/team1.png";
import mobile from "../public/Group3.png";
import download from "../public/AppStore.png";
import download2 from "../public/GooglePlay.png";
import gro   from '../public/Gro.png'


const popupVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }, }, };

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const DynamicImage = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
      className={styles.up}
    >
      {" "}
      <Image className={styles.picenter} src={src} alt={alt} />{" "}
    </motion.div>
  );
};

const Page = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 1 },
    exit: { opacity: 0, y: 20 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 2, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation(); const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); if (inView) { controls.start('visible'); }

  return (
    <div>
      <Nav />

      <motion.div
        className={styles.pageContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.box1}
          variants={textVariants}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.txt}>
            <p className={styles.txt1}>
              All-in-One Accounting Firm Management Solution
            </p>
            <div>
              <p className={styles.txt2}>
                Streamline lead generation, client collaboration, tax
                preparation, and team management—all from one powerful,
                easy-to-use platform. Valix empowers your firm to save time,
                boost productivity, and deliver exceptional client experiences.
              </p>
            </div>
          </div>

          <div className={styles.button}>
            <motion.button
              className={styles.btn1}
              variants={buttonVariants}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className={styles.btn2}
              variants={buttonVariants}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              See how it Works
            </motion.button>
          </div>

          <div className={styles.rate}>
            <div className={styles.rating}>
              <p className={styles.txt3}>350+</p>
              <p className={styles.txt4}>Over 500 business powered with us</p>
            </div>
            <div className={styles.rating2}>
              <p className={styles.txt3}>4.8</p>
              <p className={styles.txt4}>
                Rating on Google PlayStore and AppStore
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.box2}
          variants={pageVariants}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Image className={styles.imag} src={pic} alt="#" />
        </motion.div>
      </motion.div>

      <div>
        <div className={styles.box3}>
          <div className={styles.txtcenter1}>
            <div className={styles.txtcenter}>
              <h2 className={styles.txt5}>
                Your team, clients, work, data. Together in one place.
              </h2>
            </div>
          </div>

          <div className={styles.txtcenter1}>
            <div className={styles.grey}>
              <div className={styles.pic1}>
                {" "}
                <DynamicImage src={pic1} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <p className={styles.txt6}>valix features</p>
          <div className={styles.features1}>
            <button className={styles.bttn}>Client Features</button>
            <button className={styles.bttn}>Admin Features</button>
            <button className={styles.bttn}>Account Manager</button>
            <button className={styles.bttn}>Compliance</button>
            <button className={styles.bttn}>Firm Setup</button>
            <button className={styles.bttn}>Integration</button>
          </div>

          <div className={styles.card}>
            <div className={styles.card1}>
              <div className={styles.up}>
                <Image className={styles.picenter} src={pic2} alt=""></Image>
              </div>

              <div className={styles.down}>
                <p className={styles.cardcenter1}>Lead Capture& Tracking</p>
                <p className={styles.cardcenter}>
                  Capture client leads through the lead generation page.
                  Automatically save inquiries and follow-up actions.Track lead
                  conversion rates and progress.
                </p>
              </div>
            </div>

            <div className={styles.card1}>
              <div className={styles.up}>
                <Image className={styles.picenter} src={pic4} alt=""></Image>
              </div>

              <div className={styles.down}>
                <p className={styles.cardcenter1}>Client Management</p>
                <p className={styles.cardcenter}>
                  Capture client leads through the lead generation page.
                  Automatically save inquiries and follow-up actions.Track lead
                  conversion rates and progress.
                </p>
              </div>
            </div>

            <div className={styles.card1}>
              <div className={styles.up}>
                <Image className={styles.picenter} src={pic3} alt=""></Image>
              </div>

              <div className={styles.down}>
                <p className={styles.cardcenter1}>
                  Document Submition& Selection
                </p>
                <p className={styles.cardcenter}>
                  Capture client leads through the lead generation page.
                  Automatically save inquiries and follow-up actions.Track lead
                  conversion rates and progress.
                </p>
              </div>
            </div>

            <div className={styles.card1}>
              <div className={styles.up}>
                <Image className={styles.picenter} src={pic4} alt=""></Image>
              </div>

              <div className={styles.down}>
                <p className={styles.cardcenter1}>Lead Tracking</p>
                <p className={styles.cardcenter}>
                  Capture client leads through the lead generation page.
                  Automatically save inquiries and follow-up actions.Track lead
                  conversion rates and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sponser}>
        <p className={styles.oursponser}>Our Sponsores</p>
        <p className={styles.oursponsers}>
          Proudly Partnering with Industry Leaders
        </p>

        <div className={styles.upglam}>
          <Image className={styles.logo} src={logo1} alt=""></Image>
          <Image className={styles.logo} src={log3} alt=""></Image>
          <Image className={styles.logo} src={logo} alt=""></Image>
          <Image className={styles.logo} src={logo4} alt=""></Image>
        </div>
      </div>

      <div className={styles.parent}>


      <div className={styles.box5}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={popupVariants}
        className={styles.cardcentermain}
      >
        <p className={styles.cardcenter3}>
          Easily customizable & manage your team
        </p>
        <p className={styles.cardcenter2}>
          Clients have full visibility into the status of their requests,
          can easily communicate with their account managers, and receive
          updates at every stage, fostering trust and transparency in your
          accounting services
        </p>
        <button className={styles.cardbutton}>Get Free Consultancy</button>
      </motion.div>
    </div>


        <div className={styles.box6}>
          <Image className={styles.logoo1} src={logoo1} alt=""></Image>
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.box6}>
          <Image className={styles.logoo1} src={logoo11} alt=""></Image>
        </div>

        <motion.div   ref={ref}
        initial="hidden"
        animate={controls}
        variants={popupVariants} className={styles.box5}>
          
          <div className={styles.cardcentermain}>
            <p className={styles.cardcenter3}>
              manage your reports and analytics
            </p>
            <p className={styles.cardcenter2}>
              Users receive instant push notifications on their mobile device or
              web alerts when there are important updates, such as a draft of
              their tax return being ready for review, a payment reminder, or a
              message from their account manager
            </p>
            <button className={styles.cardbutton}>Get Started</button>
          </div>
        </motion.div>
      </div>

      <div className={styles.customer}>
        <div className={styles.customer1}>
          <p className={styles.custom1}>SEE WHAT SAYS OUR HAPPY CLIENTS</p>
          <p className={styles.costom2}>Our happy customers</p>
        </div>
        <div className={styles.textalign}>
          <div className={styles.space}>
            <p className={styles.experiance1}>
              Great Experience!! Michael has made the whole process easy from
              the planning stage to the final plant going in. Steve & his crew
              did a great job. I felt like Lavish Gardens really listened to
              what I wanted, gave me ideas, and helped me decide how to make my
              backyard a place to relax and enjoy the view.  
            </p>
            <Image className={styles.size} src={team} alt=""></Image>
          </div>
          <div className={styles.space}>
            <Image className={styles.size2} src={team} alt=""></Image>
            <p className={styles.experiance2}>
              Great Experience!! Michael has made the whole process easy from
              the planning stage to the final plant going in. Steve & his crew
              did a great job. I felt like Lavish Gardens really listened to
              what I wanted, gave me ideas, and helped me decide how to make my
              backyard a place to relax and enjoy the view.  
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.mobile1}>
          <Image className={styles.mobilipic} src={mobile} alt=""></Image>
        </div>
        <div className={styles.mobile2}>
          <div className={styles.downloadcenter}>
            <p className={styles.mobilip1}>Download Our Mobile App</p>
            <p className={styles.mobilip2}>
              Sed luctus nibh at consectetur tempor. Proin et ipsum tincidunt,
              maximus turpis id, mollis lacus. Maecenas nec risus a urna
              sollicitudin aliquet. Maecenas pretium tristique sapien
            </p>
          </div>
          <div className={styles.download}>
            <Image className={styles.appstore} src={download} alt=""></Image>
            <Image className={styles.appstore} src={download2} alt=""></Image>
          </div>
        </div>
      </div>

      <div className={styles.car}>
        <Image className={styles.ig} src={gro} alt=""></Image>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
