import { Box, Typography, Grid, Container } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";

const stats = [
    { value: "30+ Years", label: "of scientific expertise" },
    { value: "400+", label: "Patents held by customers" },
    { value: "4", label: "Campuses" },
    { value: "~400", label: "Active customers" },

    { value: "3,642 Cr", label: "(430 Mn USD) Revenue from operations in FY25" },
    { value: "475 Cr", label: "Profit After Tax in FY25#" },
    { value: "2.5+ Mn sq. ft.", label: "of world-class R&D and manufacturing" },
    { value: "5,641", label: "Scientists" },

    { value: "8,235", label: "Total workforce (as of March 31, 2025)" },
    { value: "95%", label: "Total hazardous and non-hazardous waste recycled" },
    { value: "92%", label: "Power sourced from renewable energy" },
];

export default function GlanceStats() {
    return (
        <Box id="glance-stats" sx={{ width: "100%", py: { xs: 6, md: 10 }, px: 2 }}>

            {/* Title */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: 24, sm: 30, md: 36 },
                    fontWeight: 600,
                    mb: 6,
                    color: "#3A3A3A"
                }}
            >
                Syngene at a Glance
            </Typography>

            {/* Grid */}
            <Container maxWidth={false} sx={{ maxWidth: "1350px", mx: "auto" }}>
                <Grid container>
                    {stats.map((item, i) => (
                        <Grid
                            key={i}
                            size={{ xs: 12, sm: 6, md: 3 }}
                            sx={{
                                p: 4,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "rgba(0, 65, 114, 0.03)",
                                    transform: "translateY(-4px)"
                                },
                                borderRight: {
                                    sm: (i + 1) % 2 !== 0 ? "1px dashed #CFCFCF" : "none",
                                    md: (i + 1) % 4 !== 0 ? "1px dashed #CFCFCF" : "none"
                                },
                                borderBottom: {
                                    xs: i !== stats.length - 1 ? "1px dashed #CFCFCF" : "none",
                                    sm: i < 10 ? "1px dashed #CFCFCF" : "none",
                                    md: i < 8 ? "1px dashed #CFCFCF" : "none"
                                }
                            }}
                        >
                            {/* NUMBER */}
                            <Typography
                                sx={{
                                    fontSize: { xs: 22, sm: 28, md: 34 },
                                    fontWeight: 400,
                                    background:
                                        "linear-gradient(91deg,#F78D2F 0%,#A0609E 52%,#004172 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    mb: 1.5,
                                    lineHeight: 1
                                }}
                            >
                                {item.value}
                            </Typography>

                            {/* LABEL */}
                            <Typography
                                sx={{
                                    fontFamily: "Source Sans 3, sans-serif",
                                    fontSize: 16,
                                    lineHeight: "22px",
                                    color: "#555",
                                    fontWeight: 501
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* Read More */}
                <Box sx={{ mt: 4, ml: 4 }}>
                    <ReadMoreButton color="#0B4A75" />
                </Box>
            </Container>
        </Box>
    );
}
