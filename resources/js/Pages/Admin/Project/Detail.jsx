import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProjectDetail from "./ProjectDetail";
import List from "../Task/List";
import History from "./History";

export default function Detail({ data, auth, user, task }) {
    const [value, setValue] = React.useState("1");
console.log(task,'uuuu');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const url = window.location.pathname;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Box
                sx={{
                    flexGrow: 10,
                    margin: "3%",
                    background: "white",
                    boxShadow: "2px 2px 2px 2px #e3e1da",
                    padding: "40px",
                }}
            >
                <TabContext value={value}>
                    <TabList onChange={handleChange} className="px-3">
                        <Tab label="Details" value="1" style={{ fontWeight:"bold"}}/>
                        <Tab label="Task" value="2" style={{ fontWeight:"bold"}}/>
                        <Tab label="History" value="3" style={{ fontWeight:"bold"}}/>
                    </TabList>
                    <TabPanel value="1">
                        <ProjectDetail data={data} user={user} />
                    </TabPanel>

                    <TabPanel value="2">
                        <List data={task} Id={id} developer={user} />
                    </TabPanel>

                    <TabPanel value="3">
                        <History data={data}/>
                    </TabPanel>
                </TabContext>
            </Box>
        </AuthenticatedLayout>
    );
}
