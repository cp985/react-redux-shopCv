import { Outlet } from "react-router-dom";
import MainNav from "../UI/MainNav";
import MainPageShop from "../../pages/MainPageShop";

import './style/WrapperLayoutMainNav.module.css'
export default function WrapperLayoutMainNav() {

    return (
        <>
            <h1>WrapperLayoutMainNav</h1>
            <MainNav />
            <Outlet />
        </>
    )
}