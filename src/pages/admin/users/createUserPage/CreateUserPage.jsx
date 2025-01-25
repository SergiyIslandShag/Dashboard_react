import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormError } from './errors/errors'; 
import { useNavigate } from "react-router-dom";

const CreateUserPage = () => {
  const navigate = useNavigate();

  const formHandler = (values) => {
    const users = localStorage.getItem("users");
    if (!users) {
      localStorage.setItem("users", JSON.stringify([{ ...values, id: 1 }]));
    } else {
      const array = JSON.parse(users);
      values.id = array[array.length - 1].id + 1;
      values.role = values.role || "user";
      array.push(values);
      localStorage.setItem("users", JSON.stringify(array));
    }

    navigate("/admin/users");
  };

  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };

  const yupValidationSchema = Yup.object({
    firstName: Yup.string().max(50, "Максимум 50 символів"),
    lastName: Yup.string().max(50, "Максимум 50 символів"),
    email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
    password: Yup.string().required("Пароль обов'зковий").min(6, "Пароль повинен містити не менше 6 символів"),
    confirmPassword: Yup.string().required("Підтвердіть пароль").oneOf([Yup.ref("password")], "Паролі не збігаються"),
  });

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: formHandler,
    validationSchema: yupValidationSchema,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} className="form-container">
      <Typography variant="h4">Створити нового користувача</Typography>

      <Box className="form-control">
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          variant="filled"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && <FormError text={formik.errors.firstName} />}
      </Box>

      <Box className="form-control">
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="filled"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && <FormError text={formik.errors.lastName} />}
      </Box>

      <Box className="form-control">
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
        />
        {formik.touched.email && formik.errors.email && <FormError text={formik.errors.email} />}
      </Box>

      <Box className="form-control">
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
        />
        {formik.touched.password && formik.errors.password && <FormError text={formik.errors.password} />}
      </Box>

      <Box className="form-control">
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
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <FormError text={formik.errors.confirmPassword} />}
      </Box>

      <Box className="form-control">
        <TextField
          select
          id="role"
          name="role"
          label="Role"
          variant="filled"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.role}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </TextField>
      </Box>

      <Box className="form-control">
        <Button type="submit" variant="contained" fullWidth>
          Створити користувача
        </Button>
      </Box>
    </Box>
  );
};

export default CreateUserPage;
