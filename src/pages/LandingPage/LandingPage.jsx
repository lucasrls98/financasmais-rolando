//rafce
import React from 'react'
import styles from "./landingPage.module.css"
import Header from "../../components/Header/Header"
import banner1 from "/LP-banner1.svg"
import banner2 from "/LP-banner2.svg"
import BannerBemVindo from '../../components/BannerBemVindo/BannerBemVindo'
import Button from '../../components/Button/Button'






const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Button/>
            
            <BannerBemVindo/>
        </div>
    )
}
{/* <img src={banner1} alt="vetor de uma mulher de sucesso em cima de uma pilha de moedas" /> */}

export default LandingPage