import React from 'react'
import banner1 from "/LP-banner1.svg"
import s from "./bannerBemVindo.module.css"
import {StylesBannerBemVindo} from './bannerBemVindo.styles'

const BannerBemVindo = () => {
    return (

        <StylesBannerBemVindo className={"sessao"}>
            <div className={"firstBlock"}>
                <h2 className={"titulo"}>Bem-vindo ao Finanças+</h2>
                <p className={"texto1"}>O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</p>
                <p className={"texto2"}>Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>

            </div>
            <div>
                <img src={banner1} alt="" />

            </div>

        </StylesBannerBemVindo>

    )
}

export default BannerBemVindo