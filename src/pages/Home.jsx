//! home in cui si ci logga e registra
import { Outlet } from "react-router-dom";

export const token = 123;

export default function Home() {
  let isToken = false
  if(token === 123){
    isToken = true
  }
  return (
    <>
       <h1>Home token 123</h1>
     {isToken && <Outlet />}
  
    </>
  );
}
