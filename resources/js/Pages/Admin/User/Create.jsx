import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Select,
    Typography,
} from "@mui/material";

export default function Create({ auth }) {
    const { data, setData, get, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_role: "",
        salary: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.user.save"));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="mt-5 flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100">
                <Head title="Create User" />

                <div
                    className="w-full  mt-0 px-3 py-2 shadow-md bg-white overflow-hidden sm:rounded-lg"
                    style={{
                        width: "60%",
                        alignContent: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <form onSubmit={submit}>
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
                                Create User
                            </Typography>
                        </div>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="contact_no" value="Phone No" />

                            <TextInput
                                id="contact_no"
                                type="number"
                                name="contact_no"
                                value={data.contact_no}
                                className="mt-1 block w-full"
                                autoComplete="contact_no"
                                onChange={(e) =>
                                    setData("contact_no", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.contact_no}
                                className="mt-2"
                            />
                        </div>
                        {/* <div className="mt-4">
                            <InputLabel
                                htmlFor="user_role"
                                value="Select User Role"
                            />
                            <select
                                value={data.user_role}
                                name="user_role"
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                onChange={(e) =>
                                    setData("user_role", e.target.value)
                                }
                                required
                            >
                                <option>Select User Role</option>
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

                            <InputError
                                message={errors.user_role}
                                className="mt-2"
                            />
                        </div> */}
                        <div className="mt-4">
                            <FormControl component="fieldset">
                                <InputLabel
                                    htmlFor="user_role"
                                    value="Select User Role"
                                />
                                <RadioGroup
                                    value={data.user_role}
                                    onChange={(e) =>
                                        setData("user_role", e.target.value)
                                    }
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

                            <InputError
                                message={errors.user_role}
                                className="mt-2"
                            />
                        </div>

                        {data.user_role === "admin" ? (
                            <div className="flex items-center justify-center m-4">
                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                    style={{
                                        height: "40px",
                                        backgroundColor: "#1976d2",
                                    }}
                                >
                                    Create User
                                </PrimaryButton>
                            </div>
                        ) : (
                            <>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="salary"
                                        value="Salary"
                                    />

                                    <TextInput
                                        id="salary"
                                        type="number"
                                        name="salary"
                                        value={data.salary}
                                        className="mt-1 block w-full"
                                        autoComplete="consalarytact_no"
                                        onChange={(e) =>
                                            setData("salary", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.salary}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center justify-center m-4">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                        style={{
                                            height: "40px",
                                            backgroundColor: "#1976d2",
                                        }}
                                    >
                                        Next
                                    </PrimaryButton>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
