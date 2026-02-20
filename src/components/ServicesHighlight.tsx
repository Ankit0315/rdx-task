import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ImagePlaceholder from "./common/ImagePlaceholder";

export default function ServicesHighlight() {
  const [imageError, setImageError] = useState(false);
  const serviceImg = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 8, sm: 10, md: 14 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        // bgcolor: "#f5f5f5",
      }}
    >
      {/* Background Marquee Text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "200%",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          transform: "translateY(-50%)",
          display: "flex",
          animation: "marquee 20s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0) translateY(-50%)" },
            "100%": { transform: "translateX(-50%) translateY(-50%)" },
          },
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Typography
            key={i}
            sx={{
              fontSize: {
                xs: "18px",
                sm: "28px",
                md: "42px",
                lg: "52px",
              },
              fontWeight: 600,
              color: "#000",
              //   opacity: 0.12,
              mr: { xs: 3, sm: 4, md: 6 },
            }}
          >
            Our Services
          </Typography>
        ))}
      </Box>

      {/* Center Image Card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "85%", sm: "70%", md: "420px", lg: "540px" },
          aspectRatio: "9/5",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {!imageError ? (
          <Box
            component="img"
            src={serviceImg}
            alt="Service"
            onError={() => setImageError(true)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <ImagePlaceholder text="Service Feature" height="100%" borderRadius={0} />
        )}
      </Box>
    </Box>
  );
}
