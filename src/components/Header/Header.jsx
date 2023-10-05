import React from 'react'
import {StylesHeader} from './header.styles'

const Header = () => {
    return (
        <StylesHeader className={"header"}>
            <nav className={"navegacao"}>
                <h1 className={"logo"} >Finanças +</h1>
                <ul className={"lista"}>

                    <li><a className={"links"} href="">Home</a></li>
                    <li><a className={"links"} href="">Quem Somos</a></li>
                    <li><a className={"links"} href="">Entrar</a></li>
                    <li><a className={`${"links"} ${"botao"}`}  href="">Criar Conta</a></li>
                </ul>
            </nav>
        </StylesHeader>
    )
}

export default Header