import { NavLink } from "react-router-dom";
import classButton from "./style/Button.module.css";
export default function Button({ text, isLink, path }) {
  if (isLink) {
    return <NavLink className={({isActive})=> isActive ? classButton.active : classButton.button} to={path}>{text}</NavLink>;
  }

  return <button className={classButton.button}>{text}</button>;
}
