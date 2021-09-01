import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, fileName, onFileChange }) => {
  const name = fileName || "No File";
  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const result = await imageUploader.upload(event.target.files[0])
    onFileChange(result)
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.image_btn}
        type="button"
        name="button"
        value={name}
        onClick={onButtonClick}
      />
      <input
        ref={inputRef}
        className={styles.file_input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageFileInput;
