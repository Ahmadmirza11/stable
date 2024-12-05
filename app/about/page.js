import React from "react";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import styles from "../about/about.module.css";
import Image from "next/image";
import pic2 from "../../public/Frame1.png";
import pic3 from "../../public/Frame2.png";
import pic4 from "../../public/Frame3.png";
import frame from "../../public/Frame20.png";
import frame22 from "../../public/Frame22.png";
import screen from "../../public/screen11.png";
import pic11 from "../../public/contant1.png";

const page = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className={styles.center}>
        <Image className={styles.first} src={screen} alt=""></Image>
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

      <div className={styles.platform}>
        <div className={styles.center}>
          <p className={styles.reason}>
            Reason to prefer to Choice our platform
          </p>
        </div>

        <div className={styles.wrap}>
          <div className={styles.box}>
            <div className={styles.center1}>
              <Image className={styles.size} src={frame} alt=""></Image>
            </div>
            <div className={styles.marg}>
              <p className={styles.reason1}>
                All in One Accounting Firm Management Solution
              </p>
              <p className={styles.txt}>
                Manage leads, clients, taxes, payments, and team tasks
                effortlessly—all from one central platform
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.center1}>
              <Image className={styles.size} src={pic11} alt=""></Image>
            </div>
            <div className={styles.marg}>
              <p className={styles.reason1}>
                All in One Accounting Firm Management Solution
              </p>
              <p className={styles.txt}>
                Manage leads, clients, taxes, payments, and team tasks
                effortlessly—all from one central platform
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.center1}>
              <Image className={styles.size} src={frame22} alt=""></Image>
            </div>
            <div className={styles.marg}>
              <p className={styles.reason1}>
                All in One Accounting Firm Management Solution
              </p>
              <p className={styles.txt}>
                Manage leads, clients, taxes, payments, and team tasks
                effortlessly—all from one central platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.foot}>
        <div className={styles.center11}>
          <p className={styles.txts}>
            Everything Your Accounting Firm Needs in One Powerful Platform
          </p>
          <p className={styles.txtes}>
            Take control of your firm’s growth with Valix. From generating leads
            to managing clients, tracking performance, and streamlining
            payments—everything you need is just a click away. Start simplifying
            your operations today!
          </p>
        </div>
        <div className={styles.mix}>
          <input className={styles.input} placeholder="Your Business Email " />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
