export default function Input({ type, id, name, label }) {
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
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name}  />;
    </>
  );
}
