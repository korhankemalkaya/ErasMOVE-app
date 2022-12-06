import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import CourseRequests from "./CourseRequests";

export default function Application() {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(`${newValue}`);
  };

  return (
    <Stack spacing={2}>
        <Typography gutterBottom variant="h1" textAlign={ "center" } component="div">
            Application
        </Typography>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", height: "100%" }}
        >
            <Box sx={{ width: "90%", height: "90%" }}>
                <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange}>
                    <Tab label="Application" value={"0"} />
                    <Tab label="PreApproval Forms" value={"1"} />
                    <Tab label="Course Requests" value={"2"} />
                    </TabList>
                </Box>
                    <TabPanel value="0" index={0}>
                        <Box sx={{ flexGrow: 1 }}>
                        </Box>
                    </TabPanel>
                    <TabPanel value="1" index={1}>
                        <Box sx={{ flexGrow: 1 }}>
                        </Box>
                    </TabPanel>
                    <TabPanel value="2" index={2}>
                        <Box sx={{ flexGrow: 1 }}>
                            <CourseRequests />
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Grid>
    </Stack>
    
  );
}