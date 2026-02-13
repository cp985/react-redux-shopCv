import { Form } from "react-router-dom";
import classFormFilter from "./style/FormFilter.module.css";
import Input from "./Input";
import Button from "./Button";

export default function FormFilter() {
  return (
    <Form className={classFormFilter["form-filter"]} method="get" action="/">
      <div className={classFormFilter.filterContainer2}>
        <Input
          classOf="input-filter2"
          type="checkbox"
          id="rarità"
          name="rarità"
          label="Rarità"
          hidden
        />
        <div className={classFormFilter.filter2}>
          <Input classOf=" " type="rarità" id="rarità" name="rarità" label="Leggendario" hidden />
        </div>
      </div>

      <Input
        classOf=" input-filter"
        type="checkbox"
        id="classe"
        name="classe"
        label="Classe"
        hidden
      />
      <Input
        classOf=" input-filter"
        type="checkbox"
        id="prezzo"
        name="prezzo"
        label="Prezzo"
        hidden
      />
    </Form>
  );
}
