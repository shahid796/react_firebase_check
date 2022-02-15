import logo from './logo.svg';
import './App.css';
import { firebaseApp } from './firebase/config';


function App() {
  return (
    <div className="App">
    <button onClick={()=>{
      firebaseApp.firestore().collection('users').get().then((snapshot)=>{
        snapshot.forEach((obj)=>{
          console.log(obj.data())
        })
      })
    }}></button>
    </div>
  );
}

export default App;
