import { useState } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';

function App() {
    const [scale, setScale] = useState(1);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img className="ImgNav"
                             src="../image/Home.svg"
                             alt="loading"
                        />
                        <a href="index.html">Accueil</a>
                    </li>
                    <li>
                        <img className="ImgNav"
                             src="../image/Experience.svg"
                             alt="loading"
                        />
                        <a href="../Formations.html">Mes Formations </a>
                    </li>
                    <li>
                        <img className="ImgNav"
                             src="../image/Code.svg"
                             alt="loading"
                        />
                        <a href="Projets.html">Mes Projets</a>
                    </li>
                    <li>
                        <img className="ImgNav"
                             src="../image/Contact.svg"
                             alt="loading"
                        />
                        <a href="Contact.html">Me Contacter</a>
                    </li>
                </ul>
            </nav>

            <div>
                <h1>Thomas Demarcq</h1>
            </div>

            <div className={"ParallaxContainer"}>
                <Parallax pages={2} onScroll={({ y }) => setScale(1 + y * 0.5)}>
                    <ParallaxLayer offset={0.1  }>
                        <h1 style={{
                            transform: `scale(${scale})`,
                            transition: 'transform 0.3s ease-out',
                            transformOrigin: 'center center'
                        }}>
                            Qui suis-je ?
                        </h1>
                        <p>Étudiant en première année de BUT informatique, je vise à me former aux nouvelles technologies et surtout en ce qui
                            concerne la cybersécurité. Je pense que dans le monde, avec l’avancement continuel de la
                            technologie la cybersécurité va devenir de plus en plus importante. Que ce soit au niveau d’une
                            personne, d’une entreprise ou d’un état. je voue un intérêt particulier dans les matières tels que l’introduction aux services réseaux ou encore l’exploitation de base de données.
                            Bien que je m’intéresse aussi à la programmation en règle générale. Passionné d’informatique depuis mon plus jeune âge, j’ai toujours aimé travailler dans ce domaine que ce soit dans le domaine scolaire ou non. Le développement est un univers à part entière et c’est pour ces différents aspects que j’ai suivi différents cours ou formation dans ce domaine.
                            Je suis sérieux, discipliné et curieux. J’aime apprendre de nouvelles choses et surtout mettre en pratique ce que j’apprends. </p>

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
                        {/* --- End of 3x3 Project Grid --- */}
                    </ParallaxLayer>
                </Parallax>
            </div>

            <footer>

                <ul>
                    <li>                <a>© 2025 Thomas Demarcq. Tous droits réservés.</a>
                    </li>
                    <li>
                        <a href="index.html">Accueil</a>
                    </li>
                    <li><a href="../Formations.html">Mes Formations </a></li>
                    <li>Mes Projets</li>
                    <li><a href="Contact.html">Me Contacter</a></li>
                    <li>
                        <a href="Database.html">Base De Donnée</a>
                    </li>
                </ul>
                <img className="ImgNav"
                     src="../image/Language.svg"
                     alt="loading"
                />
            </footer>
        </>
    );
}

export default App;