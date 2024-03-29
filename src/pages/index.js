import { useContext, useEffect, useState } from 'react';
import Aos from 'aos';
import Skeleton from 'react-loading-skeleton';

import Header from '@/components/Header/Header';
import SolutionBox from '@/components/SolutionBox/SolutionBox';
import Footer from '@/components/Footer/Footer';
import ContactModalCtx from '@/context/moda-context';
import ContactModal from '@/components/ContactModal/ContactModal';

import styles from '../styles/index.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import 'aos/dist/aos.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const modalCtx = useContext(ContactModalCtx);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    window.addEventListener('resize', checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const solutions = [
    {
      id: 1,
      icon: 'automation.png',
      title: 'Automatização',
      description:
        'Nossa plataforma utiliza testes automatizados para avaliar as habilidades e competências de potenciais candidatos em tempo real. Isso garante uma avaliação rápida e justa, gerando economias de tempo e recursos.',
    },
    {
      id: 2,
      icon: 'proctoring.png',
      title: 'Proctoring',
      description:
        'Disponibilizamos uma solução de proctoring para monitoramento dos candidatos durante a realização do teste para prevenir fraudes e assegurar uma avaliação adequada de cada candidato.',
    },
    {
      id: 3,
      icon: 'plug-and-play.png',
      title: 'Plug-and-play',
      description:
        'Nossos testes podem ser facilmente integrados no seu processo seletivo, através da utilização de um banco de questões ou de testes elaborados pelo cliente e facilmente carregados na plataforma, adequando o fluxo de seleção às suas necessidades.',
    },
    {
      id: 4,
      icon: 'curva.png',
      title: 'Notas "na curva"',
      description:
        'A nota de cada candidato é ajustada com base na performance de todos os demais candidatos que realizaram testes semelhantes, viabilizando uma comparação relativa entre pares e gerando uma avaliação mais precisa de suas habilidades.',
    },
    {
      id: 5,
      icon: 'ai.png',
      title: 'Augmented  AI',
      description:
        'Nossa plataforma realiza correções dos exames com base em algoritmos de Al, gerando relatórios detalhados com insights valiosos das capacidades técnicas demonstradas pelos candidatos. Além disso, também por meio de IA, auxilia na criação de questões.',
    },
    {
      id: 6,
      icon: 'rocket.png',
      title: 'Escala do processo',
      description:
        ' Nossa solução garante um processo de recrutamento justo e objetivo, garantindo uma seleção com base em habilidades técnicas e eliminando a influência de caracteristicas pessoais, tais como orientação sexual, raça ou etnia.',
    },
  ];

  const contactHandler = () => {
    modalCtx.showModalHandler();
  };

  useEffect(() => {
    const solutionBoxes = document.querySelectorAll('.solutionContainer');

    const baseDelay = 300;

    solutionBoxes.forEach((box, index) => {
      const delay = index * baseDelay;

      box.setAttribute('data-aos-delay', delay.toString());
    });

    if (typeof window !== 'undefined') {
      Aos.init({ duration: 1000 });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Header isLoading={isLoading} isMobile={isMobile} />
      <main>
        <section className={styles.home}>
          <div className={styles.textContainer}>
            <h1 onClick={() => console.log(isMobile)}>
              {isLoading ? (
                <Skeleton />
              ) : (
                'Simplificamos a aplicação de testes de recrutamento com IA'
              )}
            </h1>
            <p>
              {isLoading ? (
                <Skeleton />
              ) : (
                `Através de uma ferramenta de seleção automatizada, é possível
                realizar testes de modo mais rápido, seguro, confiável e abrangente que nunca.`
              )}
            </p>
            {isLoading ? (
              <Skeleton height={42} width={180} />
            ) : (
              <button onClick={contactHandler}>Lista de espera</button>
            )}
          </div>
        </section>
        <section className={styles.video}>
          {isLoading ? (
            <Skeleton
              height={isMobile ? 180 : 356}
              width={isMobile ? 200 : 632}
            />
          ) : (
            <video controls loop width="100%">
              <source src="/teaser.mp4" type="video/mp4" />
            </video>
          )}
        </section>
        <section className={styles.solutions}>
          <h1>
            {isLoading ? (
              <Skeleton
                width={isMobile ? 200 : 374}
                height={46}
                style={{ marginTop: '30px' }}
              />
            ) : (
              'Nossos diferenciais'
            )}
          </h1>
          <p>
            {isLoading ? (
              <Skeleton
                width={isMobile ? 200 : 383}
                height={23}
                style={{ marginBottom: '10px' }}
              />
            ) : (
              'Escale seu processo seletivo de forma fácil'
            )}
          </p>
          <div className={styles.solutionsContainer}>
            {solutions.map((solution) => {
              if (isLoading) {
                return (
                  <Skeleton
                    key={solution.id}
                    width={isMobile ? 250 : 380}
                    height={280}
                    style={{ margin: '20px' }}
                  />
                );
              } else {
                return (
                  <SolutionBox
                    key={solution.id}
                    icon={solution.icon}
                    title={solution.title}
                    description={solution.description}
                  />
                );
              }
            })}
          </div>
        </section>
        <Footer onClick={contactHandler} />
      </main>
      <ContactModal />
    </>
  );
}
