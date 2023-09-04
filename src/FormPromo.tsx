import { FC, FormEvent, useRef, useState } from 'react';
import styles from './app.module.scss';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

interface AppPromo {
  textColor?: RGB | RGBA | HEX;
  bgColor?: RGB | RGBA | HEX;
  buttonColor?: RGB | RGBA | HEX;
}

const FormPromo: FC<AppPromo> = ({
  bgColor = '#ffffff',
  buttonColor = '#ffffff',
  textColor = '#000000',
}) => {
  const form = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      const data = new FormData(form.current);

      fetch('https://jsonplaceolder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          themeWorks: data.get('themeWorks'),
          subject: data.get('subject'),
          email: data.get('email'),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((json) => alert(json))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className={styles.decorationForm}>
      <div
        className={styles.containerForm}
        style={{
          color: textColor ?? '#000000',
          backgroundColor: bgColor ?? '#ffffff',
        }}
      >
        <form onSubmit={handleSubmit} ref={form} className={styles.form}>
          <div className={styles.formItem}>
            <label>
              Тема работы:
              <input required type="text" name="themeWorks" />
            </label>
          </div>
          <div className={styles.formItem}>
            <label>
              Email:
              <input required type="email" name="email" />
            </label>
          </div>
          <div className={styles.formItem}>
            <label>
              Выберите предмет:
              <select required name="subject">
                <option value="">Выберите предмет</option>
                <option value="Математика">Математика</option>
                <option value="Физика">Физика</option>
                <option value="История">История</option>
              </select>
            </label>
          </div>

          <button
            style={{ backgroundColor: buttonColor ?? '#ffffff' }}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPromo;
