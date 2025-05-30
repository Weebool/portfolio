import { useState } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';

function ProjectsPage() {
    const [scale, setScale] = useState(1);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img className="ImgNav" src="../image/Home.svg" alt="Accueil" />
                        <a href="index.html">Accueil</a>
                    </li>
                    <li>
                        <img className="ImgNav" src="../image/Experience.svg" alt="Formations" />
                        <a href="../Formations.html">Mes Formations</a>
                    </li>
                    <li>
                        <img className="ImgNav" src="../image/Code.svg" alt="Projets" />
                        <a href="Projets.html">Mes Projets</a>
                    </li>
                    <li>
                        <img className="ImgNav" src="../image/Contact.svg" alt="Contact" />
                        <a href="Contact.html">Me Contacter</a>
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
                                {/* Project 1 */}
                                <a href="Mdp.html" className="project-card project-card-gif">
                                    <div className="project-gif-background"
                                         style={{ backgroundImage: `url(https://i.gifer.com/6LW1.gif)` }}>
                                    </div>
                                    <div className="project-content-overlay">
                                        <p className="project-title">Générateur de Mot de passe</p>
                                    </div>
                                </a>

                                {/* Project 2 - Game of Life with full background GIF */}
                                <a href="Game.html" className="project-card project-card-gif">
                                    <div className="project-gif-background"
                                         style={{ backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/d/d0/Game_of_life_animated_glider_2.gif)` }}>
                                    </div>
                                    <div className="project-content-overlay">
                                        <p className="project-title">Jeu de la Vie</p>
                                    </div>
                                </a>
                                {/* Project 3 */}
                                <a href="https://example.com/project-3" className="project-card">
                                    <img src="/images/project3.jpg" alt="Projet Trois" className="project-image" />
                                    <p className="project-title">Projet Trois</p>
                                </a>

                                {/* Project 4 */}
                                <a href="https://example.com/project-4" className="project-card">
                                    <img src="/images/project4.jpg" alt="Projet Quatre" className="project-image" />
                                    <p className="project-title">Projet Quatre</p>
                                </a>

                                {/* Project 5 */}
                                <a href="https://example.com/project-5" className="project-card">
                                    <img src="/images/project5.jpg" alt="Projet Cinq" className="project-image" />
                                    <p className="project-title">Projet Cinq</p>
                                </a>

                                {/* Project 6 */}
                                <a href="https://example.com/project-6" className="project-card">
                                    <img src="/images/project6.jpg" alt="Projet Six" className="project-image" />
                                    <p className="project-title">Projet Six</p>
                                </a>

                                {/* Project 7 */}
                                <a href="https://example.com/project-7" className="project-card">
                                    <img src="/images/project7.jpg" alt="Projet Sept" className="project-image" />
                                    <p className="project-title">Projet Sept</p>
                                </a>

                                {/* Project 8 */}
                                <a href="https://example.com/project-8" className="project-card">
                                    <img src="/images/project8.jpg" alt="Projet Huit" className="project-image" />
                                    <p className="project-title">Projet Huit</p>
                                </a>

                                {/* Project 9 */}
                                <a href="https://example.com/project-9" className="project-card">
                                    <img src="/images/project9.jpg" alt="Projet Neuf" className="project-image" />
                                    <p className="project-title">Projet Neuf</p>
                                </a>
                            </div>  


                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>

            <footer>
                <ul>
                    <li><a>© 2025 Thomas Demarcq. Tous droits réservés.</a></li>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="../Formations.html">Mes Formations</a></li>
                    <li><a href="../Projets.html">Mes Projets</a></li>
                    <li><a href="Contact.html">Me Contacter</a></li>
                    <li><a href="Database.html">Base De Donnée</a></li>
                </ul>
                <img className="ImgNav" src="../image/Language.svg" alt="Changer de langue" />
            </footer>
        </>
    );
}

export default ProjectsPage;