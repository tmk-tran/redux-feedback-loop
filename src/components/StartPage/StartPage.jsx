import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./StartPage.css";

export default function StartPage() {
    return (
        <Card className="start-card" variant="outlined">
            <CardContent>
                <Typography variant="h3" style={{fontFamily:"Comic Sans"}}>
                    Welcome!
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary" component="p">
                    Please answer the following:
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary" component="p" style={{fontWeight:"bold"}}>
                    'Start' to begin
                </Typography>
                <br />
                <Button variant="contained" color="primary">
                    Start
                </Button>
            </CardContent>
        </Card>
    );
};