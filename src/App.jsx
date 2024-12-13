import { Box, Button } from "@mui/material";
import React from "react";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Stack from "@mui/material/Stack";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box height="100%">
      <Navbar />
      <Stack
        mt={8}
        height="100%"
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
