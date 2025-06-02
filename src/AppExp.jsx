import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import accountIcon from './assets/image/account.svg';

// Détection automatique de l'environnement
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function AppExp() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img className="ImgNav"
                             src={`${basePath}/image/Home.svg`}
                             alt="Accueil"
                        />
                        <Link to="/">Accueil</Link>
                    </li>

                    <li>
                        <img className="ImgNav"
                             src={`${basePath}/image/Experience.svg`}
                             alt="Formations"
                        />
                        <Link to="/formations">Mes Formations</Link>
                    </li>

                    <li>
                        <img className="ImgNav"
                             src={`${basePath}/image/Code.svg`}
                             alt="Projets"
                        />
                        <Link to="/projets">Mes Projets</Link>
                    </li>

                    <li>
                        <img className="ImgNav"
                             src={accountIcon}
                             alt="Contact"
                        />
                        <Link to="/contact">Me Contacter</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <h1>Thomas Demarcq</h1>
            </div>

            <div className="ParallaxContainer">
                <Parallax pages={2}>
                    <ParallaxLayer offset={0}>
                        <h1>Mes Diplômes
                            <img src={`${basePath}/image/diplome.svg`} alt="Diplôme" />
                        </h1>
                        <p>Étudiant en première année de BUT informatique à l'IUT de Lens, je me spécialise dans le développement web et la cybersécurité. Mon parcours académique m'a permis d'acquérir des bases solides en programmation et en gestion de projets informatiques.

                            Au cours de ma formation, j'ai développé des compétences en développement front-end et back-end, avec une attention particulière portée aux bonnes pratiques de sécurité. Les projets réalisés durant mon cursus m'ont permis de mettre en pratique les concepts théoriques appris en cours.

                            Ma formation m'a également sensibilisé aux enjeux de la transformation numérique et m'a donné les outils pour comprendre les défis technologiques actuels et futurs dans le domaine de l'informatique.</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0.5}>
                        <h1>Tumo & Le Campus Du Numérique
                            <img src={`${basePath}/image/school.svg`} alt="École" />
                        </h1>
                        <p>Ma formation au Campus du Numérique m'a permis de découvrir les métiers du digital et de développer mes premières compétences techniques. Cette expérience m'a donné un aperçu concret du monde professionnel du numérique.

                            Chez Tumo, j'ai pu explorer différents domaines : programmation, design, robotique et cybersécurité. Cette approche multidisciplinaire m'a aidé à identifier mes centres d'intérêt et à orienter mon parcours vers la cybersécurité et le développement web.

                            Ces formations pratiques et interactives ont complété parfaitement mon cursus universitaire en m'apportant une vision plus concrète et professionnelle des technologies que j'étudie.</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1}>
                        <h1>TryHackMe
                            <img src={`${basePath}/image/Login.svg`} alt="Login" />
                        </h1>
                        <p>TryHackMe constitue une partie importante de ma formation en cybersécurité. Cette plateforme m'a permis d'apprendre les concepts de sécurité informatique de manière pratique et ludique à travers des défis concrets.

                            Grâce aux différents parcours proposés, j'ai pu développer mes compétences en test d'intrusion, analyse de malwares, et sécurité réseau. Chaque challenge résolu renforce ma compréhension des vulnérabilités et des méthodes de protection.

                            Cette expérience pratique complète parfaitement ma formation théorique et me prépare aux défis réels de la cybersécurité que je rencontrerai dans ma future carrière professionnelle.</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.5}>
                        <h1>LeetCode
                            <img src={`${basePath}/image/memory.svg`} alt="Mémoire" />
                        </h1>
                        <p>LeetCode me permet de perfectionner mes compétences en algorithmique et structures de données. Cette plateforme est devenue un outil essentiel pour améliorer ma logique de programmation et ma résolution de problèmes.

                            La résolution régulière d'exercices sur LeetCode m'aide à développer une approche méthodique face aux défis techniques. Cela renforce également ma maîtrise des langages de programmation que j'utilise.

                            Cette pratique constante me prépare aux entretiens techniques et améliore ma capacité à concevoir des solutions efficaces et optimisées pour les projets que je développe.</p>
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
                <img className="ImgNav"
                     src={`${basePath}/image/Language.svg`}
                     alt="Langue"
                />
            </footer>
        </>
    );
}

export default AppExp;