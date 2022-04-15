import React from "react";
import PropTypes from "prop-types";

const EmbeddedVideo = ({ embedId }) => (
  <div
    className="video-responsive"
    style={{
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      paddingBottom: "56.25%",
      marginBottom: -14,
      position: "relative",
      height: 0,
    }}
  >
    <iframe
      style={{
        margin: "auto",
        height: "95%",
        width: "95%",
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
