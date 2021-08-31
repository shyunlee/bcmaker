import React, { useRef } from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';
import styles from './card_add_form.module.css'

const CardAddForm = ({addCard}) => {
  const formRef = useRef()
  const nameRef = useRef()
  const companyRef = useRef()
  const titleRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const themeRef = useRef()
  const messageRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()
    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      phone: phoneRef.current.value || '',
      theme: themeRef.current.value.toLowerCase(),
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: null
    }
    formRef.current.reset()
    addCard(newCard)
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input  ref={nameRef} className={styles.input} type="text" placeholder='Name'/>
      <input  ref={companyRef} className={styles.input} type="text" placeholder='Company'/>
      <input  ref={titleRef} className={styles.input} type="text"  placeholder='Title'/>
      <input  ref={emailRef} className={styles.input} type="email"  placeholder='Email'/>
      <input  ref={phoneRef} className={styles.input} type="text" placeholder='Phone'/>
      <select  ref={themeRef} className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea  ref={messageRef} className={styles.textarea} type="text" name="message" placeholder="Message"/>
      <div className={styles.image_file_input}>
        <ImageFileInput />
      </div>
      <Button name={'Add'} />
    </form>
  )
}

export default CardAddForm;