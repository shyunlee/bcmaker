import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import fireBaseApp from "./firebase";

class AuthService {
  login(providerName) {
    let authProvider;
    if (providerName === "Google") {
      authProvider = new GoogleAuthProvider();
    } else if (providerName === "Github") {
      authProvider = new GithubAuthProvider();
    }

    const auth = getAuth(fireBaseApp);
    return signInWithPopup(auth, authProvider);
  }

  onAuthChange(onUserChanged) {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      onUserChanged(user)
    })
  }

  logout() {
    const auth = getAuth();
    signOut(auth) //
      // .then(console.log)
      .catch(console.log);
  }
}

export default AuthService;
