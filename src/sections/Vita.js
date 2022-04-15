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

function Vita() {
  return (
    <Paper
      id="vita"
      sx={{
        p: 2,
        m: 8,
      }}
      elevation={6}
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
          m: 4,
        }}
      >
        <Timeline
          position="alternate"
          sx={{
            "& p": {
              fontSize: "1.25rem",
            },
            "& h5": {
              color: "text.secondary",
            },
            "& .timeline-item .timeline-seperator .timeline-connector": {
              width: "3px",
              height: "50px",
            },
            "& .timeline-item .timeline-content-right": {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center",
            },
            "& .timeline-item .timeline-content-left": {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              textAlign: "center!important",
            },
            "& svg": {
              fontSize: 38,
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
              <TimelineDot>
                <School />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content-right">
              <Box>
                <Typography variant="h3" component="span">
                  Universität Bayreuth
                </Typography>
                <Typography variant="h5">Master of Science</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                    mx: 2,
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
              <TimelineDot color="primary">
                <Laptop />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>
            <TimelineContent className="timeline-content-left">
              <Box>
                <Typography variant="h3" component="span">
                  Werkstudent
                </Typography>
                <Typography variant="h5">Softwareentwicklung</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                    mx: 2,
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
              <TimelineDot color="primary" variant="outlined">
                <School />
              </TimelineDot>
              <TimelineConnector className="timeline-connector" />
            </TimelineSeparator>

            <TimelineContent className="timeline-content-right">
              <Box>
                <Typography variant="h3" component="span">
                  Universität Bayreuth
                </Typography>
                <Typography variant="h5">Bachelor of Science</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                    mx: 2,
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
              <Box>
                <Typography variant="h3" component="span">
                  Gymnasium Münchberg
                </Typography>
                <Typography variant="h5">Abitur</Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    my: 1,
                    mx: 2,
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
