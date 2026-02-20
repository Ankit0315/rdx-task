import { Box, Grid, Typography } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

interface ChairpersonSectionProps {
  image?: string;
  title?: string;
  message: string;
  name: string;
  reverse?: boolean;
}

export default function ChairpersonSection({
  image,
  title = "Chairperson",
  message,
  name,
  reverse = false,
}: ChairpersonSectionProps) {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}>
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Image Column */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: { xs: "280px", sm: "340px", md: "445px" },
              height: { xs: "280px", sm: "340px", md: "446px" },
              position: "relative"
            }}
          >
            {image ? (
              <Box
                component="img"
                src={image}
                alt={name}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  objectFit: "cover",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            ) : (
              <ImagePlaceholder
                width="100%"
                height="100%"
                text={`${name} Photo`}
              />
            )}
          </Box>
        </Grid>

        {/* Content Column */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              background: "#003A5E",
              color: "#fff",
              px: { xs: 2.5, sm: 5, md: 10 },
              py: { xs: 1, sm: 5, md: 6 },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <Typography
              sx={{
                fontFamily: "Source Sans 3",
                fontSize: { xs: 20, sm: 26, md: 36 },
                lineHeight: 1.2,
                fontWeight: 300,
                mb: { xs: 3, md: 4 },
              }}
            >
              Message from our{" "}
             {title.includes("Chairperson") ? "Chairperson" : "" } <br />
              <Box component="span" sx={{ fontWeight: 700 }}>
                {title}
              </Box>
            </Typography>

            <Box
              sx={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderLeft: "none",
                p: { xs: 2.5, sm: 3.5, md: 5 },
                pl: { xs: 2, md: 0 }, 
                mb: { xs: 3, md: 5 },
                position: "relative",
              }}
            >
              {/* Gradient Circle Icon */}
              <Box
                sx={{
                  width: { xs: 28, md: 38 },
                  height: { xs: 28, md: 38 },
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#ff7a18,#af002d 40%,#319197)",
                  position: "absolute",
                  top: { xs: -14, md: -19 },
                  left: { xs: -14, md: -19 },
                }}
              />

              {/* Small Dot Icon */}
              <Box
                sx={{
                  width: { xs: 6, md: 10 },
                  height: { xs: 6, md: 10 },
                  borderRadius: "50%",
                  background: "#fff",
                  position: "absolute",
                  bottom: { xs: -3, md: -5 },
                  left: { xs: -3, md: -5 },
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Source Sans 3",
                  fontSize: { xs: 12, sm: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.92)",
                  textAlign: "left"
                }}
              >
                {message}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 22, md: 26 },
                  fontWeight: 700,
                  color: "#F59E0B",
                  mb: 1.5,
                }}
              >
                {name}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                <ReadMoreButton borderColor="#F59E0B" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
