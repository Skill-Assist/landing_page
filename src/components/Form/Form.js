import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './Form.module.scss';

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    'entry.959855310': '',
    'entry.1924770189': '',
    'entry.1990946137': '',
    'entry.1038165344': '',
    'entry.902404888': '',
    'entry.1594245412': '',
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

    let url = `https://docs.google.com/forms/d/e/1FAIpQLSdOjEHKZxz3NP4gljkuqpEWwZHbD1-qVyago39eKQXwtzbDIw/formResponse?entry.959855310=${formData['entry.959855310']}&entry.1924770189=${formData['entry.1924770189']}&entry.1990946137=${formData['entry.1990946137']}&entry.1038165344=${formData['entry.1038165344']}&entry.902404888=${formData['entry.902404888']}&entry.1594245412=${formData['entry.1594245412']}`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {submit ? (
        <p className={styles.afterForm}>
          Obrigado pela mensagem! Entraremos em contato em breve!
        </p>
      ) : (
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
          target="_self"
        >
          <fieldset>
            <label htmlFor="entry.959855310">Nome:</label>
            <input
              required
              placeholder="Insira seu nome"
              type="text"
              name="entry.959855310"
              onChange={handleInputData('entry.959855310')}
              value={formData['entry.959855310']}
              autoComplete={false}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="entry.1924770189">E-mail:</label>
            <input
              required
              placeholder="Insira seu email"
              type="email"
              name="entry.1924770189"
              onChange={handleInputData('entry.1924770189')}
              value={formData['entry.1924770189']}
              autoComplete={false}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="entry.1990946137">Telefone:</label>
            <InputMask
              id="mobilePhone"
              mask="(99) 99999-9999"
              type="tel"
              placeholder="( ) _____-____"
              name="entry.1990946137"
              onChange={handleInputData('entry.1990946137')}
              value={formData['entry.1990946137']}
              autoComplete={false}
            />
          </fieldset>

          <div className={styles.row}>
            <fieldset>
              <label htmlFor="entry.1038165344">
                Número de vagas de TI por ano:
              </label>
              <input
                required
                placeholder="Quantidade de vagas"
                type="number"
                name="entry.1038165344"
                onChange={handleInputData('entry.1038165344')}
                value={formData['entry.1038165344']}
                autoComplete={false}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="entry.902404888">
                Quantidade de candidatos por ano:
              </label>
              <input
                required
                placeholder="Quantidade de candidatos"
                type="number"
                name="entry.902404888"
                onChange={handleInputData('entry.902404888')}
                value={formData['entry.902404888']}
                autoComplete={false}
              />
            </fieldset>
          </div>

          <fieldset>
            <label htmlFor="entry.1594245412">
              Como é o processo seletivo atualmente?
            </label>
            <textarea
              rows={6}
              required
              name="entry.1594245412"
              onChange={handleInputData('entry.1594245412')}
              value={formData['entry.1594245412']}
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
