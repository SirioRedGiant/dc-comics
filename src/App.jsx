import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//note ARRAY COMICS fumetti
import comicsListData from "./data/comics";

//? Jumbotron
import Jumbotron from "./components/Jumbotron";

export default function App() {
  return (
    <>
      <Header headLogoImg="src/assets/img/dc-logo.png" />
      <Jumbotron image="/img/jumbotron.jpg" />
      <Main comics={comicsListData} />
      <Footer />
    </>
  );
}
