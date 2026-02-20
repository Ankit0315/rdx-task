import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
  Drawer,
  List
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        position: "relative",
        height: 74,
        background: "#084B7D",
        boxShadow: "0px 3px 6px #00000029",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 5 },
        maxWidth: "1300px",
        margin: "0 auto"
      }}
    >
      {/* Left Logo */}
      <Typography
        variant="h5"
        sx={{
          color: "#fff", fontStyle: "italic", fontWeight: 600,
          fontSize: { xs: 15, sm: 25 }
        }}
      >
        Syngene
      </Typography>

      {/* Center Title */}
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          letterSpacing: 1,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: { xs: 13, sm: 16 }
        }}
      >
        ANNUAL REPORT 2025
      </Typography>

      {/* Right Section */}
      {isMobile ? (
        <>
          <IconButton onClick={handleOpen} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={handleClose}
            hideBackdrop
            PaperProps={{
              sx: { width: "60%", background: "#084B7D", color: "#fff" }
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              <MenuItem onClick={handleClose} sx={{ py: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Download</MenuItem>
              <MenuItem onClick={handleClose} sx={{ py: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Menu Item 1</MenuItem>
              <MenuItem onClick={handleClose} sx={{ py: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Menu Item 2</MenuItem>
            </List>
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ color: "#fff" }}>
            <DownloadIcon />
          </IconButton>
          <Divider orientation="vertical" sx={{ height: 20, bgcolor: "#fff" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              "&:hover": { opacity: 0.8 }
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                lineHeight: 1.1,
                fontSize: 14,
                fontWeight: 700
              }}
            >
              ME
              <br />
              NU
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
