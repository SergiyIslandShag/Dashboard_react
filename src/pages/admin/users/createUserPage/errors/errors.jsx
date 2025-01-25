import React from "react";
import { Typography } from "@mui/material";

export const FormError = ({ text }) => (
    <Typography color="error" variant="body2">
        {text}
    </Typography>
);
