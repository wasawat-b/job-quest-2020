import InputForm from "./components/inputForm";
import ShownData from "./components/shownData";

import classes from "./App.module.css";

function App() {
  return (
    <div className={`container ${classes.box}`}>
      <h1 className="py-4 text-decoration-underline">Jokes of Chuck Norris</h1>
      <InputForm />
      <ShownData />
    </div>
  );
}

export default App;
