import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CopyImage } from './assets/Copy.svg';
import IMG from './assets/copyNpg.png';
import styles from './dialogPromo.module.scss';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

interface AppPromo {
  bgColor?: RGB | RGBA | HEX;
  delay?: number;
  promoCode?: string;
  linkPartner?: string;
  linkBanner?: string;
  titleLink?: string;
}

const DialogPromo: FC<AppPromo> = ({
  bgColor = '#ffffff',
  promoCode = 'promoCode',
  delay = 2000,
  linkPartner = 'https://www.youtube.com/',
  linkBanner = 'https://helppk.at.ua/New/l_5637.jpg',
  titleLink = 'ссылка на партнера',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  const copyPromoCode = () => {
    navigator.clipboard.writeText(promoCode);
  };

  return (
    isVisible && (
      <>
        {createPortal(
          <div
            style={{ backgroundColor: bgColor }}
            className={styles.portalContainer}
          >
            <img
              className={styles.imgBanner}
              src={linkBanner}
              alt="Partner Image"
            />
            <div className={styles.containerPromoCode}>
              <input
                className={styles.inputPromo}
                type="text"
                value={promoCode}
                readOnly
              />
              <img
                aria-label="Копировать"
                role="button"
                onClick={copyPromoCode}
                className={styles.buttonCopy}
                src={
                  'https://www.svgrepo.com/show/493667/copy-clipboard-memory-editor-copy-paste-document.svg'
                }
                alt="Partner Image"
              />
            </div>
            <a
              className={styles.linkPartner}
              href={linkPartner}
              rel="noopener noreferrer"
            >
              {titleLink}
            </a>
          </div>,
          document.getElementById('dialog') as Element,
        )}
      </>
    )
  );
};

export default DialogPromo;
