//! home in cui si ci logga e registra
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import LogInForm from "../components/UI/LogInForm";
import { logIn } from "../util/httpRequest";
import { DUMMY_USERS } from "../util/dataDummy";

export default function Home() {
  const [token, setToken] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const { mutate, isLoading, isError, error, data } = useMutation({
    mutationFn: ({ DUMMY_USERS, user }) => logIn(DUMMY_USERS, user),
    onSuccess: (response) => {
      console.log("onSuccess data", response);
    },
  });

  function toggleSubscribe() {
    setIsSubscribed(!isSubscribed);
  }

  function submitHandler(user) {
    mutate({ DUMMY_USERS: DUMMY_USERS, user: user });
  }

  return (
    <>
      <h1>Home token {data && data.password}</h1>
      {isError && <p>{error.message}</p>}

      {!data && (
        <LogInForm
          subscribe={isSubscribed}
          toggleSubscribe={toggleSubscribe}
          submitHandler={submitHandler}
        />
      )}
      {token || data?.password === "admin" ? <Outlet /> : null}
    </>
  );
}
