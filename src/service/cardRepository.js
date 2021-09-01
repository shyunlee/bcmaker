import fireBaseApp from "./firebase";
import { getDatabase, ref, set, remove, onValue, onDisconnect } from "firebase/database";

class CardRepository {
  constructor() {
    this.db = getDatabase(fireBaseApp);
  }

  getCards(uid, onUpdate) {
    const dbRef = ref(this.db, `${uid}/cards`)
    onValue(dbRef, (snapshot) => {
      onUpdate(snapshot.val())
    })

    return () => onDisconnect(ref(this.db, 'db disconnected')).set('disconnected')
  }

  saveCard(uid, card) {
    set(ref(this.db, `${uid}/cards/${card.id}`), card);
  }

  removeCard(uid, cardId) {
    remove(ref(this.db, `${uid}/cards/${cardId}`));
  }
}

export default CardRepository;
