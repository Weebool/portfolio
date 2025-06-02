import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';
import accountIcon from "./assets/image/account.svg";

const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function PasswordGeneratorProject() {
    const [scale, setScale] = useState(1);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img className="ImgNav" src={`${basePath}/image/Home.svg`} alt="Accueil" />
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/formations">
                            <img className="ImgNav" src={`${basePath}/image/Experience.svg`} alt="Formations" />
                            Mes Formations
                        </Link>
                    </li>
                    <li>
                        <Link to="/projets">
                            <img className="ImgNav" src={`${basePath}/image/Code.svg`} alt="Projets" />
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

            <div className="ParallaxContainer">
                <Parallax pages={2} onScroll={({ y }) => setScale(1 + y * 0.3)}>
                    <ParallaxLayer offset={0.1}>
                        <div className="project-header">
                            <h1 style={{
                                transform: `scale(${scale})`,
                                transition: 'transform 0.3s ease-out',
                                transformOrigin: 'center center'
                            }}>
                                Générateur de Mots de Passe Sécurisés
                            </h1>
                            <div className="project-meta">
                                <span className="project-date">Réalisé en 2021</span>
                                <span className="project-tech">Technologies: JavaScript, CSS</span>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.5}>
                        <div className="project-content">
                            <section className="project-description">
                                <h2>Description du Projet</h2>
                                <p>
                                    Un outil permettant de générer des mots de passe complexes et sécurisés selon des critères personnalisables.
                                    L'application inclut une estimation de la force du mot de passe et des options de personnalisation avancées.
                                </p>
                                <div className="project-features">
                                    <h3>Fonctionnalités clés :</h3>
                                    <ul>
                                        <li>Génération de mots de passe de 8 à 64 caractères</li>
                                        <li>Options configurables (majuscules, chiffres, symboles)</li>
                                        <li>Indicateur visuel de force du mot de passe</li>
                                        <li>Fonction de copie en un clic</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="project-technical">
                                <h2>Détails Techniques</h2>
                                <div className="technical-details">
                                    <div className="code-sample">
                                        <h3>Algorithme de génération</h3>
                                        <pre>{`
function generatePassword(length, options) {
  const chars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  let charSet = '';
  let password = '';

  Object.keys(options).forEach(key => {
    if (options[key]) charSet += chars[key];
  });

  for (let i = 0; i < length; i++) {
    password += charSet.charAt(
      Math.floor(Math.random() * charSet.length)
    );
  }

  return password;
}
                                        `}</pre>
                                    </div>
                                    <div className="challenges">
                                        <h3>Défis relevés</h3>
                                        <ul>
                                            <li>Génération réellement aléatoire et sécurisée</li>
                                            <li>Interface utilisateur intuitive</li>
                                            <li>Gestion des préférences utilisateur</li>
                                            <li>Optimisation des performances</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>

            <footer>
                <ul>
                    <li>© 2025 Thomas Demarcq. Tous droits réservés.</li>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/formations">Mes Formations</Link></li>
                    <li><Link to="/projets">Mes Projets</Link></li>
                    <li><Link to="/contact">Me Contacter</Link></li>
                    <li><Link to="/database">Base De Donnée</Link></li>
                </ul>
                <img className="ImgNav" src={`${basePath}/image/Language.svg`} alt="Changer de langue" />
            </footer>
        </>
    );
}

export default PasswordGeneratorProject;
