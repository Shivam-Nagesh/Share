import { NavLink , Outlet } from "react-router-dom";

export const HomeLayout = ()=>{
    return(
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Career</NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}