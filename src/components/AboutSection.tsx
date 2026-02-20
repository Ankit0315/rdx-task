import { Box, Typography } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

const topBanner = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop";
const teamImage = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop";

export default function AboutSection() {
  return (
    <Box sx={{ width: "100%", mt: { xs: 6, md: 10 } }}>

      {/* TOP IMAGE */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 320, md: 420, lg: 520 },
          overflow: "hidden"
        }}
      >
        {topBanner ? (
          <Box
            component="img"
            src={topBanner}
            alt="Top Banner"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <ImagePlaceholder borderRadius={0} text="Top Banner Image" />
        )}
      </Box>

      {/* IMAGE + CARD SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 360, sm: 460, md: 560, lg: 660 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Background Image */}
        {teamImage ? (
          <Box
            component="img"
            src={teamImage}
            alt="Team"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <Box sx={{ position: "absolute", inset: 0 }}>
            <ImagePlaceholder borderRadius={0} text="Team Image" />
          </Box>
        )}

        {/* Overlay Card */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "92%", sm: "78%", md: "55%", lg: "50%" },
            backdropFilter: { xs: "blur(10px)", md: "blur(4px)" },
            //   background: "rgba(255,255,255,0.68)",
            // border: "1px solid rgba(0,90,150,0.35)",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.16)",
            borderRadius: 3,
            p: { xs: 2, sm: 2.5, md: 3.5 },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          {/* Label */}
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 13, md: 14 },
              color: "#4A4A4A",
              mb: 0.5
            }}
          >
            About Syngene
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 26, lg: 30 },
              fontWeight: 600,
              color: "#2D2D2D",
              lineHeight: 1.25,
              mb: { xs: 1.5, md: 2 }
            }}
          >
            Driving Scientific Innovation
            <br />
            with Service, Quality and Excellence
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: 13, sm: 14, md: 15 },
              color: "#2F5D82",
              mb: { xs: 2.5, md: 3 },
              lineHeight: 1.55,
              maxWidth: 520,
              mx: { xs: "auto", md: 0 }
            }}
          >
            We combine cutting-edge science with a deep understanding of
            customer needs to drive innovation. Our commitment to service,
            quality and excellence is embedded in every aspect of our
            operations, fostering trust, confidentiality, and seamless
            collaboration.
          </Typography>

          <ReadMoreButton color="#0B4A75" />
        </Box>
      </Box>

    </Box>
  );
}
