import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import ContactModalCtx from "@/context/moda-context";

import styles from "./ContactModal.module.scss";

const ContactModal = () => {
  const modalCtx = useContext(ContactModalCtx);

  return (
    <AnimatePresence>
      {modalCtx.showModal && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => modalCtx.showModalHandler()}
            className={styles.modalBackdrop}
          ></motion.div>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.modalContentWrapper}
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.modalContent}
            >
              <div>
                <header className={styles.header}>
                  <h1>Contato</h1>
                  <GrClose onClick={modalCtx.showModalHandler} size={15} />
                </header>
                <div className={styles.contactInfo}>
                  <div className={styles.emailContainer}>
                    <div className={styles.field}>
                      <AiOutlineMail size={20} />
                      <p>luiz.alencar@sou.inteli.edu.br</p>
                    </div>
                    <div className={styles.field}>
                      <AiOutlineMail size={20} />
                      <p>marcos.silva@sou.inteli.edu.br</p>
                    </div>
                  </div>
                  <div className={styles.wppContainer}>
                    <a href="https://wa.me/5527992022779" target="_blank" className={styles.field}>
                      <BsWhatsapp size={20} />
                      <p>(27) 99202 2779</p>
                    </a>
                    <a href="https://wa.me/5521997553342" target="_blank" className={styles.field}>
                      <BsWhatsapp size={20} />
                      <p>(21) 99755 3342</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
