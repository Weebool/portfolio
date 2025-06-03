import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import accountIcon from './assets/image/account.svg';
import languageIcon from "./assets/image/Language.svg";
import homeIcon from "./assets/image/Home.svg";
import experienceIcon from "./assets/image/Experience.svg";
import codeIcon from "./assets/image/Code.svg";
import sendIcon from "./assets/image/send.svg";

// Détection automatique de l'environnement
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function AppContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        msg: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, msg } = formData;
        const body = encodeURIComponent(
            `Nom de l'expéditeur: ${name}\n\n` +
            `Email : ${email}\n\n` +
            `-----------------------------------------------\n\n` +
            `Message :\n${msg}\n\n` +
            `-----------------------------------------------\n\n` +
            `Respectueusement,\n\n` +
            `Mr/Mme ${name}`
        );
        window.location.href = `mailto:thomas.demarcq38@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img className="ImgNav" src={homeIcon} alt="Accueil" />
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/formations">
                            <img className="ImgNav" src={experienceIcon} alt="Formations" />
                            Mes Formations
                        </Link>
                    </li>
                    <li>
                        <Link to="/projets">
                            <img className="ImgNav" src={codeIcon} alt="Projets" />
                            Mes Projets
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <img className="ImgNav" src={accountIcon} alt="Contact" />
                            Me Contacter
                        </Link>
                    </li>
                </ul>
            </nav>

            <div>
                <h1>Thomas Demarcq</h1>
            </div>

            <div className="contact-content">
                <h1>Me Contacter Par E-Mail</h1>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nom"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-Mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Sujet"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        name="msg"
                        required
                        placeholder="Message"
                        value={formData.msg}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="submit-btn">
                        <img src={sendIcon} alt="Envoyer" />
                        Envoyer
                    </button>
                </form>
            </div>

            <footer>
                <ul>
                    <li>© 2025 Thomas Demarcq. Tous droits réservés.</li>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/formations">Mes Formations</Link></li>
                    <li><Link to="/projets">Mes Projets</Link></li>
                    <li><Link to="/contact">Me Contacter</Link></li>
                </ul>
                <img className="ImgNav" src={languageIcon} alt="Langue" />
            </footer>
        </>
    );
}

export default AppContact;