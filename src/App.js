import React from 'react';
import Wrapper from "../src/components/wrapper/wrapper";
import { ThemeContext } from "../src/components/context";

function App() {
  const [context, setContext] = React.useState(true);

  return (
    <ThemeContext.Provider value={[context, setContext]}>
      <Wrapper />
    </ThemeContext.Provider>
  );
}

export default App;
