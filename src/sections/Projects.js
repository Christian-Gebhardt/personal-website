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
      technologies: [
        "Java",
        "Spring",
        "JavaScript",
        "HTML & CSS",
        "React",
        "Bootstrap",
        "MySQL",
      ],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
    {
      title: "Evaluationsframework Machine Learning",
      description: Constants.LOREM_IPSUM,
      technologies: [
        "Python",
        "Flask",
        "JavaScript",
        "HTML & CSS",
        "React",
        "MaterialUI",
        "Scikit-Learn",
        "Scipy",
      ],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
    {
      title: "System für Literaturverwaltung",
      description: Constants.LOREM_IPSUM,
      technologies: [
        "Java",
        "Spring",
        "JavaScript",
        "HTML & CSS",
        "React",
        "Bootstrap",
        "MySQL",
      ],
      media: "eqmKMensZ5U",
    },
    {
      title: "Naiver Trading Bot",
      description: Constants.LOREM_IPSUM,
      technologies: ["Python", "Binance API", "Slack Bot"],
      link: "https://github.com/stars/Christian-Gebhardt/lists/klassifikatoren-evaluation",
      media: "eqmKMensZ5U",
    },
  ];
  return (
    <Paper
      id="projects"
      elevation={6}
      sx={{
        mx: 4,
        my: 6,
        p: 2,
      }}
    >
      <Box>
        <Typography
          id="projects"
          variant="h1"
          sx={{
            textAlign: "center",
            m: 2,
            mb: 6,
          }}
        >
          Projekte
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          m: 2,
          "&>*:nth-of-type(2n)": {
            "& .project": {
              flexDirection: { lg: "row-reverse" },
            },
          },
        }}
      >
        {data.map((element, i) => (
          <Box className="project-box" key={i}>
            <Grid
              className="project"
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "bottom",
              }}
            >
              <Grid item md={12} lg={6}>
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
                    }}
                  >
                    {element.description}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 4,
                      mx: 4,
                      fontSize: { sx: "1rem", lg: "1.25rem" },
                      fontWeight: "medium",
                    }}
                  >
                    {"Verwendete Technologien: " +
                      element.technologies.join(", ")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={8} justifyContent="center">
                <Box
                  sx={{
                    my: 2,
                    mx: 4,
                  }}
                >
                  <EmbeddedVideo embedId={element.media} />
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
                        fontSize: { sx: "1.1rem", lg: "1.35rem" },
                        textAlign: "center",
                      }}
                    >
                      Link zu Git Repository:
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
                            fontSize: { sx: "1.5rem", lg: "2.25rem" },
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    </a>
                  </Box>
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
