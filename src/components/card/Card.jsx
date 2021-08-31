import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMG = './images/default_logo.png'

const Card = ({card}) => {
  const {name, company, title, email, phone, message, fileName, fileURL, theme} = card
  const profilePhoto = fileURL || DEFAULT_IMG
  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img  className={styles.avatar} src={profilePhoto} alt="Profile Photo" />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.phone}>{phone}</p>
        <p  className={styles.message}>{message}</p>
      </div>
    </li>
  )
}

const getTheme = (theme) => {
  switch (theme) {
    case 'light':
      return styles.light
    case 'dark':
      return styles.dark
    case 'colorful':
      return styles.colorful
    default:
      throw new Error(`Theme ${theme} is not available`)
  }
}

export default Card;