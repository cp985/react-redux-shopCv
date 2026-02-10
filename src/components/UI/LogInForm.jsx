import { Form } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
export default function LogInForm({
  submitHandler,
  subscribe,
  toggleSubscribe,
}) {
  function formData(e) {
    const data = new FormData(e.currentTarget);
    const datiForm = Object.fromEntries(data.entries());
    submitHandler(datiForm);
  }

  return (
    <>
      <Form noValidate onSubmit={formData}>
        <h3>{subscribe ? "Registrati" : "Accedi"}</h3>
        <Input type="email" id="email" name="email" label="Email" />
        <Input type="password" id="password" name="password" label="Password" />
        <Button text={subscribe ? "Registrati" : "Accedi"} />
        <div>
          <p>{subscribe ? "Hai già un account?" : "Non hai un account?"}</p>
          <Button
            type="button"
            classOf="second"
            text={subscribe ? "Accedi" : "Registrati"}
            onClick={toggleSubscribe}
          />
        </div>
      </Form>
    </>
  );
}
