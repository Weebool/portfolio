import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import accountIcon from "./assets/image/account.svg";

const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function ProjectsPage() {
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
                <Parallax pages={1.5} onScroll={({ y }) => setScale(1 + y * 0.3)}>
                    <ParallaxLayer offset={0.1}>
                        <div className="project-header">
                            <h1 style={{
                                transform: `scale(${scale})`,
                                transition: 'transform 0.3s ease-out',
                                transformOrigin: 'center center'
                            }}>
                                Mes Projets
                            </h1>
                            <p>Découvrez une sélection de mes réalisations en développement</p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.5}>
                        <div className="project-content">
                            <div className="projects-grid">
                                {/* Projet 1 */}
                                <Link to="/mdp" className="project-card project-card-gif">
                                    <div className="project-gif-background"
                                         style={{ backgroundImage: `url(https://i.gifer.com/6LW1.gif)` }}>
                                    </div>
                                    <div className="project-content-overlay">
                                        <p className="project-title">Générateur de Mot de passe</p>
                                    </div>
                                </Link>

                                {/* Projet 2 - Jeu de la Vie */}
                                <Link to="/game" className="project-card project-card-gif">
                                    <div className="project-gif-background"
                                         style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Game_of_life_animated_glider_2.gif)` }}>
                                    </div>
                                    <div className="project-content-overlay">
                                        <p className="project-title">Jeu de la Vie</p>
                                    </div>
                                </Link>

                                {/* Projets externes */}
                                {[3, 4, 5, 6, 7, 8, 9].map(n => (
                                    <a
                                        key={n}
                                        href={`https://example.com/project-${n}`}
                                        className="project-card"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`${basePath}/images/project${n}.jpg`}
                                            alt={`Projet ${n}`}
                                            className="project-image"
                                        />
                                        <p className="project-title">Projet {n}</p>
                                    </a>
                                ))}
                            </div>
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

export default ProjectsPage;
