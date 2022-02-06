import "./App.css";
import GifList from "./components/GifList";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link href="/gif/pandas">Gifs de pandas</Link>
        <Link href="/gif/axolotes">Gifs de axolotes</Link>
        <Link href="/gif/pinguinos">Gifs de pinguinos</Link>
        <Route path="/gif/:keyword" component={GifList} />
      </section>
    </div>
  );
}

export default App;
