import FormatDate from "@/Util/FormatDate";
import { router, useForm } from "@inertiajs/react";
import EditIcon from "@mui/icons-material/Edit";
import {
    Alert,
    Box,
    Chip,
    Grid,
    IconButton,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import DateTimeFormat from "@/Util/DateTimeFormat";
import StatusStyle from "@/Constant/StatusStyle";
import { useState } from "react";
import Edit from "./Edit";
import StatusPopup from "./StatusPopup";
import SaveIcon from '@mui/icons-material/Save';

export default function Detail({ data, developer, auth ,devId }) {
    console.log(devId ,'deveve');
    const { item, setItem, get, post, processing, errors, reset } = useForm();
    const [state, setState] = useState({
        status: data.status,
    });

    const [isEdit, setIsEdit] = useState(false);
    const handleUpdate = (id) => {
        get(route("admin.project.task.edit", { id }));
    };

    const dev_id = data.developer_id.split(",");
    const dev = dev_id.map((item) => Number(item));

    const handleStatus = () => {
        setIsEdit(true);
    };
    const handleChange = (e) => {
        setState({ status: e.target.value });
    };

    console.log(state.status,'statttt');
    const statusSubmit = () => {
        {
            auth.user.user_role == "admin"?
            router.post(route("admin.project.task.status", { id: data.id }),state)
            :  auth.user.user_role == "project manager" ?
            router.post(route("projectManager.project.task.status", { id: data.id }),state)
            : auth.user.user_role == "senior developer" ?
            router.post(route("developer.project.task.status", { id: data.id }),state)
            : auth.user.user_role == "senior developer" ?
            router.post(route("developer.project.task.status", { id: data.id }),state)
            :
            <Alert> Route Not Define</Alert>
        }
        setIsEdit(false);
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 10,
                    margin: "2%",
                    background: "#f9f9f9",
                    boxShadow: "2px 2px 2px 2px #e3e1da",
                    padding: "40px",
                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            background: "rgb(236 236 236)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                            Task Information
                        </Typography>

                        { auth.user.user_role !== "hr manager"
                || auth.user.user_role !== "junior developer" || auth.user.user_role !== "senior developer"  && (
                            <Edit
                                devId={dev.id}
                                developer={developer}
                                data={data}
                                auth={auth}
                                sx={{ display: "flex", justifyContent: "end" }}
                            />
                        )}
                    </Grid>
                </Grid>
                <br />
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Task Name{" "}
                        </Typography>
                        <Typography className="capitalize">
                            {data.task_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Priority
                        </Typography>
                        <Typography>{data.priority}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Status
                        </Typography>
                        {isEdit ? (
                            <Box component={"form"} onSubmit={statusSubmit}>
                                <Select
                                    value={state.status}
                                    name="status"
                                    style={{
                                        height: "42px",
                                    }}
                                    size="small"
                                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1  "
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value={"new"}>New</MenuItem>
                                    <MenuItem value={"started"}>
                                        Started
                                    </MenuItem>
                                    <MenuItem value={"complete"}>
                                        Complete
                                    </MenuItem>
                                    <MenuItem value={"pause"}>Pause</MenuItem>
                                </Select>
                                <IconButton color="primary" aria-label="save">
                                    <SaveIcon
                                        color="primary"
                                        sx={{
                                            fontSize: "30px",
                                            fontWeight: "bold",
                                        }}
                                        onClick={statusSubmit}
                                    />
                                </IconButton>
                            </Box>
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography className="capitalize">
                                    <Chip
                                        label={state.status}
                                        style={{
                                            background:
                                                StatusStyle.ChipColor[
                                                    state.status
                                                ].color,
                                            color: "white",
                                        }}
                                    />
                                </Typography>
                                {auth.user.user_role !== "hr manager" && (
                                    <IconButton
                                        color="primary"
                                        aria-label="edit"
                                    >
                                        <EditIcon
                                            color="primary"
                                            onClick={handleStatus}
                                        />
                                    </IconButton>
                                )}
                            </div>
                        )}

                        {
                        state.status == "complete" && <StatusPopup auth={auth}/>
                        }
                    </Grid>
                </Grid>
                <br />
                <Grid container>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Level
                        </Typography>
                        <Typography>{data.level}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Start Date
                        </Typography>
                        <Typography className="capitalize">
                            <FormatDate date={data.start_date} />
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            Created At
                        </Typography>
                        <Typography className="capitalize">
                            <DateTimeFormat date={data.created_at} />
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid container>
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

            <Box
                sx={{
                    flexGrow: 10,
                    margin: "2%",
                    background: "#f9f9f9",
                    boxShadow: "2px 2px 2px 2px #e3e1da",
                    padding: "40px",
                }}
            >
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
                            Developers
                        </Typography>
                    </Grid>
                </Grid>

                <br />

                <Box>
                    {developer.map((item, j) => (

                           ( devId == item.id   &&
                            <Chip
                            label={ item.name }
                            className="capitalize"
                            sx={{ margin: "10px" }}
                            color={
                                item.user_role == "senior developer"
                                    ? "primary"
                                    : "success"
                            }
                        />
                        )

                    ))}
                </Box>
            </Box>
        </>
    );
}
