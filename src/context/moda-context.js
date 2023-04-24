import { createContext, useState } from "react";

const ContactModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const ContactModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevState) => {
      return !prevState;
    });
  };

  return (
    <ContactModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </ContactModalCtx.Provider>
  );
};

export default ContactModalCtx;
