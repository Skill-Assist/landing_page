import Image from "next/image";
import homeGif from "../../public/working-tech.gif";
import demoGif from "../../public/demo.gif";

import Header from "@/components/Header/Header";

import styles from "../styles/index.module.scss";
import SolutionBox from "@/components/SolutionBox/SolutionBox";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const solutions = [
    {
      id: 1,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
    {
      id: 2,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
    {
      id: 3,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
    {
      id: 4,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
    {
      id: 5,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
    {
      id: 6,
      icon: "/proctoring.png",
      title: "Proctoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec mi ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis vestibulum, laoreet neque a, tincidunt ex. Vestibulum pellentesque diam nec ullamcorper vestibulum. Aenean dictum lacus vitae blandit ultrices. Vivamus sit amet magna orci.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.home}>
          <div className={styles.textContainer}>
            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper augue vitae ligula aliquam, sed dictum turpis
              fringilla.
            </p>
            <button>Conheça mais!</button>
          </div>
          <div className={styles.gifContainer}>
            <Image src={homeGif} alt="my gif" height={500} width={500} />
          </div>
        </section>
        <section className={styles.video}>
          <h1>Lorem ipsum dolor sit amet</h1>
          <Image src={demoGif} alt="my gif"/>
        </section>
        <section className={styles.solutions}>
          <h1>Onde Atuamos</h1>
          <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
          <div className={styles.solutionsContainer}>
            {solutions.map((solution) => (
              <SolutionBox
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
