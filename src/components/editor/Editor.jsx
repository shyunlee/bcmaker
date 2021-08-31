import React from 'react';
import CardEditForm from '../card_edit_form/CardEditForm';
import styles from './editor.module.css'

const Editor = ({cards}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
        {cards.map(card => <CardEditForm key={card.id} card={card}/>)}
    </section>
  )
}

export default Editor;