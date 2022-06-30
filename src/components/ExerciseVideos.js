import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="50px">
        Watch{" "}
        <span style={{ color: "#2f296a" }}>
          {name}
        </span>{" "}
        exercise videos on YouTube
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, columnGap: { lg: "120px", xs: "0" }, rowGap: { lg: "50px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography 
                variant="h5" 
                // color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography variant="h6" color='#000'>{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
