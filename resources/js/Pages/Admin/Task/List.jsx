import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Alert,
    AlertTitle,
    Button,
    Chip,
    Collapse,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "@inertiajs/react";
import StatusStyle from "@/Constant/StatusStyle";
import Details from "./Details";
import Edit from "./Edit";
import DateTimeFormat from "@/Util/DateTimeFormat";
import Create from "./Create";

export default function List({ data, Id, developer }) {
    const [page, setPage] = useState(0);
    const [expandedRows, setExpandedRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { item, setItem, get, post, processing, errors, reset } = useForm();

    const handleView = (id) => {
        get(route("admin.task-detail", { id }));
    };


    const toggleRow = (id) => {
        if (expandedRows.includes(id)) {
            setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
        } else {
            setExpandedRows([...expandedRows, id]);
        }
    };

    const handleCreate = () => {
        get(route("admin.task.create", { id: Id }));
    };

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

       const handleUpdate = (id) => {
        get(route("admin.edit-task", { id }));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value, 10);
        setPage(0);
    };

    return (
       <>
                {data.length === 0 ? (
                    <>
                        <div className="py-1">
                            <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <Alert
                                        severity="info"
                                        className="capitalize"
                                        style={{
                                            '& .severity': {
                                                MarginTop: '9px',
                                              },
                                         }}
                                         action={
                                            <Create developer={developer} Id={Id} />
                                          }
                                    >
                                        No task found for this project ,you can
                                        Create a new task!
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            style={{
                                margin: "10px",
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >

                            <Create developer={developer} Id={Id}/>

                        </div>

                        <TableContainer
                            sx={{
                                padding: "10px",
                                border: "2px solid whitesmoke",
                                background:'rgba(0,0,0,0.02)',
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
                                            Start Date
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                            Priority
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                            Status
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>
                                            Action
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((item, j) => {
                                            console.log(item.status,'iiii');
                                            return (
                                                <>
                                                    <TableRow key={j + 1}>
                                                        <TableCell>
                                                            {item.id}
                                                        </TableCell>
                                                        <TableCell className="capitalize">
                                                            {item.task_name}
                                                        </TableCell>
                                                        <TableCell>
                                                            <DateTimeFormat
                                                                date={
                                                                    item.start_date
                                                                }
                                                            />
                                                        </TableCell>
                                                        <TableCell className="capitalize">
                                                            {item.priority}
                                                        </TableCell>
                                                        <TableCell className="capitalize">
                                                            <Chip
                                                                label={
                                                                    item.status
                                                                }
                                                                sx={{
                                                                    textTransform:
                                                                        "capitalize",
                                                                    backgroundColor:
                                                                        StatusStyle
                                                                            .ChipColor[
                                                                            item
                                                                                .status
                                                                        ].color,color:"white"
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                        <IconButton aria-label="detail">
                                                            <VisibilityIcon
                                                                onClick={() =>
                                                                    toggleRow(
                                                                        item.id
                                                                    )
                                                                }
                                                                sx={{
                                                                    color: "rgba(0, 0, 0, 0.54)",
                                                                }}
                                                            >

                                                                {expandedRows.includes(
                                                                    item.id
                                                                ) ? (
                                                                    <VisibilityIcon
                                                                        sx={{
                                                                            color: "rgba(0, 0, 0, 0.54)",
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <VisibilityIcon
                                                                        sx={{
                                                                            color: "rgba(0, 0, 0, 0.54)",
                                                                        }}
                                                                    />
                                                                )}
                                                            </VisibilityIcon>
                                                            </IconButton>
                                                            &emsp;
                                                            <IconButton aria-label="edit">
                                                            <Edit devId={item.developer_id} developer={developer} data={item}/>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell
                                                            colSpan={6}
                                                            sx={{
                                                                py: 0,
                                                                backgroundColor:
                                                                    "#80808024",
                                                                px: {
                                                                    xs: "5px",
                                                                    md: "16px",
                                                                },
                                                            }}
                                                        >
                                                            <Collapse
                                                                in={expandedRows.includes(
                                                                    item.id
                                                                )}
                                                                unmountOnExit
                                                            >
                                                                <Details
                                                                    data={item}
                                                                    developer={
                                                                        developer
                                                                    }
                                                                />
                                                            </Collapse>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            rowsPerPageOptions={[10, 15, 20, 25, 50, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </>
                )}
                </>
    );
}
