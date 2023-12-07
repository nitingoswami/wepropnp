import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    Container,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { data } from "autoprefixer";

export default function Create({auth}) {
    const { data, setData, get, post, processing, errors, reset } = useForm({
        basic_salary: "",
        house_rent: "",
        leave_allowance: "",
        medical_conveyance: "",
        statutory_bonus: "",
        tax_deducted: "",
        provided_fund: "",
        gross_salary: "",
        net_salary: "",
    });

    const queryString = window.location.search;

    const queryParams = queryString.substring(1).split("&");

    const params = {};

    queryParams.forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = decodeURIComponent(value);
    });

    console.log(params.user, "ppppppp");

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const GrossSalary = () => {
        const grossSalary =
            Number(data.basic_salary) +
            Number(data.house_rent) +
            Number(data.leave_allowance) +
            Number(data.medical_conveyance) +
            Number(data.statutory_bonus) +
            Number(data.provided_fund);
        setData("gross_salary", isNaN(grossSalary) ? 0 : grossSalary);
    };

    const totalSalary = () => {
        const taxDeducted =
            (Number(data.gross_salary) * Number(data.tax_deducted)) / 100;
        const netSalary = Number(data.gross_salary) - taxDeducted;
        setData("net_salary", isNaN(netSalary) ? 0 : netSalary);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.user.salary.save", params.user));
    };
    return (
       <AuthenticatedLayout user={auth.user}>

        <Container maxWidth="lg" className="shadow-md bg-white py-5 m-5">
            <Typography variant="h5" align="center" className="pt-3 pb-5" sx={{ fontWeight:"bold" }}>
                Salary Compansation
            </Typography>
            <Box
                component={"form"}
                sx={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit}
            >
                <div className="pb-5">
                    <InputLabel sx={{ fontWeight:"500" }}>Basic Salary</InputLabel>
                    <TextField
                        required
                        fullWidth
                        id="basic_salary"
                        name="basic_salary"
                        type="number"
                        value={data.basic_salary}
                        autoComplete="basic_salary"
                        onChange={handleChange}
                        size="small"
                    />
                     <InputError
                                message={errors.basic_salary}
                                className="mt-2"
                            />
                </div>
                <div className="pb-5">
                    <InputLabel sx={{ fontWeight:"500" }}>House Rent</InputLabel>
                    <TextField
                        required
                        fullWidth
                        id="house_rent"
                        name="house_rent"
                        type="number"
                        value={data.house_rent}
                        autoComplete="house_rent"
                        onChange={handleChange}
                        size="small"
                    />
                     <InputError
                                message={errors.house_rent}
                                className="mt-2"
                            />
                </div>
                <div className="pb-5">
                    <InputLabel sx={{ fontWeight:"500" }}>Leave And Travel Allowance</InputLabel>
                    <TextField
                        required
                        fullWidth
                        id="leave_allowance"
                        name="leave_allowance"
                        type="number"
                        value={data.leave_allowance}
                        autoComplete="leave_allowance"
                        onChange={handleChange}
                        size="small"

                    />
                    <InputError
                                message={errors.leave_allowance}
                                className="mt-2"
                            />
                </div>
                <div className="pb-5">
                    <InputLabel sx={{ fontWeight:"500" }}>Medical And Conveyance</InputLabel>
                    <TextField
                        required
                        fullWidth
                        id="medical_conveyance"
                        name="medical_conveyance"
                        type="number"
                        value={data.medical_conveyance}
                        autoComplete="medical_conveyance"
                        onChange={handleChange}
                        size="small"

                    />
                    <InputError
                                message={errors.medical_conveyance}
                                className="mt-2"
                            />
                </div>
                <div className="pb-5">
                    <InputLabel sx={{ fontWeight:"500" }}>Statutory Bonus</InputLabel>
                    <TextField
                        required
                        fullWidth
                        id="statutory_bonus"
                        name="statutory_bonus"
                        type="number"
                        value={data.statutory_bonus}
                        autoComplete="statutory_bonus"
                        onChange={handleChange}
                        size="small"

                    />
                    <InputError
                                message={errors.statutory_bonus}
                                className="mt-2"
                            />
                </div>
                <div className="pb-5" style={{ display: "flex" }}>
                    <div style={{ width: "50%", paddingRight: "5px" }}>
                        <InputLabel sx={{ fontWeight:"500" }}>Tax Deducted At Source (%)</InputLabel>
                        <TextField
                            required
                            fullWidth
                            id="tax_deduct"
                            name="tax_deducted"
                            type="number"
                            value={data.tax_deducted}
                            autoComplete="tax_deduct"
                            onChange={handleChange}
                            size="small"

                        />
                        <InputError
                                message={errors.tax_deducted}
                                className="mt-2"
                            />
                    </div>
                    <div style={{ width: "50%" }}>
                        <InputLabel sx={{ fontWeight:"500" }}>Provided Fund</InputLabel>
                        <TextField
                            required
                            fullWidth
                            id="provided_fund"
                            name="provided_fund"
                            type="number"
                            value={data.provided_fund}
                            autoComplete="provided_fund"
                            onChange={handleChange}
                            size="small"

                        />
                        <InputError
                                message={errors.provided_fund}
                                className="mt-2"
                            />
                    </div>
                </div>
                <div className="pb-5" style={{ display: "flex" }}>
                    <div style={{ width: "50%", paddingRight: "5px" }}>
                        <InputLabel
                            sx={{ lineHeight: "50px", marginRight: "5px",fontWeight:"500" }}
                        >
                            Gross Salary
                        </InputLabel>
                        <TextField
                            required
                            fullWidth
                            id="gross_salary"
                            type="number"
                            value={data.gross_salary}
                            width="50"
                            onClick={GrossSalary}
                            autoComplete="gross_salary"
                            size="small"

                        />
                         <InputError
                                message={errors.gross_salary}
                                className="mt-2"
                            />
                    </div>
                    <div style={{ width: "50%" }}>
                        <InputLabel
                            sx={{ lineHeight: "50px", marginRight: "5px",fontWeight:"500" }}
                        >
                            Net Salary
                        </InputLabel>
                        <TextField
                            required
                            fullWidth
                            id="net_salary"
                            type="number"
                            maxWidth="50%"
                            value={data.net_salary}
                            autoComplete="net_salary"
                            onClick={totalSalary}
                            size="small"
                        />
                        <InputError
                                message={errors.net_salary}
                                className="mt-2"
                            />
                    </div>
                </div>
               <div className="flex items-center justify-center m-8">
                        <PrimaryButton
                                    className="ms-4"
                                    variant="contained"
                                    disabled={processing}
                                    style={{ height:"40px" ,}}
                                >
                                    Save
                                </PrimaryButton>

                </div>
            </Box>
        </Container>
        </AuthenticatedLayout>
    );
}
