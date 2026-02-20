import './App.css'
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import DownloadCenter from './components/DownloadCenter'
import GlanceStats from './components/GlanceStats'
import AboutSection from './components/AboutSection'
import LeadershipSection from './components/LeadershipSection'
import StrategicSection from './components/StartegicSection'
import ExecutionAccordion from './components/ExecutionAccordion'
import CaseStudies from './components/CaseStudies'
import ServicesHighlight from './components/ServicesHighlight'
import ServicesGrid from './components/ServicesGrid'
import WorkforceAndCSR from './components/WorkforceAndCSR'

const theme = createTheme({
  typography: {
    fontFamily: '"Source Sans 3", sans-serif',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box >
        <Header />
        <HeroSection />
        <GlanceStats />
        <AboutSection />
        <LeadershipSection />
        <StrategicSection />
        <ServicesHighlight />
        <ServicesGrid />
        <WorkforceAndCSR />
        <ExecutionAccordion />
        <CaseStudies />
        <DownloadCenter />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
