import classInput from "./style/Input.module.css";
export default function Input({classOf,hidden, type, id, name, label }) {
  if (type === "textarea") {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} name={name}></textarea>;
      </>
    );
  }
  return (
    <>
      <label className={classInput[classOf]} htmlFor={id}>{label}</label>
      <input className={classInput[classOf]} hidden={hidden} type={type} id={id} name={name}  />
    </>
  );
}
