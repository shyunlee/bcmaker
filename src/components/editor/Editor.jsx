import React from "react";
import CardAddForm from "../card_add_form copy/CardAddForm";
import CardEditForm from "../card_edit_form/CardEditForm";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, deleteCard, addOrUpdateCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          deleteCard={deleteCard}
          updateCard={addOrUpdateCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} addCard={addOrUpdateCard} />
    </section>
  );
};

export default Editor;
