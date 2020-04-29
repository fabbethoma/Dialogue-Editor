import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD37T-xzPdV-SgKAZM3LS0UNSFD8uGf4D0",
    authDomain: "dialogue-editor-e4d50.firebaseapp.com",
    databaseURL: "https://dialogue-editor-e4d50.firebaseio.com/",
    projectId: "dialogue-editor-e4d50",
    storageBucket: "dialogue-editor-e4d50.appspot.com",
    messagingSenderId: "877631240022",
    appId: "1:877631240022:web:142c49ad42bfb50da588f7",
    measurementId: "G-29EM5ZEJH0"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.serverValue = app.database.ServerValue;
        this.auth = app.auth();
        this.db = app.database();


        this.googleProvider = new app.auth.GoogleAuthProvider();
        //this.facebookProvider = new app.auth.FacebookAuthProvider();
        //this.twitterProvider = new app.auth.TwitterAuthProvider();
    }

    // *** Auth API ***
    /* 
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
      doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);
    
      doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);
    
      doSignInWithTwitter = () =>
        this.auth.signInWithPopup(this.twitterProvider);
    
      doSignOut = () => this.auth.signOut();
    
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
     */
    // *** Merge Auth and DB User API *** //
    /* 
      onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
          if (authUser) {
            this.user(authUser.uid)
              .once('value')
              .then(snapshot => {
                const dbUser = snapshot.val();
    
                // default empty roles
                if (!dbUser.roles) {
                  dbUser.roles = [];
                }
    
                // merge auth and db user
                authUser = {
                  uid: authUser.uid,
                  email: authUser.email,
                  ...dbUser,
                };
    
                next(authUser);
              });
          } else {
            fallback();
          }
        });
     */
    // *** User API ***

    scenario = uid => this.db.ref(`scenarios/${uid}`);

    scenarios = () => this.db.ref('scenarios');

    exchange = uid => this.db.ref(`exchanges/${uid}`);

    exchanges = () => this.db.ref('exchanges');
}

export default Firebase;
