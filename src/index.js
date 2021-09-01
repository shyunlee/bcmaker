import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/authService';
import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/image_file_input/ImageFileInput';

const authService = new AuthService()
const imageUploader = new ImageUploader()

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);