import { Box, Typography } from "@mui/material";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

interface ImagePlaceholderProps {
    height?: string | number | object;
    width?: string | number | object;
    borderRadius?: string | number;
    text?: string;
}

export default function ImagePlaceholder({
    height = "100%",
    width = "100%",
    borderRadius = 4,
    text = "IMAGE PLACEHOLDER"
}: ImagePlaceholderProps) {
    return (
        <Box
            sx={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed #bcccdc",
                color: "#627d98",
                gap: 1.5,
                p: 2,
                textAlign: "center"
            }}
        >
            <PhotoSizeSelectActualIcon sx={{ fontSize: 48, opacity: 0.5 }} />
            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 1,
                    opacity: 0.7,
                    fontFamily: "Source Sans 3"
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}
