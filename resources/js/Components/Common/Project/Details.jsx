import FormatDate from "@/Util/FormatDate";
import { useForm } from "@inertiajs/react";
import EditIcon from "@mui/icons-material/Edit";
import {
    Box,
    Button,
    Grid,
    Typography,
    IconButton,
    Chip,
} from "@mui/material";

export default function Details({ user, data, auth }) {
    const { setData, get, processing, errors, setError } = useForm();
    console.log(auth,'authhhhh');

    const handleUpdate = (id) => {
        get(route("admin.project.edit", { id }));
    };

    return (
        <>
            <Box sx={{ backgroundColor: "#f7f7f7" }} className="pb-5">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            background: "rgb(236 236 236)",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                            Basic Project Information
                        </Typography>

                            {
                                auth.user.user_role =="admin" &&
                                <IconButton aria-label="edit" color="primary"
                                sx={{ display: "flex", justifyContent: "end" }}
                                onClick={() => handleUpdate(data.id)}>
                                <EditIcon />
                               </IconButton>
                            }

                    </Grid>
                </Grid>
                <br />

                <Grid container className="px-3">
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Title
                        </Typography>
                        <Typography className="capitalize">
                            {data.title}
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Start Date
                        </Typography>
                        <Typography>
                            <FormatDate date={data.start_date} />
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Prject Manager
                        </Typography>
                        <Typography className="capitalize">
                            <Chip color="primary" label={data.project_manager} />
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                {/* <Grid container className="px-3">
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Prject Manager
                        </Typography>
                        <Typography className="capitalize">
                            <Chip color="primary" label={data.project_manager} />
                        </Typography>
                    </Grid>
                </Grid>
                <br /> */}
                <Grid container className="px-3">
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Description
                        </Typography>
                        <Typography className="capitalize">
                            {data.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <br/>


            <Box sx={{ backgroundColor: "#f7f7f7" }} className="pb-5">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            background: "rgb(236 236 236)",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            height: "35px",
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                            Developer's Name
                        </Typography>
                    </Grid>
                </Grid>

                <br />

                <Box>
                    {
                        user.map((item, j) =>
                        {
                           return (
                            <Chip label={item.name} className="capitalize" sx={{ margin:"10px"}}
                             color={item.user_role == "senior developer" ? "primary" : "success"}/>

                           );
                        })
                    }
                </Box>
            </Box>
        </>
    );
}
