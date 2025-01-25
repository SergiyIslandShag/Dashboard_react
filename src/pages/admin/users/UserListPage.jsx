import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Avatar,
    Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { defaultAvatarUrl } from "../../../settings/urls";

const CreateUserPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleCreateUser = () => {
        const newUser = {
            id: Date.now(), // Use timestamp as ID
            firstName,
            lastName,
            email,
            role,
            password,
            image: image || defaultAvatarUrl,
        };

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

        navigate("/admin/users");
    };

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>Create User</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="First Name"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Last Name"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Role"
                        fullWidth
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Avatar URL"
                        fullWidth
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Avatar sx={{ width: 100, height: 100 }} src={image || defaultAvatarUrl} />
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="contained" onClick={handleCreateUser}>Create User</Button>
            </Box>
        </Box>
    );
};

export default CreateUserPage;
