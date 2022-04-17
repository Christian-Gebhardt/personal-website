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
import Constants from "../Constants";
import { theme } from "../Theme";

function Vita() {
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
              fontSize: { xs: "0.8rem", md: "1rem", lg: "1.25rem" },
            },
            "& h3": {
              fontSize: { xs: "0.8rem", md: "1rem", lg: "1.25rem" },
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
          <TimelineItem className="timeline-item">
            <TimelineOppositeContent
              className="timeline-opposite-content"
              sx={{ m: "auto 0" }}
              align="right"
              color="text.secondary"
            >
              <Typography>2021-2023</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="timeline-seperator">
              <TimelineConnector className="timeline-connector" />
              <TimelineDot color="primary">
                <School />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content-right">
              <Box sx={{ ml: 4, mr: 2 }}>
                <Typography variant="h3" component="span">
                  Universität Bayreuth
                </Typography>
                <Typography variant="h5">Master of Science</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                  }}
                >
                  {Constants.LOREM_IPSUM_SMALL}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-item">
            <TimelineOppositeContent
              className="timeline-opposite-content"
              sx={{ m: "auto 0" }}
              color="text.secondary"
            >
              <Typography>2021-2022</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="timeline-seperator">
              <TimelineConnector className="timeline-connector" />
              <TimelineDot color="secondary">
                <Laptop />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content-left">
              <Box sx={{ ml: 4, mr: 2 }}>
                <Typography variant="h3" component="span">
                  Werkstudent
                </Typography>
                <Typography variant="h5">Softwareentwicklung</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                  }}
                >
                  {Constants.LOREM_IPSUM_SMALL}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-item">
            <TimelineOppositeContent
              className="timeline-opposite-content"
              sx={{ m: "auto 0" }}
              color="text.secondary"
            >
              <Typography>2017-2021</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="timeline-seperator">
              <TimelineConnector className="timeline-connector" />
              <TimelineDot color="primary">
                <School />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>

            <TimelineContent className="timeline-content-right">
              <Box sx={{ ml: 4, mr: 2 }}>
                <Typography variant="h3" component="span">
                  Universität Bayreuth
                </Typography>
                <Typography variant="h5">Bachelor of Science</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                  }}
                >
                  {Constants.LOREM_IPSUM_SMALL}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-item">
            <TimelineOppositeContent
              className="timeline-opposite-content"
              sx={{ m: "auto 0" }}
              color="text.secondary"
            >
              <Typography>2009-2017</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator className="timeline-seperator">
              <TimelineConnector className="timeline-connector" />
              <TimelineDot color="secondary">
                <School />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content-left">
              <Box sx={{ ml: 4, mr: 2 }}>
                <Typography variant="h3" component="span">
                  Gymnasium Münchberg
                </Typography>
                <Typography variant="h5">Abitur</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                  }}
                >
                  {Constants.LOREM_IPSUM_SMALL}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Paper>
  );
}

export default Vita;
