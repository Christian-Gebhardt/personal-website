import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { Laptop, School } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineSeparator,
  TimelineOppositeContent,
} from "@mui/lab";

function Vita({ vita }) {
  return (
    <Paper
      id="vita"
      elevation={6}
      sx={{
        mx: 4,
        my: 6,
        p: 2,
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        component="div"
        sx={{
          textAlign: "center",
          m: 2,
        }}
      >
        C.V.
      </Typography>
      <Box
        sx={{
          m: 1.5,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Timeline
          position="right"
          sx={{
            alignContent: "flex-start",
            "& p": {
              fontSize: { xs: "0.75rem", md: "1rem", lg: "1.25rem" },
            },
            "& h5": {
              fontSize: { xs: "0.8rem", md: "1rem", lg: "1.25rem" },
              color: "text.secondary",
            },
            "& .MuiTimelineOppositeContent-root": {
              flex: 0.1,
            },
            "& .timeline-item .timeline-seperator .timeline-connector": {
              width: 3,
              height: { xs: 25, sm: 40, lg: 50 },
            },
            "& svg": {
              fontSize: { xs: "2.25rem", lg: "2.75rem" },
            },
          }}
        >
          {vita ? (
            vita.map((item, i) => (
              <TimelineItem className="timeline-item" key={i}>
                <TimelineOppositeContent
                  className="timeline-opposite-content"
                  sx={{ m: "auto 0" }}
                  align="right"
                  color="text.secondary"
                >
                  <Typography>{item.time}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator className="timeline-seperator">
                  <TimelineConnector className="timeline-connector" />
                  <TimelineDot color={i % 2 === 0 ? "primary" : "secondary"}>
                    {item.IconType === "school" ? <School /> : <Laptop />}
                  </TimelineDot>
                  <TimelineConnector className="timeline-connector" />
                </TimelineSeparator>
                <TimelineContent className="timeline-content-right">
                  <Box sx={{ ml: 4, mr: 2 }}>
                    <Typography variant="h3" component="span">
                      {item.name}
                    </Typography>
                    <Typography variant="h5">{item.subtitle}</Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        my: 1,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))
          ) : (
            <Box></Box>
          )}
        </Timeline>
      </Box>
    </Paper>
  );
}

export default Vita;
