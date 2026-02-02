import "./App.css";
import Addition from "./Component/Addition";
import Greeting from "./Component/Greeting";

function App() {
  return(
  
  <>
  <h1>Hello from JSX app</h1>

  <Greeting/>
  <Addition a={10} b={20}/>
  </>
);
}

export default App;
