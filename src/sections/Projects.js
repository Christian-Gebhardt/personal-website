import React from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Constants from "../Constants";
import EmbeddedVideo from "../components/EmbeddedVideo";

function Projects() {
  const data = [
    {
      title: "ERP-System",
      description: Constants.LOREM_IPSUM,
      technologies: ["Java Spring", "React", "MySQL"],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
    {
      title: "Evaluationsframework Machine Learning",
      description: Constants.LOREM_IPSUM,
      technologies: ["Flask", "React", "Scikit-Learn", "Scipy"],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
    {
      title: "System für Literaturverwaltung",
      description: Constants.LOREM_IPSUM,
      technologies: ["Java Spring", "React", "MySQL"],
      media: "eqmKMensZ5U",
    },
    {
      title: "Naiver Trading Bot",
      description: Constants.LOREM_IPSUM,
      technologies: ["Python", "Binance API", "Slack Messaging"],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
  ];
  return (
    <Paper
      id="projects"
      sx={{
        p: 2,
        m: 8,
      }}
      elevation={6}
    >
      <Box>
        <Typography
          id="projects"
          variant="h1"
          sx={{
            textAlign: "center",
            m: 2,
          }}
        >
          Projekte
        </Typography>
      </Box>
      <Box
        sx={{
          m: 4,
          "&>*:nth-child(2n)": {
            "& .project-item": {
              flexDirection: "row-reverse",
            },
          },
        }}
      >
        {data.map((element, i) => (
          <Box
            className="project-box"
            sx={{
              my: 12,
            }}
            key={i}
          >
            <Grid
              className="project-item"
              container
              sx={{
                alignItems: "center",
                verticalAlign: "bottom",
              }}
            >
              <Grid item xs={6}>
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      textAlign: "center",
                      m: 4,
                      wordWrap: "break-word",
                    }}
                  >
                    {element.title}
                  </Typography>
                  <Divider variant="middle" />
                  <Typography
                    sx={{
                      m: 4,
                      fontSize: "1.2rem",
                    }}
                  >
                    {element.description}
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                      mx: 4,
                      fontSize: "1.25rem",
                      fontWeight: "medium",
                    }}
                  >
                    {"Verwendete Technologien: " +
                      element.technologies.join(", ")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    mx: 4,
                  }}
                >
                  <EmbeddedVideo embedId={element.media} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Link zu Git Repository:{" "}
                  </Typography>
                  <a
                    target="_blank"
                    href={element.link}
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="github"
                      sx={{
                        mx: 1.5,
                        "& svg": {
                          fontSize: 32,
                        },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default Projects;
