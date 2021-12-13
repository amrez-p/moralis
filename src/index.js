import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const serverUrl = "https://zxl1feqd0x8b.usemoralis.com:2053/server";
const appId = "OVlW7ryB9Mnf7eCN9jbS0fVt2EOfFC7xfiaYbMHC";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
