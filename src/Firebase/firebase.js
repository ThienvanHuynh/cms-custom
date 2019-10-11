import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAikmzkO_xtLOcU7L8F3s0v9XVf767JKFg',
  authDomain: 'spider-cms.firebaseapp.com',
  databaseURL: 'https://spider-cms.firebaseio.com',
  projectId: 'spider-cms',
  storageBucket: 'spider-cms.appspot.com',
  messagingSenderId: ''
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
