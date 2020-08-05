import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/8916833?s=40&u=8bdeb375b9a47968ea9f7d2e9afc07cd517d5bf3&v=4" alt="Eduardo Lodi Marzano" />
                <div>
                    <strong>Eduardo Lodi Marzano</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias em química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
