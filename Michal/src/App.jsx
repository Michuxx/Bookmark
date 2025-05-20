import "./App.css";
import Content from "./components/content/Content";
import Manager from "./components/content/manager";
import Header from "./components/header/Header";
import Newslatter from "./components/newslatter/newslatter";

function App() {
  return (
    <div className="container">
      <Header />
      <Content>
        <Manager />
      </Content>
      <Newslatter />
    </div>
  );
}

export default App;
