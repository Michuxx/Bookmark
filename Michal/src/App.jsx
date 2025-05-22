import "./App.css";
import Content from "./components/content/Content";
import Manager from "./components/content/manager";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Newslatter from "./components/newslatter/newslatter";
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
        <Logo color="white" />
      </Footer>
    </div>
  );
}

export default App;
