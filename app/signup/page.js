import React from 'react'
import { Nav } from '../components/nav'
import Image from 'next/image'
import pic from '../../public/valix-logo-icon.png'
import styles from './page.module.css'
import  CompanyFirm2 from "../components/addFirm" 
import { Footer } from '../components/footer'
const page = () => {
  return (
    <div style={{margin:0, padding:0}}>

      <Nav/>
  
    <div className={styles.img}>
      <Image  className={styles.imgwirth} src={pic} alt=''></Image>
      <p className={styles.accounting}>Welcome to Accounting Website</p>
      <p className={styles.loream}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>


<div className={styles.img}>
  <CompanyFirm2/>
  <button className={styles.btn}>SEND</button>

</div>
<Footer/>

    </div>
  )
}

export default page
