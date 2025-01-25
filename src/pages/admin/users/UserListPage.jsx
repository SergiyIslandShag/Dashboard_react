import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import usersJson from "./users.json";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { defaultAvatarUrl } from "../../../settings/urls";

const UsersListPage = () => {
    const [users, setUsers] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    useEffect(() => {
        const json = localStorage.getItem("users");

        if (!json) {
            localStorage.setItem("users", JSON.stringify(usersJson));
            setUsers(usersJson);
        } else {
            const data = JSON.parse(json);
            setUsers(data);
        }
    }, []);

    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setOpenDeleteDialog(true);
    };

    const handleDeleteConfirm = () => {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== userToDelete.id)
        );
        localStorage.setItem(
            "users",
            JSON.stringify(users.filter((user) => user.id !== userToDelete.id))
        );
        setOpenDeleteDialog(false);
    };

    const handleDeleteCancel = () => {
        setOpenDeleteDialog(false);
    };

    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                Users List
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Avatar</TableCell>
                            <TableCell align="center">First name</TableCell>
                            <TableCell align="center">Last name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center">Password</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">{user.id}</TableCell>
                                <TableCell align="center">
                                    <Avatar
                                        sx={{ margin: "auto" }}
                                        alt="Remy Sharp"
                                        src={user.image ? user.image : defaultAvatarUrl}
                                    />
                                </TableCell>
                                <TableCell align="center">{user.firstName}</TableCell>
                                <TableCell align="center">{user.lastName}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.role}</TableCell>
                                <TableCell align="center">{user.password}</TableCell>
                                <TableCell align="center">
                                    <Link to={`user/${user.id}`}>
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                    <IconButton onClick={() => handleDeleteClick(user)}>
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="center" marginTop={2}>
                <Link to="user">
                    <Button variant="contained">Create User</Button>
                </Link>
            </Box>

            <Dialog open={openDeleteDialog} onClose={handleDeleteCancel}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete user{" "}
                        <strong>{userToDelete?.firstName} {userToDelete?.lastName}</strong>?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UsersListPage;
