import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VerticalArticles from "./components/VerticalArticles";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <VerticalArticles />
      </div>
    </ChakraProvider>
  );
}

export default App;
