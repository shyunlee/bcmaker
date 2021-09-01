import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, fileName, onFileChange }) => {
  const [loading, setLoading] = useState(false)
  const name = fileName || "No File";
  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true)
    const result = await imageUploader.upload(event.target.files[0])
    setLoading(false)
    onFileChange(result)
  };

  return (
    <div className={styles.container}>
      {!loading && <input
        className={`${styles.image_btn} ${fileName ? styles.pink : styles.grey}`}
        type="button"
        name="button"
        value={name}
        onClick={onButtonClick}
      />}
      <input
        ref={inputRef}
        className={styles.file_input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
