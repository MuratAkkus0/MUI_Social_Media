import { Box, Switch } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
import {
  AccountBox,
  Article,
  Bedtime,
  Group,
  Home,
  Newspaper,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      flex={1}
      flexShrink={0}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <List component="nav" sx={{ position: "fixed" }}>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton variant="a" href="#">
          <ListItemIcon>
            <Bedtime />
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
