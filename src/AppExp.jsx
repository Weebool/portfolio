import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import accountIcon from './assets/image/account.svg';
import languageIcon from "./assets/image/Language.svg";
import homeIcon from "./assets/image/Home.svg";
import experienceIcon from "./assets/image/Experience.svg";
import codeIcon from "./assets/image/Code.svg";
import memoryIcon from './assets/image/memory.svg';
import schoolIcon from './assets/image/school.svg';
import diplomaIcon from './assets/image/trophy.svg';
import shieldIcon from './assets/image/security.svg';

// Détection automatique de l'environnement
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/portfolio' : '';

function AppExp() {
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
                <Parallax pages={2}>
                    <ParallaxLayer offset={0}>
                        <h1>Mes Diplômes
                            <img src={diplomaIcon} alt="Diplôme" />
                        </h1>
                        <p>
                            Suite à l’obtention d’un BAC général avec les enseignements de spécialité NSI ("Numérique et sciences informatiques") et géopolitique ainsi que les options mathématiques complémentaires et anglais européen, je me suis orienté vers le BUT informatique de l’Institut Universitaire de Technologie 2 de Grenoble. Cette formation me permet de me spécialiser dans le développement web et la cybersécurité et d’acquérir des bases solides en programmation et en gestion de projets informatiques. Elle m’a également permis de développer des compétences en développement front-end et back-end tout en veillant au respect des pratiques de sécurité. Enfin cette formation a contribué à me sensibiliser aux enjeux autour de la transformation numérique et à comprendre les défis technologiques actuels et futurs dans le domaine de l'informatique.
                        </p>
                        </ParallaxLayer>

                    <ParallaxLayer offset={0.5}>
                        <h1>Tumo & Le Campus Du Numérique
                            <img src={schoolIcon} alt="École" />
                        </h1>
                        <p>
                            En parallèle de mon cursus dans le secondaire, j’ai eu la chance de participer à la formation proposée par le Campus du Numérique durant 3 ans. Celle-ci m’a permis de découvrir les métiers du digital en m’offrant un aperçu concret du monde professionnel du numérique. Pendant ce cycle j’ai développé mes premières compétences techniques dans différents domaines tels que la robotique, la programmation, la cybersécurité ou encore le design. Cette approche pluridisciplinaire était très intéressante et très formatrice car elle m’a permis d’identifier mes centres d’intérêt et à terme d’orienter mon parcours vers la cybersécurité ainsi que le développement web. Cette formation est un réel plus à mon bagage universitaire car l’approche était moins théorique.
                        </p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1}>
                        <h1>TryHackMe
                            <img src={shieldIcon} alt="Login" />
                        </h1>
                        <p>

                            TryHackMe représente un pilier de ma formation en cybersécurité. En effet, cette plateforme m’a permis d’appréhender de manière ludique et pratique les différents concepts de sécurité informatique grâce notamment à des défis concrets. Les différents parcours proposés ont contribué à développer mes compétences dans différentes tâches comme le test d’intrusion, l’analyse de malwares ainsi que la sécurité réseau. Ainsi chaque challenge résolu renforce ma compréhension des vulnérabilités et des méthodes de protection. Cet aspect pratique de mon apprentissage vient compléter ma formation théorique et représentera un réel atout pour ma carrière professionnelle.                        </p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.5}>
                        <h1>LeetCode
                            <img src={memoryIcon} alt="Mémoire" />
                        </h1>
                        <p>
                            La plateforme LeetCode me permet d’améliorer mes compétences en algorithmes et structures de données. En effet, elle représente un outil essentiel à l’amélioration de ma logique de programmation et de résolution de problèmes qui m’a permis d’acquérir une approche méthodique face aux différents défis techniques à travers la résolution d’exercices. Elle m’a également permis de renforcer ma maitrise des langages de programmation et de me préparer aux entretiens techniques.
                        </p>
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

export default AppExp;