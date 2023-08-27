import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
