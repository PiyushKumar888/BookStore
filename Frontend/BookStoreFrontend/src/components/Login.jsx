import {Form} from "./Form.jsx";
import {useState} from "react";


export const Login = () => {
    const[isLoggedin, setIsLoggedin] = useState("Login");


    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-md bg-white text-slate-900
                             dark:bg-slate-900 dark:text-slate-100
                              border border-gray-200 dark:border-slate-700
                               shadow-xl dark:shadow-black/40">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3
            text-slate-500 hover:text-slate-900
            dark:text-slate-400 dark:hover:text-white">✕</button>
                    </form>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">{isLoggedin}</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Welcome back to Book Store
                        </p>
                    </div>
                    <button
                        type="button"
                        className="mt-4 text-sm text-pink-600 hover:underline dark:text-pink-400"
                        onClick={() => setIsLoggedin(isLoggedin === "Login" ? "Signup" : "Login")}
                    >
                        {isLoggedin === "Login"
                            ? "New here? Create an account"
                            : "Already have an account? Login"}
                    </button>
                    <Form val={isLoggedin} setval={setIsLoggedin} />

                </div>
            </dialog>
        </>
    )
}