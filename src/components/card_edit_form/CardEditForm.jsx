import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card}) => {
  const {name, company, title, email, phone, message, fileName, fileURL} = card
  return (
    <form className={styles.form}>
      <input  className={styles.input}type="name" value={name} placeholder='name'/>
      <input  className={styles.input}type="company" value={company} placeholder='company'/>
      <input  className={styles.input}type="title"  value={title} placeholder='title'/>
      <input  className={styles.input}type="email" value={email} placeholder='email'/>
      <input  className={styles.input}type="phone" value={phone} placeholder='phone'/>
      <select  className={styles.select}name="Theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea  className={styles.textarea}name="message" value={message} placeholder="message"/>
      <div className={styles.image_file_input}>
        <ImageFileInput />
      </div>
      <Button name={'Delete'}/>
    </form>
  )
}

export default CardEditForm;