import "./App.css";
import Content from "./components/content/Content";
import Manager from "./components/content/Manager";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Newslatter from "./components/newslatter/Newslatter";
import FooterOptions from "./components/footer/FooterOptions";
import FooterIcons from "./components/footer/FooterIcons";
import Logo from "./components/header/Logo";

function App() {
  return (
    <div className="container">
      <Header />
      <Content>
        <Manager />
      </Content>
      <Newslatter />
      <Footer>
        <div className="logo-wrapper">
          <Logo color="white" />
          <FooterOptions />
        </div>
        <FooterIcons />
      </Footer>
    </div>
  );
}

export default App;
