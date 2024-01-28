import React from "react";
import { Link, Outlet } from "react-router-dom";
export function LayOut(){
    return(
        <>
        <h1>hello</h1>
        <Outlet></Outlet>
        <Link to="/test">tet</Link>
        </>
    )
}