import { Box, Typography, Container } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

export default function WorkforceAndCSR() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      {/* OUR WORKFORCE SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 400, md: 500 },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Background Placeholder */}
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ImagePlaceholder borderRadius={0} text="" />
        </Box>

        {/* Content Overlay */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              maxWidth: "600px",
              ml: { xs: 0, md: "auto" }, // Push to right on desktop
              p: { xs: 3, md: 0 },
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#0B4A75",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: 32, md: 35 },
                letterSpacing: -1,
              }}
            >
              Our Workforce
            </Typography>
            <Typography
              sx={{
                color: "#37474f",
                mb: 5,
                lineHeight: 1.8,
                fontSize: { xs: 16, md: 20 },
                fontWeight: 500,
              }}
            >
              At Syngene, we believe that investing in our people is fundamental
              to achieving scientific excellence. Through comprehensive learning
              and development programs, we provide opportunities for
              skill-building, career growth, and leadership development.
            </Typography>
            <ReadMoreButton color="#0B4A75" />
          </Box>
        </Container>
      </Box>

      {/* CSR SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 450, md: 550 },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Restore original position (Content was on the Left)
          overflow: "hidden",
        }}
      >
        {/* Background Placeholder */}
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <ImagePlaceholder borderRadius={0} text="" />
        </Box>

        {/* Content Overlay */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              maxWidth: "600px",
              mr: { xs: 0, md: "auto" }, // Keep on left
              p: { xs: 3, md: 0 },
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#0B4A75",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: 32, md: 35 },
                letterSpacing: -1,
              }}
            >
              Corporate Social Responsibility
            </Typography>
            <Typography
              sx={{
                color: "#37474f",
                mb: 5,
                lineHeight: 1.8,
                fontSize: { xs: 16, md: 20 },
                fontWeight: 500,
              }}
            >
              We drive meaningful change through CSR initiatives in Healthcare,
              Science Education, Research and Scholarships, and Environmental
              Sustainability, empowering underserved communities in partnership
              with the Biocon Foundation.
            </Typography>
            <ReadMoreButton color="#0B4A75" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
