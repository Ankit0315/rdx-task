import { Box, Typography, Grid, Container } from "@mui/material";
import { useState } from "react";
import ReadMoreButton from "./common/ReadMoreButton";

const data = [
    {
        label: "Strategic Priorities",
        title: "Research Services",
        desc: "We provide integrated scientific solutions that accelerate innovation across the drug development lifecycle."
    },
    {
        label: "Our Value Creation Model",
        title: "Our Business",
        desc: "Our business model focuses on long-term value creation through innovation, sustainability, and scientific excellence."
    }
];

export default function StrategicSection() {
    const [active, setActive] = useState<number | null>(null);

  const primaryColor = "#004172";
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 8, md: 12 },
                background:
                    "linear-gradient(91deg,#F78D2F 0%,#A0609E 52%,#004172 100%)",
                color: "#fff",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 8 }}>
                    {data.map((item, i) => {
                        const open = active === i;

                        return (
                            <Grid size={12} key={i}>
                                <Box
                                    onMouseEnter={() => setActive(i)}
                                    onMouseLeave={() => setActive(null)}
                                    sx={{
                                        cursor: "pointer"
                                    }}
                                >
                                    {/* Label */}
                                    <Typography
                                        sx={{
                                            display: "inline-block",
                                            background: "#fff",
                                            color: "#333",
                                            px: 2,
                                            py: 0.5,
                                            fontSize: 14,
                                            mb: 2,
                                            fontWeight: 600,
                                            borderRadius: "4px"
                                        }}
                                    >
                                        {item.label}
                                    </Typography>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 32, sm: 44, md: 52 },
                                            fontWeight: 300,
                                            mb: 2,
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    {/* Divider */}
                                    <Box
                                        sx={{
                                            height: "1px",
                                            background: "rgba(255,255,255,0.5)",
                                            mb: 2,
                                            width: "100%"
                                        }}
                                    />

                                    {/* Description reveal */}
                                    <Box
                                        sx={{
                                            maxHeight: open ? 300 : 0,
                                            opacity: open ? 1 : 0,
                                            overflow: "hidden",
                                            transition: "all .5s ease-in-out"
                                        }}
                                    >
                                        <Typography sx={{ mb: 3, maxWidth: 800, fontSize: 18, lineHeight: 1.6 }}>
                                            {item.desc}
                                        </Typography>

                                        <ReadMoreButton borderColor={primaryColor} />
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
