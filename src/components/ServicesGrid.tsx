import { Box, Typography } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

const services = [
    {
        title: "Research Services",
        desc: "Scientific rigor and cross-functional collaboration propelled the advancement of discovery programs across multiple therapeutic areas.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Development Services",
        desc: "Comprehensive development solutions from early stage to commercial scale, ensuring quality and regulatory compliance.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Manufacturing Services",
        desc: "State-of-the-art manufacturing facilities delivering high-quality clinical and commercial supplies across global markets.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Dedicated Centers",
        desc: "Collaborative research models providing long-term value through dedicated infrastructure and scientific expertise.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
    }
];

export default function ServicesGrid() {
    return (
        <Box sx={{ bgcolor: "#fff", width: "100%" }}>
            {services.map((service, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "relative",
                        width: "95%",
                        mx:'auto',
                        height: { xs: 400, md: 600 },
                        overflow: "hidden",
                        cursor: "pointer",
                        borderRadius: "20px",   
                        "&:hover img": {
                            transform: "scale(1.05)"
                        }
                    }}
                >
                    {/* Background Image / Placeholder */}
                    {service.image ? (
                        <Box
                            component="img"
                            src={service.image}
                            // alt={service.title}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 8s ease-out",
                                borderRadius:'20px'
                            }}
                        />
                    ) : (
                        <ImagePlaceholder borderRadius={0} />
                    )}

                    {/* Gradient Overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            px: { xs: 4, md: "10%" },
                            color: "#fff",
                            zIndex: 1
                        }}
                    >
                        <Box sx={{ maxWidth: "600px" }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: 32, md: 54 },
                                    lineHeight: 1.1,
                                    textTransform: "uppercase",
                                    letterSpacing: "-0.02em"
                                }}
                            >
                                {service.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: 16, md: 20 },
                                    lineHeight: 1.6,
                                    mb: 5,
                                    opacity: 0.9,
                                    fontWeight: 300
                                }}
                            >
                                {service.desc}
                            </Typography>

                            <ReadMoreButton color="#fff" />
                        </Box>
                    </Box>

                    {/* Bottom Progress/Indicator Line */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "6px",
                            bgcolor: "rgba(255,255,255,0.1)",
                            zIndex: 2
                        }}
                    >
                        {/* <Box
                            sx={{
                                width: `${(index + 1) / services.length * 100}%`,
                                height: "100%",
                                bgcolor: "#F28C28",
                                transition: "width 0.5s ease"
                            }}
                        /> */}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
