import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { urlFor } from "../client";

function ImageSlideshow({ imageurls }) {
  const theme = useTheme();

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 4,
        "& .slick-slider": {
          display: "table!important",
          tableLayout: "fixed !important",
          width: "80%!important",
        },
        "& .slick-dots": {
          mt: 0,
        },
        "& .slick-dots li button:before": {
          fontSize: "0.65rem",
          color: theme.palette.primary.main,
        },
        "& .slick-dots li.slick-active button:before": {
          color: theme.palette.primary.main,
        },
        "& .slick-prev:before, .slick-next:before": {
          color: theme.palette.secondary.main,
        },
      }}
    >
      <Slider {...settings}>
        {imageurls.map((url, i) => (
          <div key={i}>
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                height: "auto",
              }}
              src={urlFor(url)}
              alt={"image-carousel"}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageSlideshow;
