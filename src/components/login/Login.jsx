import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from './login.module.css'


const Login = ({ authService, isLogin }) => {
  const history = useHistory()

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: userId
    })
  }

  const onLogin = async (event) => {
    authService //
    .login(event.currentTarget.textContent)
    .then(data => {
      goToMaker(data.user.uid)
    })
    .catch(console.log);
  };

  useEffect(() => {
    authService //
    .onAuthChange(user => {
      user && goToMaker(user.uid)
    })
  })

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.login_list}>
          <li className={styles.login_item}>
            <button className={styles.login_btn} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.login_item}>
            <button className={styles.login_btn} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
