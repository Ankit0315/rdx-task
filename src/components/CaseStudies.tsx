import { Box, Typography, Container, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MedicalCard from "./MedicalCard";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { caseStudies } from "../config/caseStudies.config";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{ py: 10, bgcolor: "#fff", position: "relative", overflow: "hidden" }}
    >
         <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "#0B4A75",
              mb: 8,
              fontSize: { xs: 24, md: 32 },
              fontFamily: "Source Sans 3",
            }}
          >
            Case Studies
          </Typography>

      <Box ml={{ xs: 0, sm: 0, lg: 12 }}>
        <Container maxWidth="xl">
          {/* Section Title */}
       

          {/* Swiper Container */}
          <Box sx={{ position: "relative" }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={25}
              slidesPerView={2.9}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                prevEl: ".case-prev",
                nextEl: ".case-next",
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1.5 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.5},
              }}
              // style={{ overflow: "visible" }}
            >
              {caseStudies.map((item, index) => (
                <SwiperSlide key={index}>
                  <MedicalCard title={item.title} image={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Button (Left) */}
            <IconButton
              className="case-prev"
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: 0,md:0, lg: -25 },
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "#fff",
                width: 50,
                height: 50,
                border: "1px solid #F78D2F",
                boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              <ChevronLeftIcon sx={{ color: "#0B4A75", fontSize: 24 }} />
            </IconButton>

            {/* Custom Navigation Button (Right) */}
            <IconButton
              className="case-next"
              sx={{
                position: "absolute",
                top: "50%",
                right: { xs: 0,md:50, lg:180 },
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "#fff",
                width: 50,
                height: 50,
                border: "1px solid #F78D2F",
                boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              <ChevronRightIcon sx={{ color: "#0B4A75", fontSize: 24 }} />
            </IconButton>
          </Box>

        
        </Container>
        
      </Box>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                color: "#333",
                fontFamily: "Source Sans 3",
                letterSpacing: "0.05em",
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 700, fontSize: 32, color: "#2E2E2E" }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </Box>
              <Box
                component="span"
                sx={{
                  color: "#BDBDBD",
                  fontWeight: 300,
                  fontSize: 18,
                  ml: 0.5,
                }}
              >
                /{String(caseStudies.length).padStart(2, "0")}
              </Box>
            </Typography>
          </Box>
    </Box>
  );
}
