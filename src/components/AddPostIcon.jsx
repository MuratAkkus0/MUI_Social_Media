import { Add } from "@mui/icons-material";
import { Fab, styled, Tooltip } from "@mui/material";
import React from "react";

function AddPostIcon({ onClick }) {
  const StyledTooltip = styled(Tooltip)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "90%",
    left: "5%",
  });
  return (
    <>
      <StyledTooltip
        title="Delete"
        onClick={onClick}
        sx={{ width: { xs: "30px" }, height: { xs: "30px" } }}
      >
        <Fab color="primary">
          <Add
            sx={{
              fontSize: { xs: "1rem" },
            }}
          />
        </Fab>
      </StyledTooltip>
    </>
  );
}

export default AddPostIcon;
