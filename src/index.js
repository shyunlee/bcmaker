import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/authService';
import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/image_file_input/ImageFileInput';
import CardRepository from './service/cardRepository';


const authService = new AuthService()
const cardRepository = new CardRepository()
const imageUploader = new ImageUploader()

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);