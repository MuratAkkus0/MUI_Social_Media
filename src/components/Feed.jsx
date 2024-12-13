import { Box } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import Post from "./Post";
import AddPostIcon from "./AddPostIcon";
import AddPostPopup from "./AddPostPopup";
import { useState } from "react";

function Feed() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Box
      sx={{ marginLeft: "0!important" }}
      flex={4}
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      position="relative"
      p={2}
      pb={10}
      gap={2}
    >
      <AddPostIcon onClick={() => setIsPopupOpen(true)} />
      <AddPostPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
