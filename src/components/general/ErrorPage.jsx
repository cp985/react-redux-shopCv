import { useEffect, useState } from "react";
import classError from "./style/ErrorPage.module.css";
import { NavLink, useRouteError, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
export default function ErrorPage() {
  const redirectionTime = 5000;
  const [redirectionCount, setRedirectionCount] = useState(
    redirectionTime / 1000,
  );
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if (error.status === 401) {
      let interval = setTimeout(() => {
        setRedirectionCount(redirectionCount - 1);
      }, 1000);

      if (redirectionCount === 0) {
         navigate("/");
      }
      return () => clearInterval(interval);
    }
  }, [redirectionCount, error, navigate]);

  return (
    <div className={classError.errorPage}>
      <h1>ErrorPage</h1>
      <p>{error.message}</p>
      <p>verrai reindirizzato alla home tra {redirectionCount}</p>
      <Button text={"Go to Home"} isLink={true} path={"/"} />
    </div>
  );
}
