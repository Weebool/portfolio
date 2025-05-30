import { useState } from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import './App.css';

function App() {
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
                <Parallax pages={2}>
                    <ParallaxLayer offset={0}>
                        <h1>Mes Diplômes
                            <img src="image/diplome.svg" />

                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam vitae risus in consectetur. Mauris eget quam eget ligula dignissim pellentesque. Fusce semper sagittis orci eu dignissim. Quisque luctus nec ante a feugiat. Nam mattis egestas sem, porta varius velit finibus ut. Curabitur scelerisque feugiat nisl in gravida. Proin vel maximus lacus. In vel orci gravida, vestibulum sem quis, ornare lorem. Maecenas nisi velit, condimentum ac nulla porttitor, blandit sagittis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Cras a diam efficitur, facilisis nulla vitae, accumsan magna. Duis id arcu tellus. Quisque maximus faucibus suscipit. Duis venenatis massa at justo dignissim aliquet. In tempus tristique egestas.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur justo eros, et accumsan arcu ornare a. Integer sed ultricies ligula. Nunc maximus feugiat convallis. Quisque ac dui euismod, pharetra massa et, fermentum nisi. Vivamus a felis in massa cursus iaculis vitae ornare ipsum. Aenean sed ligula velit. Vivamus pharetra velit eget elit accumsan, ac pretium neque pellentesque. Donec euismod eu velit interdum feugiat. Quisque tempus, ligula quis accumsan sollicitudin, odio nisl pellentesque dolor, eu pulvinar diam nisl a sapien. Fusce consequat eget massa nec euismod.

                            Etiam lorem eros, commodo sed erat non, volutpat facilisis mauris. Curabitur at elit hendrerit, eleifend quam quis, dapibus nisl. Nam fringilla sit amet massa eget suscipit. Vivamus a nisl vitae lectus interdum consectetur. Cras nec sem volutpat, volutpat sem sit amet, mattis urna. Sed tincidunt aliquam eros, id ultrices justo. Ut sem nisl, mollis sed orci ac, sollicitudin condimentum purus. Suspendisse sit amet sem ligula. Pellentesque erat lectus, tincidunt in ligula commodo, cursus convallis purus. Mauris pellentesque erat elit, ac luctus nulla tincidunt nec. Suspendisse tristique mauris sed hendrerit cursus.</p>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.5}>
                        <h1>Tumo & Le Campus Du Numérique
                            <img src="image/school.svg" />
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam vitae risus in consectetur. Mauris eget quam eget ligula dignissim pellentesque. Fusce semper sagittis orci eu dignissim. Quisque luctus nec ante a feugiat. Nam mattis egestas sem, porta varius velit finibus ut. Curabitur scelerisque feugiat nisl in gravida. Proin vel maximus lacus. In vel orci gravida, vestibulum sem quis, ornare lorem. Maecenas nisi velit, condimentum ac nulla porttitor, blandit sagittis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Cras a diam efficitur, facilisis nulla vitae, accumsan magna. Duis id arcu tellus. Quisque maximus faucibus suscipit. Duis venenatis massa at justo dignissim aliquet. In tempus tristique egestas.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur justo eros, et accumsan arcu ornare a. Integer sed ultricies ligula. Nunc maximus feugiat convallis. Quisque ac dui euismod, pharetra massa et, fermentum nisi. Vivamus a felis in massa cursus iaculis vitae ornare ipsum. Aenean sed ligula velit. Vivamus pharetra velit eget elit accumsan, ac pretium neque pellentesque. Donec euismod eu velit interdum feugiat. Quisque tempus, ligula quis accumsan sollicitudin, odio nisl pellentesque dolor, eu pulvinar diam nisl a sapien. Fusce consequat eget massa nec euismod.

                            Etiam lorem eros, commodo sed erat non, volutpat facilisis mauris. Curabitur at elit hendrerit, eleifend quam quis, dapibus nisl. Nam fringilla sit amet massa eget suscipit. Vivamus a nisl vitae lectus interdum consectetur. Cras nec sem volutpat, volutpat sem sit amet, mattis urna. Sed tincidunt aliquam eros, id ultrices justo. Ut sem nisl, mollis sed orci ac, sollicitudin condimentum purus. Suspendisse sit amet sem ligula. Pellentesque erat lectus, tincidunt in ligula commodo, cursus convallis purus. Mauris pellentesque erat elit, ac luctus nulla tincidunt nec. Suspendisse tristique mauris sed hendrerit cursus.</p>
                        </ParallaxLayer>

                    <ParallaxLayer offset={1}>
                        <h1>TryhackMe
                            <img src="image/Login.svg" />

                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam vitae risus in consectetur. Mauris eget quam eget ligula dignissim pellentesque. Fusce semper sagittis orci eu dignissim. Quisque luctus nec ante a feugiat. Nam mattis egestas sem, porta varius velit finibus ut. Curabitur scelerisque feugiat nisl in gravida. Proin vel maximus lacus. In vel orci gravida, vestibulum sem quis, ornare lorem. Maecenas nisi velit, condimentum ac nulla porttitor, blandit sagittis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Cras a diam efficitur, facilisis nulla vitae, accumsan magna. Duis id arcu tellus. Quisque maximus faucibus suscipit. Duis venenatis massa at justo dignissim aliquet. In tempus tristique egestas.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur justo eros, et accumsan arcu ornare a. Integer sed ultricies ligula. Nunc maximus feugiat convallis. Quisque ac dui euismod, pharetra massa et, fermentum nisi. Vivamus a felis in massa cursus iaculis vitae ornare ipsum. Aenean sed ligula velit. Vivamus pharetra velit eget elit accumsan, ac pretium neque pellentesque. Donec euismod eu velit interdum feugiat. Quisque tempus, ligula quis accumsan sollicitudin, odio nisl pellentesque dolor, eu pulvinar diam nisl a sapien. Fusce consequat eget massa nec euismod.

                            Etiam lorem eros, commodo sed erat non, volutpat facilisis mauris. Curabitur at elit hendrerit, eleifend quam quis, dapibus nisl. Nam fringilla sit amet massa eget suscipit. Vivamus a nisl vitae lectus interdum consectetur. Cras nec sem volutpat, volutpat sem sit amet, mattis urna. Sed tincidunt aliquam eros, id ultrices justo. Ut sem nisl, mollis sed orci ac, sollicitudin condimentum purus. Suspendisse sit amet sem ligula. Pellentesque erat lectus, tincidunt in ligula commodo, cursus convallis purus. Mauris pellentesque erat elit, ac luctus nulla tincidunt nec. Suspendisse tristique mauris sed hendrerit cursus.</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.5}>
                        <h1>LeetCode
                            <img src="image/memory.svg" />
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam vitae risus in consectetur. Mauris eget quam eget ligula dignissim pellentesque. Fusce semper sagittis orci eu dignissim. Quisque luctus nec ante a feugiat. Nam mattis egestas sem, porta varius velit finibus ut. Curabitur scelerisque feugiat nisl in gravida. Proin vel maximus lacus. In vel orci gravida, vestibulum sem quis, ornare lorem. Maecenas nisi velit, condimentum ac nulla porttitor, blandit sagittis magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Cras a diam efficitur, facilisis nulla vitae, accumsan magna. Duis id arcu tellus. Quisque maximus faucibus suscipit. Duis venenatis massa at justo dignissim aliquet. In tempus tristique egestas.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur justo eros, et accumsan arcu ornare a. Integer sed ultricies ligula. Nunc maximus feugiat convallis. Quisque ac dui euismod, pharetra massa et, fermentum nisi. Vivamus a felis in massa cursus iaculis vitae ornare ipsum. Aenean sed ligula velit. Vivamus pharetra velit eget elit accumsan, ac pretium neque pellentesque. Donec euismod eu velit interdum feugiat. Quisque tempus, ligula quis accumsan sollicitudin, odio nisl pellentesque dolor, eu pulvinar diam nisl a sapien. Fusce consequat eget massa nec euismod.

                            Etiam lorem eros, commodo sed erat non, volutpat facilisis mauris. Curabitur at elit hendrerit, eleifend quam quis, dapibus nisl. Nam fringilla sit amet massa eget suscipit. Vivamus a nisl vitae lectus interdum consectetur. Cras nec sem volutpat, volutpat sem sit amet, mattis urna. Sed tincidunt aliquam eros, id ultrices justo. Ut sem nisl, mollis sed orci ac, sollicitudin condimentum purus. Suspendisse sit amet sem ligula. Pellentesque erat lectus, tincidunt in ligula commodo, cursus convallis purus. Mauris pellentesque erat elit, ac luctus nulla tincidunt nec. Suspendisse tristique mauris sed hendrerit cursus.</p>
                    </ParallaxLayer>
                </Parallax>
            </div>

            <footer>
                <ul>
                    <li>
                        <a href="index.html" >Accueil</a>
                    </li>
                    <li>
                        <a href="../Formations.html">Mes Formations </a>
                    </li>

                    <li>Mes Projets</li>

                    <li><a href="Contact.html">Me Contacter</a></li>
                    <li>
                        <a href="Database.html" >Base De Donnée</a>
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
