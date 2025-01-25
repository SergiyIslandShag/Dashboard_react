import { Link } from "react-router-dom";
import { TextField, Box, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormError } from './errors/errors'; 
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ isAdmin }) => {
    const navigate = useNavigate();

    const formHandler = (values) => {
        delete values.confirmPassword;

        const users = localStorage.getItem("users");

        if (!users) {
            localStorage.setItem(
                "users",
                JSON.stringify([{ ...values, id: 1 }])
            );
        } else {
            const array = JSON.parse(users);
            values.id = array[array.length - 1].id + 1;
            values.role = isAdmin ? values.role : "user";
            array.push(values);
            localStorage.setItem("users", JSON.stringify(array));
        }

        navigate("/");
    };

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        avatar: "",
        role: "user",
    };

    const yupValidationSchema = Yup.object({
        firstName: Yup.string().max(50, "Максимум 50 символів"),
        lastName: Yup.string().max(50, "Максимум 50 символів"),
        email: Yup.string()
            .required("Пошта обов'язкова")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Пароль обов'зковий")
            .min(6, "Пароль повинен містити не менше 6 символів"),
        confirmPassword: Yup.string()
            .required("Підтвердіть пароль")
            .oneOf([Yup.ref("password")], "Паролі не збігаються"),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationSchema,
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}
        >
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>

            <TextField
                id="firstName"
                name="firstName"
                label="First name"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <FormError text={formik.errors.firstName} />
            ) : null}

            <TextField
                id="lastName"
                name="lastName"
                label="Last name"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <FormError text={formik.errors.lastName} />
            ) : null}

            <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.touched.email && formik.errors.email ? (
                <FormError text={formik.errors.email} />
            ) : null}

            <TextField
                type="password"
                id="password"
                name="password"
                label="Password"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.touched.password && formik.errors.password ? (
                <FormError text={formik.errors.password} />
            ) : null}

            <TextField
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                margin="normal"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <FormError text={formik.errors.confirmPassword} />
            ) : null}

            {isAdmin && (
                <FormControl fullWidth margin="normal">
                    <InputLabel>Role</InputLabel>
                    <Select
                        id="role"
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </FormControl>
            )}

            <TextField
                id="avatar"
                name="avatar"
                label="Avatar URL"
                variant="filled"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.avatar}
                margin="normal"
            />

            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
                Register
            </Button>

            <Box sx={{ marginTop: 2 }}>
                <Typography>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default RegisterPage;
