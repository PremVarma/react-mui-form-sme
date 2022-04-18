import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"2022 © "}
      <Link
        color="inherit"
        href="https://github.com/awran5/react-material-ui-step-form-ts"
      >
        SME Onboarding
      </Link>
    </Typography>
  );
}
