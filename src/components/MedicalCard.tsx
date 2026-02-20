import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";

interface MedicalCardProps {
    image: string;
    title: string;
}

export default function MedicalCard({ image, title }: MedicalCardProps) {
    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: 450,
                minHeight: 380,
                borderRadius: "24px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
                bgcolor: "#fff",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "5px solid rgba(0,0,0,0.04)",

                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-5px)",
                    // boxShadow: "0px 12px 30px rgba(55, 55, 55, 0.12)"
                }
            }}
        >
            {/* Image Container */}
            <Box sx={{ p: 2, pb: 0 }}>
                {image ? (
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            height: 180,
                            borderRadius: "18px",
                            objectFit: "cover"
                        }}
                    />
                ) : (
                    <ImagePlaceholder height={180} borderRadius="18px" text="Card Image" />
                )}
            </Box>

            {/* Content */}
            <CardContent sx={{ pt: 2, px: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: 600,
                        // color: "#0B4A75",
                        lineHeight: 1.5,
                        mb: 3,
                        minHeight: "70px",
                        fontFamily: "Source Sans 3"
                    }}
                >
                    {title}
                </Typography>

                {/* Read More Row */}
                <Box sx={{ mt: "auto", display: "flex", alignItems: "center", pb: 2.5 }}>
                    <ReadMoreButton
                        color="#0B4A75"
                        borderColor="#F78D2F"
                        
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
