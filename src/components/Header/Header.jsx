import React from 'react'
import S from "./header.module.css"

const Header = () => {
    return (
        <header className={S.header}>
                <h1 className={S.logo} >Finanças +</h1>
            <nav>
                <ul className={S.lista}>

                    <li><a className={S.links} href="">Home</a></li>
                    <li><a className={S.links} href="">Quem Somos</a></li>
                    <li><a className={S.links} href="">Entrar</a></li>
                    <li><a className={S.links} href="">Criar Conta</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header