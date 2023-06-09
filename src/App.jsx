import './App.css';
import Card from "./components/Card";
import card from "../src/card.json"

function App() {
    return (
      <>
        <Card name={card.name} email={card.email} place={card.place} folowers={card.folowers} views={card.views} likes={card.likes}/>
      </>
    );
  }
  
  export default App;
