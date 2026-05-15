import { Link ,NavLink} from "react-router-dom";
import {Search} from "./Search.jsx";
import {ThemeController} from "./ThemeController.jsx";
import {useEffect, useState} from "react";
import {Login} from "./Login.jsx";
import {useAuth} from "../context/context.jsx";
export const NavBar = () => {


    const [sticky, setSticky] = useState();
    const [authUser, setAuthUser] = useAuth()
    // const [verified, setVerified] = useState(false);
    const Loginbutton = authUser?"Logout":"Login";
    useEffect(() => {
         const handleScroll = () => {
             if (window.scrollY > 50){
                 setSticky(true);
             }
             else{
                 setSticky(false);
             }
         }
         window.addEventListener("scroll", handleScroll);

         return () => {
             window.removeEventListener("scroll", handleScroll);
         }

    },[])
    return (
        <>
            <div className={`navbar   dark:bg-slate-900 dark:text-white  bg-base-100 shadow-sm px-8 mx-auto fixed scroll-shadow z-10  border-b border-gray-300 dark:border-gray-700
            ${sticky ?"transition-shadow duration-300 shadow-md" : ""}
            `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dark:bg-slate-900 dark:text-white dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/course"}>Course</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold">
                        📚 Book Store
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-bold">
                            <li><Link className="dark:hover:bg-slate-800" to={"/"}>Home</Link></li>
                            <li><Link className="dark:hover:bg-slate-800" to={"/course"}>Course</Link></li>
                            <li><Link className="dark:hover:bg-slate-800" to={"/about"}>About</Link></li>
                            <li><Link className="dark:hover:bg-slate-800" to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="dark:hover:bg-slate-800    mx-4 hidden md:block">
                        <Search />
                    </div>
                     <div className="p-4 ml-2">
                         <ThemeController/>
                     </div>
                    <button className="btn btn-primary"
                    onClick={()=>{
                        if (authUser){
                            localStorage.removeItem("User");
                            setAuthUser(undefined);
                        }
                        else{
                            document.getElementById("my_modal_3").showModal()}
                    }}
                    >
                        {Loginbutton}
                    </button>
                    <Login/>

                </div>
            </div>
        </>
    )
}