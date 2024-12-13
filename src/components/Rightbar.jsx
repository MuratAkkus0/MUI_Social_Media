import { Avatar, Box, styled } from "@mui/material";
import PhotoAlbum from "./PhotoAlbum";
import FriendsGroup from "./FriendsGroup";
import LastConversations from "./LastConversations";

function Rightbar() {
  const StyledAvatar = styled(Avatar)({
    width: "3rem",
    height: "3rem",
  });
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
      }}
    >
      <Box position="fixed">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <FriendsGroup />
          <PhotoAlbum />
          <LastConversations />
        </Box>
      </Box>
    </Box>
  );
}

export default Rightbar;
