import React from 'react';
import { FiLogIn} from 'react-icons/fi'; //pacote de icones do react (baixado: npm install react-icons)
import './style.css';
import logoImg from '../../assets/logo.svg';
import heroesImg  from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <FiLogIn size={16} color="#e02041"/>
                    <a href="./register">Não tenho cadastro</a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/> 
          
        </div>

    )
}