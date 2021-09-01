import React, { memo } from 'react';
import styles from './button.module.css'

const Button = memo(({name}) => {
  return (
    <button className={styles.button}>{name}</button>
  )
})

export default Button;