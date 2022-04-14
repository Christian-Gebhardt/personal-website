import React from "react";
import PropTypes from "prop-types";

const EmbeddedVideo = ({ embedId }) => (
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
      width="853"
      height="480"
      style={{
        margin: "auto",
        height: "90%",
        width: "90%",
        position: "absolute",
      }}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

EmbeddedVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default EmbeddedVideo;
