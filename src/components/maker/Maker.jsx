import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './maker.module.css';

const cardsData = [
  {
    id: 1,
    name: 'sean1',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: 'profile photo',
    fileURL: null,
    theme: 'colorful'
  },
  {
    id: 2,
    name: 'sean2',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: 'profile photo',
    fileURL: null,
    theme: 'light'
  },
  {
    id: 3,
    name: 'sean3',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: 'profile photo',
    fileURL: null,
    theme: 'dark'
  },
]

const Maker = ({authService}) => {
  const [cards, setCards] = useState(cardsData)
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
        <Editor cards={cards}/>
        <Preview cards={cards}/>
      </section>
      <Footer />
    </section>
  )
}

export default Maker;