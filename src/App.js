import "./App.css";
import { Link, Route } from "wouter";

import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import Login from "pages/Login";
import Page404 from "pages/Page404";

import Header from "components/Header/Header";
import Register from "components/Register/Register";

import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "context/GifsContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <Link to="/">
            <h1>
              <img className="App-logo" alt="Giffy logo" src="/logo.svg" />
              Giffy
            </h1>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Page404} path="/404" />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
