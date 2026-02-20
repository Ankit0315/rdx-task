import { Container, Box } from "@mui/material";
import ChairpersonSection from "./ChairPersonSection";
import { leadershipData } from "../config/leadership.config";

const LeadershipSection = () => {
    return (
        <Box sx={{ py: { xs: 4, md: 8 } }}>
            <Container maxWidth="lg">
                {leadershipData.map((leader) => (
                    <ChairpersonSection
                        key={leader.id}
                        name={leader.name}
                        title={leader.title}
                        message={leader.message}
                        image={leader.image}
                        reverse={leader.reverse}
                    />
                ))}
            </Container>
        </Box>
    );
};

export default LeadershipSection;
