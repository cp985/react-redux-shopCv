//! home in cui si ci logga e registra
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import LogInForm from "../components/UI/LogInForm";
import { logIn, getToken} from "../util/httpRequest";
import { DUMMY_USERS } from "../util/dataDummy";

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const token = getToken();

  const { mutate, isLoading, isError, error, data } = useMutation({
    mutationFn: ({ DUMMY_USERS, user }) => logIn(DUMMY_USERS, user),
    onSuccess: (response) => {
      console.log("onSuccess data", response);
    localStorage.setItem("token", response.id);
    localStorage.setItem("expires", Date.now());
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

      {!token && (
        <LogInForm
          subscribe={isSubscribed}
          toggleSubscribe={toggleSubscribe}
          submitHandler={submitHandler}
        />
      )}
      {token  && <Outlet /> }
    </>
  );
}


export function loaderToken() {
  return getToken();
}