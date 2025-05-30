import { useState } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';

function GameOfLifeProject() {
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

export default GameOfLifeProject;