import React from 'react';
import Button from '../Button'

export default function Header() {
    return(
            <>
                <header>
                <div classname='logo'>Logo</div>
                <div classname='busca'>Busca</div>
                <Button texto="Cadastre-se"></Button>
                <Button texto="Entrar"></Button>
                </header>
            
            </>
    );
}