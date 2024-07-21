import { useState } from "react";
import { TranslationInput } from "./components/TranslationInput/TranslationInput";
import './main.css'
import { TranslationOutput } from "./components/TranslationOutput/TranslationOutput";
import { LangSelector } from "./components/LangSelector";
import { TranslationProvider } from "react-google-multi-lang";

function App() {

  const [text, setText] = useState('');

  return (
    <>
        <LangSelector />
        <TranslationInput text={text} setText={setText} />
        <TranslationOutput text={text}/>
    </>
  );
}

export default App;
