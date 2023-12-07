import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Alert,
    Box,
    Button,
    IconButton,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "@inertiajs/react";
import FormatDate from "@/Util/FormatDate";
import DateTimeFormat from "@/Util/DateTimeFormat";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Create from "./Create";

export default function List({ data, auth, developer, manager }) {

    console.log(manager,'managerrr');
    const { setData, get, processing, errors, setError } = useForm();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleView = (id) => {
        get(route("admin.project.detail", { id }));
    };

    const handleCreate = () => {
        get(route("admin.project.create"));
    };
    const handleUpdate = (id) => {
        get(route("admin.project.edit", { id }));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value, 10);
        setPage(0);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-2 py-3">
                        { data.length === 0 ? (
                            <>
                                <Alert
                                    severity="info"
                                    className="capitalize"
                                    style={{
                                        "& .severity": {
                                            MarginTop: "9px",
                                        },
                                    }}
                                    action={<Create
                                        developer={developer}
                                        manager={manager}
                                    />}
                                >
                                    Project Not Found ! Create A New Project
                                </Alert>
                            </>
                        ) : (
                            <>
                                <Box mb={2}>
                                    <div
                                        style={{
                                            margin: "10px",
                                            display: "flex",
                                            justifyContent: "end",
                                        }}
                                    >
                                        <Create
                                            developer={developer}
                                            manager={manager}
                                        />
                                    </div>
                                </Box>

                                <TableContainer
                                    sx={{
                                        padding: "10px",
                                        border: "1px solid whitesmoke",
                                    }}
                                >
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    sx={{ fontWeight: "bold" }}
                                                >
                                                    {" "}
                                                    ID{" "}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontWeight: "bold" }}
                                                >
                                                    {" "}
                                                    Title{" "}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontWeight: "bold" }}
                                                >
                                                    {" "}
                                                    Start Date
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontWeight: "bold" }}
                                                >
                                                    {" "}
                                                    Created Date
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontWeight: "bold" }}
                                                >
                                                    {" "}
                                                    Action
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage +
                                                        rowsPerPage
                                                )
                                                .map((item, j) => {
                                                    return (
                                                        <TableRow key={j + 1}>
                                                            <TableCell>
                                                                {item.id}
                                                            </TableCell>
                                                            <TableCell className="capitalize">
                                                                {item.title}
                                                            </TableCell>
                                                            <TableCell>
                                                                <FormatDate
                                                                    date={
                                                                        item.start_date
                                                                    }
                                                                />
                                                            </TableCell>

                                                            <TableCell>
                                                                <DateTimeFormat
                                                                    date={
                                                                        item.created_at
                                                                    }
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <IconButton aria-label="detail">
                                                                    <VisibilityIcon
                                                                        sx={{
                                                                            color: "rgba(0, 0, 0, 0.54)",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleView(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    />
                                                                </IconButton>
                                                                &emsp;
                                                                <IconButton
                                                                    aria-label="edit"
                                                                    color="primary"
                                                                >
                                                                    <EditIcon
                                                                        color="info"
                                                                        onClick={() =>
                                                                            handleUpdate(
                                                                                item.id
                                                                            )
                                                                        }
                                                                    />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[
                                        10, 15, 20, 25, 50, 100,
                                    ]}
                                    component="div"
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={
                                        handleChangeRowsPerPage
                                    }
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
