import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const EmbeddedVideo = ({ url }) => (
  <Box
    sx={{
      mx: 4,
    }}
  >
    <div
      className="video-responsive"
      style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0,
      }}
    >
      <iframe
        width={853}
        height={480}
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{
          left: "5%",
          top: "5%",
          height: "90%",
          width: "90%",
          position: "absolute",
        }}
      />
    </div>
  </Box>
);

EmbeddedVideo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default EmbeddedVideo;
