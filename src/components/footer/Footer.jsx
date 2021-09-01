import React, { memo } from 'react';
import styles from './footer.module.css'

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
        <p>Sean's Business Card Maker</p>
      </footer>
  )
})

export default Footer;