import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <div>aaaabbbiii</div>
      </div>
    </ChakraProvider>
  );
}

export default App;
