import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </ChakraProvider>
  );
}

export default App;