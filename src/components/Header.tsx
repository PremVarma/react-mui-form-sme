import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Onboarding
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Github"
          sx={{ ml: "auto" }}
          size="large"
        >
          {/* <Link
            title="Github"
            component="a"
            rel="noopener noreferrer"
            target="_blank"
            href=""
            color="inherit"
          > */}
          <Typography variant="h6" color="inherit" noWrap>
            Logout
          </Typography>
          {/* </Link> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
