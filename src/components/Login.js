import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {
                response.json().then((data) => {
                    localStorage.setItem("token", data.token);
                    history.push("/");
                });
            })
            .catch((data) => alert(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">email</label>
            <input
                id="email"
                className="form-control"
                {...register("email", {
                    required: "required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                    },
                })}
                type="email"
            />
            {errors.email && <span role="alert">{errors.email.message}</span>}
            <label htmlFor="password">password</label>
            <input
                id="password"
                className="form-control"
                {...register("password", {
                    required: "required",
                    minLength: {
                        value: 5,
                        message: "min length is 5",
                    },
                })}
                type="password"
            />
            {errors.password && (
                <span role="alert">{errors.password.message}</span>
            )}
            <input type="submit" />
        </form>
    );
};

export default Login;
