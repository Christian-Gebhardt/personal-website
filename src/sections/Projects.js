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
import EmbeddedVideo from "../components/EmbeddedVideo";
import ImageSlideshow from "../components/ImageSlideshow";
import { useTheme } from "@emotion/react";

function Projects({ projects }) {
  const theme = useTheme();

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
        {projects ? (
          projects.map((element, i) => (
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
                      {element.text}
                    </Typography>
                    <Typography
                      sx={{
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
                <Grid
                  item
                  lg={6}
                  md={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "90%",
                    gap: 2,
                    my: 4,
                  }}
                >
                  {element.videourl ? (
                    <EmbeddedVideo url={element.videourl} />
                  ) : element.imageurls ? (
                    <ImageSlideshow imageurls={element.imageurls} />
                  ) : (
                    <div></div>
                  )}
                  {element.githuburl ? (
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
                        href={element.githuburl}
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
                  ) : (
                    <Box></Box>
                  )}
                </Grid>
              </Grid>
              {i < projects.length - 1 ? (
                <Divider
                  variant="middle"
                  sx={{
                    mt: 4,
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.main,
                    borderWidth: { sx: 0.35, md: 0.65, lg: 0.8 },
                  }}
                />
              ) : (
                <div></div>
              )}
            </Box>
          ))
        ) : (
          <div></div>
        )}
      </Box>
    </Paper>
  );
}

export default Projects;
