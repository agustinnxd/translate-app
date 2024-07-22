import { useState } from "react";
import { TranslationInput } from "./components/TranslationInput";
import './main.css'
import { TranslationOutput } from "./components/TranslationOutput";
import { LangSelector } from "./components/LangSelector";
import { NavBar } from "./components/NavBar";

function App() {

  const [text, setText] = useState('');

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 gap-4 place-content-center mt-4">
        <TranslationInput text={text} setText={setText} />
        <TranslationOutput text={text} />
      </div>
    </div>
  );
}

export default App;
