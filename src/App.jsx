import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import GameOfLifeProject from './AppGame.jsx';
import AppContact from './AppContact.jsx';
import AppExp from './AppExp.jsx';
import AppProjets from './AppProjets.jsx';
import PasswordGeneratorProject from "./AppMdp.jsx";
import accountIcon from './assets/image/account.svg';
import homeIcon from './assets/image/Home.svg'; // Vérifiez si c'est bien "Home.svg" avec H majuscule
import experienceIcon from './assets/image/Experience.svg';
import codeIcon from './assets/image/Code.svg';
import languageIcon from './assets/image/Language.svg';
import memoryIcon from './assets/image/memory.svg';
import schoolIcon from './assets/image/school.svg';
import diplomaIcon from './assets/image/trophy.svg';
import shieldIcon from './assets/image/security.svg';
import sendIcon from "./assets/image/send.svg";

// Détection automatique de l'environnement CORRIGÉE
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function HomePage() {
    const [scale, setScale] = useState(1);

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

            <div className="ParallaxContainer">
                <Parallax pages={2} onScroll={({ y }) => setScale(1 + y * 0.5)}>
                    <ParallaxLayer offset={0.1}>
                        <h1 style={{
                            transform: `scale(${scale})`,
                            transition: 'transform 0.3s ease-out',
                            transformOrigin: 'center center'
                        }}>
                            Qui suis-je ?
                        </h1>
                        <p>
                            Actuellement en première année de BUT informatique, j’ai pour objectif de me former à la cybersécurité car je pense que ce domaine est essentiel et le sera encore plus à l’avenir que ce soit pour les particuliers mais aussi pour les entreprises. J’ai également fait ce choix de formation car j’apprécie l’administration réseau. Malgré tout, la programmation reste un point central de ce domaine, c’est pourquoi je me penche sur des langages comme Java, Python ou encore des simulations de Processeur 68K que je programme en assembleur. Mes qualités au sein de la formation et, ultérieurement, au sein d’une entreprise sont la motivation, la curiosité et ma détermination.
                        </p>
                        <section className="skills-section">
                            <h2>Mes Compétences</h2>

                            <div className="skills-container">
                                {/* Compétences Techniques */}
                                <div className="skills-category">
                                    <h3>
                                        <img src={codeIcon} alt="Code" className="skill-icon" />
                                        Compétences Techniques
                                    </h3>
                                    <div className="skills-grid">
                                        <div className="skill-group">
                                            <h4>Front-end</h4>
                                            <ul>
                                                <li>HTML5/CSS3</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                            </ul>
                                        </div>
                                        <div className="skill-group">
                                            <h4>Back-end</h4>
                                            <ul>
                                                <li>Python</li>
                                                <li>Java</li>
                                                <li>SQL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Soft Skills */}
                                <div className="skills-category">
                                    <h3>
                                        <img src={accountIcon} alt="Soft Skills" className="skill-icon" />
                                        Soft Skills
                                    </h3>
                                    <div className="skills-grid">
                                        <div className="skill-group">
                                            <h4>Leadership & Communication</h4>
                                            <ul>
                                                <li>Gestion d'équipe</li>
                                                <li>Communication efficace</li>
                                                <li>Définition d'objectifs</li>
                                            </ul>
                                        </div>
                                        <div className="skill-group">
                                            <h4>Adaptabilité</h4>
                                            <ul>
                                                <li>Flexibilité</li>
                                                <li>Niveau européen d'anglais</li>
                                                <li>Apprentissage continu</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <h1>Vitrine de mes différents projets</h1>
                        <div className="projects-grid">
                            <Link to="/mdp" className="project-card project-card-gif">
                                <div className="project-gif-background"
                                     style={{ backgroundImage: `url(https://i.gifer.com/6LW1.gif)` }}></div>
                                <div className="project-content-overlay">
                                    <p className="project-title">Générateur de Mot de passe</p>
                                </div>
                            </Link>

                            <Link to="/game" className="project-card project-card-gif">
                                <div className="project-gif-background"
                                     style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Game_of_life_animated_glider_2.gif)` }}></div>
                                <div className="project-content-overlay">
                                    <p className="project-title">Jeu de la Vie</p>
                                </div>
                            </Link>


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
                </ul>
                <img className="ImgNav" src={languageIcon} alt="Langue" />
            </footer>
        </>
    );
}

function App() {
    return (
        <BrowserRouter basename={isGitHubPages ? "/portfolio" : undefined}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<AppContact />} />
                <Route path="/formations" element={<AppExp />} />
                <Route path="/game" element={<GameOfLifeProject />} />
                <Route path="/mdp" element={<PasswordGeneratorProject/>} />
                <Route path="/projets" element={<AppProjets />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;