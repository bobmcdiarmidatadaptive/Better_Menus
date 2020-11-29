import firebase from "firebase";

const firebaseConfig = {
    aapiKey: "AIzaSyB3_tj1p8tfattgwC3br8KPQJFGZDM4EOo",
    authDomain: "menuplanner-rmcdiarmid-1120.firebaseapp.com",
    databaseURL: "https://menuplanner-rmcdiarmid-1120.firebaseio.com",
    projectId: "menuplanner-rmcdiarmid-1120",
    storageBucket: "menuplanner-rmcdiarmid-1120.appspot.com",
    messagingSenderId: "356279769023",
    appId: "1:356279769023:web:38b6306d2a3431869ab30a",
    measurementId: "G-7SS6B7PCD2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.database();

export default database;