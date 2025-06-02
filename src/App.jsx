import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import GameOfLifeProject from './AppGame.jsx';
import AppContact from './AppContact.jsx';
import AppExp from './AppExp.jsx';
import AppProjets from './AppProjets.jsx';
import PasswordGeneratorProject from "./AppMdp.jsx";
import accountIcon from './assets/image/account.svg';

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
                            Étudiant en première année de BUT informatique, je vise à me former aux nouvelles technologies et surtout à la cybersécurité...
                        </p>

                        <section className="project-description">
                            <h2>Technologies Maîtrisées</h2>
                            <div className="technical-details">
                                <div className="skills-list">
                                    <h3>Front-end</h3>
                                    <ul>
                                        <li>HTML5/CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Java</li>
                                    </ul>
                                </div>
                                <div className="skills-list">
                                    <h3>Back-end</h3>
                                    <ul>
                                        <li>Python</li>
                                        <li>SQL</li>
                                    </ul>
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

                            {[3, 4, 5, 6, 7, 8, 9].map((n) => (
                                <a key={n} href={`https://example.com/project-${n}`} className="project-card" target="_blank" rel="noopener noreferrer">
                                    <img src={`${basePath}/images/project${n}.jpg`} alt={`Projet ${n}`} className="project-image" />
                                    <p className="project-title">Projet {n}</p>
                                </a>
                            ))}
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
                <img className="ImgNav" src={`${basePath}/image/Language.svg`} alt="Langue" />
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