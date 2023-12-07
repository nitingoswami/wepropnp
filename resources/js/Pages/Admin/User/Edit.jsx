import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, router, useForm } from "@inertiajs/react";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import InputError from "@/Components/InputError";

export default function Edit({ auth, user }) {
    const { data, setData, get, post, processing, errors, reset } = useForm();

    const [value, setValue] = useState({
        name: user.name,
        email: user.email,
        user_role: user.user_role,
        contact_no: user.contact_no,
    });
    const handleChange = (e) => {
        setValue((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("admin.user.update", [user.id]), value);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            {/* <GuestLayout> */}
            <Head title="Edit User" />

            <div className="mt-5 flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100">
                {/* <div className="w-full  mt-0 px-3 py-2 bg-white shadow-md overflow-hidden sm:rounded-lg" style={{width:"60%",marginBottom:"10px"}}>                <Head title="Create Project" /> */}

                <div
                    className="w-full  mt-0 px-3 py-2 shadow-md bg-white overflow-hidden sm:rounded-lg"
                    style={{
                        width: "60%",
                        alignContent: "center",
                        justifyContent: "space-between",
                        boxShadow: "-1px -2px 5px 5px #e8e3e3",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                paddingBottom: "30px",
                            }}
                        >
                            <Typography
                                variant="h5"
                                style={{ fontWeight: "bold" }}
                            >
                                Edit User
                            </Typography>
                        </div>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={value.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />

                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={value.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => handleChange(e)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="contact_no" value="Phone No" />

                            <TextInput
                                id="contact_no"
                                type="text"
                                name="contact_no"
                                value={value.contact_no}
                                className="mt-1 block w-full"
                                autoComplete="contact_no"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <InputError message={errors.contact_no} className="mt-2" />

                        </div>

                        {/* <div className="mt-4">
                            <InputLabel
                                htmlFor="user_role"
                                value="Select User Role"
                            />

                            <select
                                value={value.user_role}
                                name="user_role"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={(e) => handleChange(e)}
                                required
                            >
                                <option value="admin">Admin</option>
                                <option value="hr_manager">HR Manager</option>
                                <option value="project_manager">
                                    Project Manager
                                </option>
                                <option value="senior_developer">
                                    Senior Developer
                                </option>
                                <option value="junior_developer">
                                    Junior Developer
                                </option>
                            </select>

                        </div> */}
                        <div className="mt-4">
                            <FormControl component="fieldset">
                                <InputLabel
                                    htmlFor="user_role"
                                    value="Select User Role"
                                />
                                <RadioGroup
                                    value={value.user_role}
                                    onChange={handleChange}
                                    name="user_role"
                                    row
                                >
                                    <FormControlLabel
                                        value="admin"
                                        control={<Radio />}
                                        label="Admin"
                                        aria-setsize={"small"}
                                    />
                                    <FormControlLabel
                                        value="hr manager"
                                        control={<Radio />}
                                        label="HR Manager"
                                        aria-setsize={"small"}
                                    />
                                    <FormControlLabel
                                        value="project manager"
                                        control={<Radio />}
                                        label="Project Manager"
                                        aria-setsize={"small"}
                                    />
                                    <FormControlLabel
                                        value="senior developer"
                                        control={<Radio />}
                                        label="Senior Developer"
                                        aria-setsize={"small"}
                                    />
                                    <FormControlLabel
                                        value="junior developer"
                                        control={<Radio />}
                                        label="Junior Developer"
                                        aria-setsize={"small"}
                                    />
                                </RadioGroup>
                            </FormControl>

                            <InputError message={errors.user_role} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <PrimaryButton
                                className="ms-4"
                                style={{
                                    height: "40px",
                                    backgroundColor: "#1976d2",
                                    width: "150px",
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Update User
                            </PrimaryButton>
                        </div>
                    </form>
                    {/* </GuestLayout> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
