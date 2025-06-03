import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';
import accountIcon from "./assets/image/account.svg";
import languageIcon from "./assets/image/Language.svg";
import homeIcon from "./assets/image/Home.svg";
import experienceIcon from "./assets/image/Experience.svg";
import codeIcon from "./assets/image/Code.svg";

const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function GameOfLifeProject() {
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

            <div className="ParallaxContainer">
                <Parallax pages={2} onScroll={({ y }) => setScale(1 + y * 0.3)}>
                    <ParallaxLayer offset={0.1}>
                        <div className="project-header">
                            <h1 style={{
                                transform: `scale(${scale})`,
                                transition: 'transform 0.3s ease-out',
                                transformOrigin: 'center center'
                            }}>
                                Jeu de la Vie de Conway
                            </h1>
                            <div className="project-meta">
                                <span className="project-date">Réalisé en 2021</span>
                                <span className="project-tech">Technologies: Javascript, CSS</span>
                            </div>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.5}>
                        <div className="project-content">
                            <section className="project-description">
                                <h2>Description du Projet</h2>
                                <p>
                                    Implémentation interactive du célèbre automate cellulaire conçu par John Horton Conway en 1970.
                                    Ce projet simule l'évolution de cellules selon des règles simples mais qui produisent des comportements complexes.
                                </p>
                                <div className="project-features">
                                    <h3>Fonctionnalités clés :</h3>
                                    <ul>
                                        <li>Grille interactive modifiable en temps réel</li>
                                        <li>Contrôle de la vitesse de simulation</li>
                                        <li>Mode pause/play</li>
                                        <li>Génération aléatoire de configurations initiales</li>
                                        <li>Reset complet de la grille</li>
                                        <li>Visualisation des règles du jeu intégrée</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="project-technical">
                                <h2>Détails Techniques</h2>
                                <div className="technical-details">
                                    <div className="code-sample">
                                        <h3>Implémentation des règles</h3>
                                        <pre>{`
function computeNextGeneration(grid) {
  const newGrid = grid.map(arr => [...arr]);
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const neighbors = countNeighbors(grid, i, j);
      
      // Règle 1: Une cellule morte avec exactement 3 voisins devient vivante
      if (!grid[i][j] && neighbors === 3) {
        newGrid[i][j] = true;
      }
      // Règle 2: Une cellule vivante avec 2 ou 3 voisins survit
      else if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
        newGrid[i][j] = false;
      }
    }
  }
  
  return newGrid;
}
                                        `}</pre>
                                    </div>
                                    <div className="challenges">
                                        <h3>Défis relevés</h3>
                                        <ul>
                                            <li>Optimisation des performances pour les grandes grilles</li>
                                            <li>Création d'une interface intuitive</li>
                                            <li>Tests unitaires pour les règles du jeu</li>
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
                <img className="ImgNav" src={languageIcon} alt="Langue" />
            </footer>
        </>
    );
}

export default GameOfLifeProject;
