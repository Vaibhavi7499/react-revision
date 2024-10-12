import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { EmpDataContext } from "../../../context/EmpDataContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./EmpForm.scss";

const EmpForm = () => {
  let { getEmpData, empData, updateEmp } = useContext(EmpDataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "kishor",
      email: "k@gmail.com",
      phoneNumber: "",
    },
  });

  const { register, handleSubmit, formState, setFocus, setValue } = form;
  const { errors, isValid, touchedFields, isSubmitted } = formState;
  const { name, email, phoneNumber } = errors;


  function update() {
    let obj = empData.find((e) => {
      return e?.id === id;
    });
    setValue("name", obj?.name);
    setValue("email", obj?.email);
    setValue("phoneNumber", obj?.phoneNumber);
  }

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  useEffect(() => {
    update();
  }, [id]);

  let EmpFormData = (data) => {
    if (id) {
      let updateObj = {
        id,
        ...data,
      };
      updateEmp(updateObj);
      toast("Employee updated successfully");
      setTimeout(() => {
        navigate("/routing/emplist");
      }, 700);
    } else {
      let newData = {
        ...data,
        id: uuidv4(),
      };
      getEmpData(newData);
      toast("Employee added successfully");
      setTimeout(() => {
        navigate("/routing/emplist");
      }, 700);
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 m-auto">
        <h1 className="text-center">Employee Form</h1>
        <hr />
        <form onSubmit={handleSubmit(EmpFormData)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <div className="form-text text-danger">
              {(touchedFields.name && name?.message) || isSubmitted
                ? name?.message
                : ""}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid format",
                },
              })}
            />
            <div className="form-text text-danger">
              {(touchedFields.email && email?.message) || isSubmitted
                ? email?.message
                : ""}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Number is required",
                },
              })}
            />
            <div className="form-text text-danger">
              {(touchedFields.phoneNumber && phoneNumber?.message) ||
              isSubmitted
                ? phoneNumber?.message
                : ""}
            </div>
          </div>
          <div className="text-center mt-2">
            <button type="submit" className="btn btn-primary col-md-12">
              {id ? "Update" : "Add"} Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpForm;
