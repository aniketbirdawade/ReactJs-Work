import './App.css'
import Navbar from './component/Navbar';
import Mobile from './component/Mobile';

function App() {
 
   var name = "";
    function enterName(){

    name = "Aniket"

     console.log(name)

    }

  return (
    <>
      <div>
        <h1>Welcome to my app {name}</h1>

        <button onClick={enterName}>Enter Name</button>
      </div>

{/* 
      <Navbar/>
      <Mobile/> */}
    </>
  )
}

export default App
