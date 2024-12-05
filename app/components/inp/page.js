"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const ROIPage = () => {
  const [employees, setEmployees] = useState(50);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Calculate ROI</h1>
        <p className={styles.description}>
          Firms Using Carbon Save, On Average, $23,130 Per Employee, Per Year.
          Find Out What Your Return On Investment Could Be
        </p>

        <div className={styles.row}>

        <div class={styles.icontainer}>
          <p className={styles.txt}>Number of imployes</p>
          <input className={styles.inp} type="text" placeholder="First Name" />
          <p className={styles.txt}>Annual Binusis renivue</p>

          <input className={styles.inp} type="text" placeholder="Last Name" />
          <p className={styles.txt}>Average employ Sallary</p>

          <input className={styles.inp} type="email" placeholder="Email" />
        </div>

        <div className={styles.reesult}>
          <div className={styles.results}>
            <h2 className={styles.texx}>Cost Saving  Per Employee</h2>
            <p  className={styles.tex}>Time Saved: 925 Hours Per Year</p>
            <p className={styles.tex}>Costs Saving: 925 Hours Per Year</p>
            <p className={styles.tex}>Increase In Revenue: 925 Hours Per Year</p>
          </div>
          <div className={styles.results}>
            <h2 className={styles.texx}>Cost Saving For Your Business</h2>
            <p className={styles.tex}>Time Saved: {employees * 925} Hours Per Year</p>
            <p className={styles.tex}>Costs Saving: {employees * 925} Hours Per Year</p>
            <p className={styles.tex}>Increase In Revenue: {employees * 925} Hours Per Year</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ROIPage;
