import Navbar from "./components/navbar/Navbar";
import Blog from "./containers/blog/Blog";
import Header from "./containers/header/Header";
import Skills from "./containers/Skills/Skills";
import Footer from "./containers/footer/Footer";
import "./App.css";
import About from "./containers/about/About";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Blog />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
