import React, { useRef } from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import styles from './card_edit_form.module.css'

const CardEditForm = ({card, deleteCard, updateCard}) => {
  const {id, name, company, title, email, phone, message, fileName, fileURL} = card

  const nameRef = useRef()
  const companyRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const themeRef = useRef()
  const messageRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()
    deleteCard(id)
  }
  
  const onChange = event => {
    event.preventDefault()
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
      <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
      <input ref={titleRef} className={styles.input} type="text" name="title"  value={title} onChange={onChange}/>
      <input ref={emailRef} className={styles.input} type="email" name="email" value={email} onChange={onChange}/>
      <input ref={phoneRef} className={styles.input} type="text" name="phone" value={phone} onChange={onChange}/>
      <select ref={themeRef} className={styles.select} name="theme" onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea ref={messageRef} className={styles.textarea} type="text" name="message" value={message} onChange={onChange}/>
      <div className={styles.image_file_input}>
        <ImageFileInput />
      </div>
      <Button name={'Delete'} />
    </form>
  )
}

export default CardEditForm;