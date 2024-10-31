import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CModel from "../Portal/CModel";

const Login = () => {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: {
      errors: { userName, password },
    },
  } = useForm({
    mode: "onTouched",
  });

  let LoginEmp = (data) => {
    axios({
      method: "POST",
      url: "https://api.escuelajs.co/api/v1/auth/login",
      data: {
        email: data?.userName,
        password: data?.password,
      },
    })
      .then((r) => {
        sessionStorage.setItem("token", r?.data?.access_token);
        toast.success("Login Successfully");
        navigate("/routing");
      })
      .catch((err) => {
        console.warn(err);
        toast.error("Invalid Credentails!");
      });
  };

  return (
    <div className="col-md-6 m-auto shadow p-3 mb-5 bg-body rounded mt-5">
      <CModel />
      <h1 className="text-center">Login Form</h1>
      <form onSubmit={handleSubmit(LoginEmp)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="text-danger">{userName?.message}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <p className="text-danger">{password?.message}</p>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary col-md-10">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
