import { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ReadMoreButton from "./common/ReadMoreButton";
import ImagePlaceholder from "./common/ImagePlaceholder";
import { rawItems } from "../config/rawItems.config";

const items = [...rawItems].reverse();

export default function ExecutionAccordion() {
  const [activeId, setActiveId] = useState("01");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "auto",
        ml: { xs: 0, sm: 0, md: 5, lg: 15 },
        height: isMobile ? "auto" : 650,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
        mb: 8,
        bgcolor: "#000",
      }}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <Box
            key={item.id}
            onClick={() => setActiveId(item.id)}
            component={motion.div}
            layout
            initial={false}
            animate={{
              width: isMobile ? "100%" : isActive ? "100%" : "100px",
              height: isMobile ? (isActive ? "650px" : "80px") : "100%",
              flexGrow: isActive ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              layout: { duration: 0.3 },
            }}
            sx={{
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              borderRight:
                !isMobile && !isActive
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "none",
              borderBottom:
                isMobile && !isActive
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "none",
              display: "flex",
            }}
          >
            {/* Background Color Layer */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: item.color,
                display: "flex",
                flexDirection: isMobile
                  ? "column"
                  : isActive
                    ? "row"
                    : "column",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* COLLAPSED STATE */}
              <AnimatePresence>
                {!isActive && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    sx={{
                      display: "flex",
                      flexDirection: isMobile ? "row" : "column",
                      alignItems: "center",
                      justifyContent: isMobile
                        ? "space-between"
                        : "flex-center",
                      p: isMobile ? 3 : 4,
                      width: "100%",
                      height: "100%",
                      mt:0
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 22,
                        mb: isMobile ? 0 : 6,
                      }}
                    >
                      {item.id}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#ffff",
                        fontWeight: 600,
                        fontSize: isMobile ? 18 : 16,
                        whiteSpace: "nowrap",
                        transform: isMobile
                          ? "none"
                          : "rotate(-90deg) translateY(0px)",
                        transformOrigin: "center center",
                        width: isMobile ? "auto" : "max-content",
                        opacity: 0.9,
                        mt: isMobile ? 0 : 15,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {isMobile && <Box sx={{ width: 24 }} />}
                  </Box>
                )}
              </AnimatePresence>

              {/* EXPANDED STATE CONTENT */}
              <AnimatePresence>
                {isActive && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    {/* Content Section - LEFT ALIGNED */}
                    <Box
                    mt={0.8}
                      sx={{
                        flex: 1,
                        p: { xs: 4, md: 3 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        textAlign: "left",
                        width: { xs: "100%", md: "400px" },
                        color: "#fff",
                        gap: 2,
                       
                      }}
                      
                    >
                      {/* ID at top-left */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: { xs: 20, md: 24 },
                          }}
                        >
                          {item.id}
                        </Typography>
                      </motion.div>

                      <Box mb={5}>
                        {/* Subtitle and Title */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Typography
                            sx={{ fontSize: 16, opacity: 0.8, mb: 1 }}
                          >
                            {item.subtitle}
                          </Typography>
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: 28, md: 48 },
                              lineHeight: 1.2,
                              mb: 2,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </motion.div>

                        {/* Description + Button */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          style={{ maxWidth: 550 }}
                        >
                          <Typography
                            sx={{
                              fontSize: 16,
                              lineHeight: 1.8,
                              mb: 3,
                              opacity: 0.9,
                            }}
                          >
                            {item.desc}
                          </Typography>
                          <ReadMoreButton sx={{
                            borderLeft: '3px solid #ff8400ff',
                          }}  />
                        </motion.div>
                      </Box>
                    </Box>

                    {/* Image Section */}
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      sx={{
                        flex: 1.3,
                        position: "relative",
                        minHeight: { xs: "250px", md: "100%" },
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      {item.image ? (
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <ImagePlaceholder
                          borderRadius={0}
                          text={`${item.title} Image`}
                        />
                      )}
                    </Box>
                  </Box>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
