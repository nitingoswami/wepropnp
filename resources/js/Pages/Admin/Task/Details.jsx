import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormatDate from "@/Util/FormatDate";
import { useForm } from "@inertiajs/react";
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Chip, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DateTimeFormat from "@/Util/DateTimeFormat";
import StatusStyle from "@/Constant/StatusStyle";
import Edit from "./Edit";
import { useState } from "react";

export default function Details({data ,developer}){

    const { item, setItem,get, post, processing, errors, reset } = useForm();
    const [status ,setStatus] = useState(data.status);

    const [isEdit , setIsEdit] = useState(false);
    const handleUpdate = (id)=>{
        get(route('project.task.edit',{id}));
    }

    const dev_id= (data.developer_id.split(','));
    const dev = dev_id.map((item)=>Number(item));

    const  handleStatus = () => {
         setIsEdit(true);
    }
    const handleChange = (e) =>{
        setStatus(e.target.value);
        setIsEdit(false);
    }
    console.log(status,'statutu');

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
                    style={{ background: "rgb(236 236 236)", display: "flex" ,justifyContent:"space-between" ,alignItems:"center"}}
                >
            <Typography sx={{ fontWeight: "bold",marginLeft:"10px"}} >Task Information</Typography>
           
            <Edit devId={dev.id} developer={developer} data={data} sx={{display:'flex',justifyContent:"end"}}/>

            </Grid>
        </Grid>
        <br/>
       <Grid container >
            <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>Task Name </Typography>
                <Typography className="capitalize">{data.task_name}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>Priority</Typography>
                <Typography>{data.priority}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>status</Typography>
                <Typography className="capitalize"><Chip label={status} 
                style={{ background:StatusStyle.ChipColor[status].color,color:'white' }} 
                onClick={handleStatus}/>
                </Typography>
               {
                isEdit && 
                <Box component={'form'}>
                   <Select
                                        value={status}
                                        name="status"
                                        style={{
                                            height: "42px",
                                        }}
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1  "
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem>Choose Status</MenuItem>
                                        <MenuItem value={"New"}>New</MenuItem>
                                        <MenuItem value={"Started"}>
                                            Started
                                        </MenuItem>
                                        <MenuItem value={"Complete"}>
                                            Complete
                                        </MenuItem>
                                        <MenuItem value={"Pause"}>
                                            Pause
                                        </MenuItem>
                                    </Select>
                                   
                </Box>
               }
            </Grid>
       </Grid>
       <br/>
       <Grid container >
       <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>Lavel </Typography>
                <Typography>{data.level}</Typography>

            </Grid>
       <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>Start Date </Typography>
                <Typography className="capitalize"><FormatDate date={data.start_date} /></Typography>

            </Grid>
            <Grid item xs={4}>
                <Typography sx={{fontWeight:"bold"}}>Created At </Typography>
                <Typography className="capitalize"><DateTimeFormat date={data.created_at} /></Typography>

            </Grid>

       </Grid>
       <br/>
       <Grid container >
       <Grid item xs={12}>
                <Typography sx={{fontWeight:"bold"}}>Description </Typography>
                <Typography className="capitalize">{data.description}</Typography>
            </Grid>

       </Grid>
       </Box>

    <Box
            sx={{
                flexGrow:10,
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
                    Developer Information
                </Typography>
            </Grid>
        </Grid>

        <br />
        {/* <Grid container>
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
                                    Name{" "}
                                </TableCell>
                                <TableCell
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {" "}
                                    Email
                                </TableCell>
                                <TableCell
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {" "}
                                    Phone
                                </TableCell>
                                <TableCell
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {" "}
                                    Role
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {  dev.map((dev_id) =>  (
                                 developer.map((item, j) =>(
                                    dev_id === item.id ?
                                     (
                                        <TableRow key={j + 1}>
                                                 <TableCell>
                                                     {item.id}
                                                 </TableCell>
                                                 <TableCell className="capitalize">
                                                     {item.name}
                                                 </TableCell>
                                                 <TableCell>
                                                     {item.email}
                                                 </TableCell>
                                                 <TableCell>
                                                     {" "}
                                                     {item.contact_no}
                                                 </TableCell>
                                                 <TableCell className="capitalize">
                                                     {item.user_role.replace(
                                                         "_",
                                                         " "
                                                     )}
                                                 </TableCell>
                                             </TableRow>
                                    ):
                                    (
                                        <>
                                        </>
                                    )
                                   ))
                                )

                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid> */}
         <Box>
                    {
                       dev.map((dev_id) =>  (
                        developer.map((item, j) =>(
                           dev_id === item.id ?
                            (
                            <Chip label={item.name} className="capitalize" sx={{ margin:"10px"}}
                             color={item.user_role == "senior_developer" ? "primary" : "secondary"}/>

                           ) :
                           (
                            <> </>
                           )
                        ))
                       ))
                           }  
                    </Box>
    </Box>


       </>
    );
}
