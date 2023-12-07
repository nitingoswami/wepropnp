import FormatDate from "@/Util/FormatDate";
import { Link, useForm } from "@inertiajs/react";
import EditIcon from "@mui/icons-material/Edit";
import {
    Box,
    Button,
    Grid,
    Typography,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    IconButton,
    Chip,
} from "@mui/material";

export default function ProjectDetail({ user, data, auth }) {
    const { setData, get, processing, errors, setError } = useForm();
    console.log(user,'datatt');

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
                        <Button
                            sx={{ display: "flex", justifyContent: "end" }}
                            onClick={() => handleUpdate(data.id)}
                        >
                            <IconButton aria-label="edit" color="primary">
                                <EditIcon />
                            </IconButton>
                        </Button>
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
                {/* <Grid container className="px-3">
                    <Grid item xs={12}>
                        <TableContainer
                            component={Paper}
                            sx={{
                                padding: "10px",
                                border: "1px solid whitesmoke",
                            }}
                        >
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                             ID
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                             Name
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                             Email
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                             Phone
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                             Role
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user.map((item, j) => {
                                        return (
                                            <TableRow key={j + 1}>
                                                <TableCell>{item.id}</TableCell>
                                                <TableCell className="capitalize">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell>
                                                    {item.email}
                                                </TableCell>
                                                <TableCell>
                                                             {item.contact_no}
                                                </TableCell>
                                                <TableCell className="capitalize">
                                                    {item.user_role.replace(
                                                        "_",
                                                        " "
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid> */}
                <Box>
                    {
                        user.map((item, j) =>
                        {
                           return (
                            <Chip label={item.name} className="capitalize" sx={{ margin:"10px"}}
                             color={item.user_role == "senior_developer" ? "primary" : "secondary"}/>

                           );


                        })
                    }
                </Box>
            </Box>
        </>
    );
}
