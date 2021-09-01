import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './maker.module.css';

const cardsData = {
  1:{
    id: 1,
    name: 'sean1',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: '',
    fileURL: null,
    theme: 'colorful'
  },
  2:{
    id: 2,
    name: 'sean2',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: '',
    fileURL: null,
    theme: 'light'
  },
  3:{
    id: 3,
    name: 'sean3',
    company: 'Google',
    title: 'Software Engineer',
    email: 'sean1@test.com',
    phone: '224-766-9267',
    message: "go for it",
    fileName: '',
    fileURL: null,
    theme: 'dark'
  },
}

const Maker = ({FileInput, authService}) => {
  const [cards, setCards] = useState(cardsData)
  const history = useHistory()

  const onLogout = () => {
    authService.logout()
  }

  const addOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = {...cards}
      updated[card.id] = card
      return updated
    })
  }

  const deleteCard = (id) => {
    setCards(cards => {
      const updated = {...cards}
      delete updated[id]
      return updated
    })
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
        <Editor FileInput={FileInput} cards={cards} deleteCard={deleteCard} addOrUpdateCard={addOrUpdateCard}/>
        <Preview cards={cards}/>
      </section>
      <Footer />
    </section>
  )
}

export default Maker;