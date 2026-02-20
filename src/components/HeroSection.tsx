import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const heroImage = "/hero-art.png";

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "calc(100vh - 60px)", md: "calc(100vh - 74px)" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: "#fff",
      }}
    >
      {/* Inner Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
          },

          alignItems: "center",
          gap: { xs: 4, md: 2 },
          py: { xs: 8, md: 0 },

          "@media (orientation: landscape) and (max-height: 600px)": {
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            pt: 10,
          },
        }}
      >
        {/* LEFT TEXT COLUMN */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 350 },
            textAlign: { xs: "center", sm: "left" },

            alignSelf: { sm: "center" },
          }}
        >
          <Typography
            sx={{
              color: "#F28C00",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: { xs: 24, sm: 30, md: 38 },
            }}
          >
            INNOVATING
          </Typography>

          <Typography
            sx={{
              color: "#0B4A75",
              fontWeight: 400,
              lineHeight: 1.1,
              fontSize: { xs: 44, sm: 60, md: 78 },
            }}
          >
            REACH
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#555",
              fontSize: { xs: 14, sm: 15, md: 16 },
              maxWidth: 260,
              mx: { xs: "auto", sm: 0 },
            }}
          >
            Researching New Paths.
            <br />
            Delivering Breakthroughs.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            mt={{ xs: 3, md: 4 }}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems="center"
          >
            <ReadMoreButton
              text="Read More"
              color="#0B4A75"
              sx={{ borderLeftColor: "#F28C00" }}
            />

            <ReadMoreButton
              text="Watch the Video"
              color="#0B4A75"
              sx={{ borderLeftColor: "#F28C00" }}
            />
          </Stack>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            width: "100%",
            maxWidth: {
              xs: 220,
              sm: 260,
              md: 420,
              lg: 500,
            },

            height: {
              xs: 220,
              sm: 260,
              md: 350,
              lg: 400,
            },

            mx: "auto",
            display: "block",
            aspectRatio: "1/1",

            "@media (orientation: landscape) and (max-height: 600px)": {
              maxWidth: 240,
            },
          }}
        >
          {!imageError ? (
            <Box
              component="img"
              src={heroImage}
              alt="Hero Illustration"
              onError={() => setImageError(true)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <ImagePlaceholder text="Hero Overview Art" />
          )}
        </Box>
      </Box>

      {/* SCROLL INDICATOR */}
      <Box
        onClick={() => {
          const nextSection = document.getElementById("glance-stats");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        }}
        sx={{
          position: "absolute",
          bottom: { xs: 15, md: 25 },
          left: "50%",
          transform: "translateX(-50%)",
          color: "#0B4A75",
          border: "2px solid #F28C00",
          borderRadius: "50%",
          width: { xs: 36, md: 42 },
          height: { xs: 36, md: 42 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "bounce 2s infinite",
          cursor: "pointer",
          "@media (max-height: 450px)": {
            display: "none",
          },
        }}
      >
        <KeyboardDoubleArrowDownIcon fontSize="small" />

        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: translate(-50%, 0); }
              50% { transform: translate(-50%, 8px); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
}