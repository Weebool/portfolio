import { useState } from 'react';
import './App.css';

function ContactPage() {
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
        <div className="contact-page">
            <nav>
                <ul>
                    <li><img className="ImgNav" src="../image/Home.svg" alt="Accueil" /><a href="index.html">Accueil</a></li>
                    <li><img className="ImgNav" src="../image/Experience.svg" alt="Formations" /><a href="../Formations.html">Mes Formations</a></li>
                    <li><img className="ImgNav" src="../image/Code.svg" alt="Projets" /><a href="Projets.html">Mes Projets</a></li>
                    <li><img className="ImgNav" src="../image/Contact.svg" alt="Contact" /><a href="Contact.html">Me Contacter</a></li>
                </ul>
            </nav>

            <div className="contact-content">
                <h1>Me Contacter Par E-Mail</h1>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" required placeholder="Nom" value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" required placeholder="E-Mail" value={formData.email} onChange={handleChange} />
                    <input type="text" name="subject" required placeholder="Sujet" value={formData.subject} onChange={handleChange} />
                    <textarea name="msg" required placeholder="Message" value={formData.msg} onChange={handleChange}></textarea>
                    <button type="submit" className="submit-btn">
                        <img src="../image/send.svg" alt="Envoyer" />
                        Envoyer
                    </button>
                </form>
            </div>

            <footer className="contact-footer">
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="../Formations.html">Mes Formations</a></li>
                    <li><a href="Projets.html">Mes Projets</a></li>
                    <li><a href="Contact.html">Me Contacter</a></li>
                    <li><a href="Database.html">Base De Donnée</a></li>
                </ul>
                <img className="ImgNav" src="../image/Language.svg" alt="Langue" />
            </footer>
        </div>
    );
}

export default ContactPage;