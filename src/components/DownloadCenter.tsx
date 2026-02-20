import { Box, Typography, Grid, Link, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const downloads = [
  "Board Report",
  "Standalone Financial Statements",
  "Corporate Governance Report",
  "Consolidated Financial Statements",
  "Business Responsibility and Sustainability Report",
  "Glossary",
  "Management Discussion and Analysis",
  "AGM Notice",
  "Annual Report 2024",
];

export default function DownloadCenter() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: 2,
        // mt: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1350px", mx: "auto" }}>
        {/* Title */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 26, sm: 32 },
            fontWeight: 600,
            color: "#0B4A75",
            mb: 4,
          }}
        >
          Download Center
        </Typography>

        {/* Card Container */}
        <Box
          sx={{
            background: "#E8F3FB",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: 1,
            px: { xs: 2, sm: 4 },
            py: { xs: 2, sm: 3 },
          }}
        >
          <Grid container spacing={4}>
            {downloads.map((item, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  borderBottom: {
                    xs:
                      i !== downloads.length - 1 ? "1px solid #C4D7E2" : "none",
                    sm:
                      i <
                      downloads.length - (downloads.length % 2 === 0 ? 2 : 1)
                        ? "1px solid #C4D7E2"
                        : "none",
                    md:
                      i <
                      downloads.length -
                        (downloads.length % 3 === 0 ? 3 : downloads.length % 3)
                        ? "1px solid #C4D7E2"
                        : "none",
                  },
                  pb: 2,
                  pt: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 2, height: "100%" }}>
                  {/* Left Blue Bar */}
                  <Box
                    sx={{
                      width: 4,
                      background: "#0B4A75",
                      borderRadius: 1,
                      alignSelf: "stretch",
                    }}
                  />

                  {/* Text */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 16,
                        color: "#4A4A4A",
                        mb: 0.5,
                        fontWeight: 500,
                        maxWidth: 180,
                        "&:hover": {
                          color: "#F78D2F",
                          transition: "all 0.2s ease",
                          scale: 1.1,
                          fontWeight: 600,
                        },
                      }}
                    >
                      {item}
                    </Typography>

                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: 14,
                        color: "#0B4A75",
                        fontWeight: 600,
                        gap: 0.5,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          opacity: 0.7,
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Download{" "}
                      <ArrowForwardIcon
                        sx={{ fontSize: 16, color: "#F78D2F" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          mt={5}
          fontWeight={500}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            cursor: "pointer",
            color: "#0B4A75",
            fontSize: { xs: 14, md: 25 },
            fontWeight: 700,
            gap: 0.5,
            // cursor: "pointer",
            // transition: "all 0.2s ease",
            mb: -5,
          }}
        >
          Back to Top
        </Box>
      </Container>
    </Box>
  );
}
