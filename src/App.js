import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyMovies from "./components/BodyMovies";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyMovies />
      <Footer />
    </div>
  );
}

export default App;
