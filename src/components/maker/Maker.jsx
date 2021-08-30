import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const history = useHistory()

  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      !user && history.push('/')
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <section className={styles.container}>
        <Editor />
        <Preview />
      </section>
      <Footer />
    </section>
  )
}

export default Maker;