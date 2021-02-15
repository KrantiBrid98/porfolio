import React from 'react';
import Wrapper from "../src/components/wrapper/wrapper";
import { ThemeContext } from "../src/components/context";

function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <Wrapper />
    </ThemeContext.Provider>
  );
}

export default App;
