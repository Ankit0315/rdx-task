import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";

const socials = [
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <YouTubeIcon />, label: "YouTube" },
    { icon: <LinkedInIcon />, label: "LinkedIn" },
    { icon: <CloseIcon />, label: "X" }
];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                backgroundColor: "#084B7D",
                py: { xs: 4, sm: 1 },
                px: { xs: 2, md: 5 },
                // mt: "auto",
            
            }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 0 }}
                alignItems="center"
                justifyContent="space-between"
                textAlign={{ xs: "center", sm: "left" }}
                sx={{ maxWidth: '1300px', margin: '0 auto' }}
            >
                {/* Left */}
                <Typography
                    sx={{
                        fontSize: { xs: 12, sm: 14 },
                        color: "#fff",
                        opacity: 0.9
                    }}
                >
                    © 2024 Syngene International. All Rights Reserved
                </Typography>

                {/* Icons */}
                <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" alignItems='center   '>
                    {socials.map((item) => (
                        <IconButton
                            key={item.label}
                            size="small"
                            aria-label={item.label}
                            sx={{
                                color: "#fff",
                                transition: "transform .2s ease, background .2s ease",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.15)",
                                    transform: "translateY(-3px)"
                                }
                            }}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                </Stack>

                {/* Right */}
                <Typography
                    sx={{
                        fontSize: { xs: 12, sm: 14 },
                        color: "#fff",
                        fontWeight: 500,
                        opacity: 0.9,
                        textAlign: { xs: "center", sm: "right" }
                    }}
                >
                    Design & Developed by{" "}
                    <Box
                        component="span"
                        sx={{
                            // fontWeight: 700,
                            cursor: "pointer",
                          
                        }}
                    >
                        RDX Digital
                    </Box>
                </Typography>
            </Stack>
        </Box>
    );
}
