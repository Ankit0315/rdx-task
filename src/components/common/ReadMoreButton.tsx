import { Link, Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

interface ReadMoreButtonProps {
  text?: string;
  href?: string;
  sx?: SxProps<Theme>;
  color?: string;
  borderColor?: string;
  startIcon?: ReactNode;
}

export default function ReadMoreButton({
  text = "Read More",
  href = "#",
  sx = {},
  color = "#fff",
  borderColor = "#F28C28",
  startIcon,
}: ReadMoreButtonProps) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        color: color,
        fontWeight: 700,
        borderLeft: `3px solid ${borderColor}`,
        pl: 1.5,
        pr: 1.5,
        py: 0.5,
        fontSize: { xs: 12, sm: 14, md: 16 },
        transition: "all .25s ease",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: borderColor,
          color: "#fff",
          borderLeftColor: borderColor,
          transform: "translateX(5px)",
        },

        ...sx,
      }}
    >
      {startIcon && (
        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
          {startIcon}
        </Box>
      )}
      {text}
    </Link>
  );
}
