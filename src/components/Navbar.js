import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "78px", height: "64px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#13133c",
            borderBottom: "3px solid #2f296a",
          }}
        >
          <Typography fontSize="22px" fontWeight="400">
            Home
          </Typography>
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#13133c",
          }}
        >
          <Typography fontSize="22px" fontWeight="400">
            Exercises
          </Typography>
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
