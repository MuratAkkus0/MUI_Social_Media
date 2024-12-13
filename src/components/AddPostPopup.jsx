import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "20%",
  bgcolor: "background.paper",
  borderRadius: ".5rem",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function AddPostPopup({ isPopupOpen, setIsPopupOpen }) {
  const open = isPopupOpen;
  const handleClose = () => setIsPopupOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" fontWeight={300}>
            Add Post
          </Typography>
          <TextField
            multiline
            sx={{ width: "100%" }}
            rows={7}
            placeholder="What is your ideas?"
            variant="standard"
          />
          <Button
            onClick={handleClose}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<Add />}
          >
            Create Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
