import "./App.css";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Plans from "./components/Plans";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinUs />
    </div>
  );
}

export default App;
