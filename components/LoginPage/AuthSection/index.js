import { api } from "../../../utils";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Context } from "../../../context/Context";
import { useContext, useState, useRef } from "react";

import {
    LinkStyled,
    AuthContainer,
    AuthWrapper,
    AuthHeader,
    AuthEmailInput,
    AuthPasswordInput,
    AuthLoginButton,
    AuthRegisterButton,
} from "./AuthSectionElements";

function AuthSection() {
    const userRef = useRef();
    const router = useRouter();
    const passwordRef = useRef();

    const [error, setError] = useState(false);
    const { dispatch, isFetching } = useContext(Context);

    // React hooks form
    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });

    // Verify via axios using API
    const onSubmit = async (data) => {
        dispatch({ type: "LOGIN_START" });
        try {
            const email = data.email;
            const password = data.password;
            const response = await api.post("/auth/login", {
                email,
                password,
            });
            // Set user to persist across pages
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            // Return to mainpage on login (or some other login page in future)
            router.replace("/");
        } catch (err) {
            // If login details are incorrect
            dispatch({ type: "LOGIN_FAILURE" });
            setError(true);
        }
    };

    return (
        <AuthContainer>
            <AuthWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AuthHeader>Email</AuthHeader>
                    <AuthEmailInput
                        type="text"
                        placeholder="Email"
                        ref={userRef}
                        {...register("email", {
                            required: true,
                        })}
                    />
                    <AuthHeader>Password</AuthHeader>
                    <AuthPasswordInput
                        placeholder="Password"
                        type="password"
                        ref={passwordRef}
                        {...register("password", {
                            required: true,
                        })}
                    />
                    {error && (
                        <span style={{ color: "red", fontSize: "0.9rem" }}>
                            Please ensure that your login details are correct.
                        </span>
                    )}
                    <AuthLoginButton type="submit" disabled={isFetching} />
                    <LinkStyled href="/register">
                        <AuthRegisterButton>Register</AuthRegisterButton>
                    </LinkStyled>
                </form>
            </AuthWrapper>
        </AuthContainer>
    );
}

export default AuthSection;
