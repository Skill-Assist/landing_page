import React, { useState } from "react";

import styles from "./Form.module.scss";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.959855310": "",
    "entry.1924770189": "",
    "entry.1990946137": "",
    "entry.1594245412": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/d/e/1FAIpQLSdOjEHKZxz3NP4gljkuqpEWwZHbD1-qVyago39eKQXwtzbDIw/formResponse?entry.959855310=${formData["entry.959855310"]}&entry.1924770189=${formData["entry.1924770189"]}&entry.1990946137=${formData["entry.1990946137"]}&entry.1594245412=${formData["entry.1594245412"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <>
      {submit ? (
        <p className={styles.afterForm}>Obrigado pela mensagem! Entraremos em contato em breve!</p>
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit} target="_self">
          <fieldset>
            <label htmlFor="entry.959855310">Nome:</label>
            <input
              required
              type="text"
              name="entry.959855310"
              onChange={handleInputData("entry.959855310")}
              value={formData["entry.959855310"]}
              autoComplete={false}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="entry.1924770189">E-mail:</label>
            <input
              required
              type="email"
              name="entry.1924770189"
              onChange={handleInputData("entry.1924770189")}
              value={formData["entry.1924770189"]}
              autoComplete={false}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="entry.1990946137">Telefone:</label>
            <input
              type="tel"
              name="entry.1990946137"
              onChange={handleInputData("entry.1990946137")}
              value={formData["entry.1990946137"]}
              autoComplete={false}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="entry.1594245412">Message:</label>
            <textarea
              required
              name="entry.1594245412"
              rows="4"
              cols="10"
              onChange={handleInputData("entry.1594245412")}
              value={formData["entry.1594245412"]}
              autoComplete={false}
            ></textarea>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      )}
    </>
  );
};

export default Form;
