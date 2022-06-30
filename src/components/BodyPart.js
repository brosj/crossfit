import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/dumbbell_1.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #2f296a" : "",
        backgroundColor: "#FFF",
        // borderBottomLeftRadius: "20px",
        borderRadius: "20px",
        boxShadow: 3,
        width: "200px",
        height: "200px",
        cursor: "pointer",
        gap: "25px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
      
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "80px", height: "80px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="500"
        color="#13133c"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
