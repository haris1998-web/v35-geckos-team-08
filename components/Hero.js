import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/hero.module.css';
import Menu from './menu';

export default function Hero(){
  const [openMenu, setOpenMenu] = useState(false);

  const OpenMenu = () => {
    setOpenMenu(true)
  };

  return (
		<div className={styles.container}>
      <Head>
        <title>Protest Tunes | General Strike</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
        <link href="https://fonts.googleapis.com/css2?family=Enriqueta&family=Notable&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <div className={styles.header}>
        <Image className={styles.hamburger_menu} width={30} height={24} src="/assets/hamburger menu.png" alt="menu" onClick={OpenMenu}/>
        </div>

        <div className={styles.logo_wrap}>
        <Image className={styles.logo} width={92} height={120} src="/assets/SeattleDJ_fist.png" alt="logo"/>
        </div>

        <div className={styles.top}>
          <h1 className={styles.title}>Protest <span className={styles.red}>T</span>unes</h1>
        </div>

        <p className={styles.intro}>Musician, Singer, Rapper. He just debuted as Music Artist to follow his dream. Now it’s not ‘dream’ anymore.</p>

        <div className={styles.arrows}>
          <Image className={styles.arrow} width={45} height={65} src="/assets/arrows.png" alt="arrow"/>
        </div>

        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  );
}