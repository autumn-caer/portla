/* Theme.tsx */

import { extendTheme } from "@chakra-ui/react";
import BG from "./images/p-bg.svg";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#1d0e0e",
        backgroundColor: "#fae6d0",
        borderColor: "#1d0e0e",
        backgroundImage: `url("${BG}")`,
      },
    },
  },
});
