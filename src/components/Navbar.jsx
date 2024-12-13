import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Badge, InputBase, styled } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "none",
  gap: "20px",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "none",
  gap: "10px",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Exomon
        </Typography>
        <CoronavirusIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <InputBase placeholder="search..." />
        </Searchbar>
        <Icons position="relative">
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Notifications color="#fff" />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <MailIcon color="#fff" />
          </Badge>
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ cursor: "pointer", width: "30px", height: "30px" }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ cursor: "pointer", width: "30px", height: "30px" }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
          <Typography>John</Typography>
        </UserBox>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
