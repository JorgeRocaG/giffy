import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>
            <img className="App-logo" alt="Giffy logo" src="/logo.svg" />
            Giffy
          </h1>
        </Link>

        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
