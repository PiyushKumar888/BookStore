import { useForm } from "react-hook-form"
import axios from "axios";
import {isRouteErrorResponse} from "react-router-dom";
import toast from "react-hot-toast";
import {useAuth} from "../context/context.jsx";
export const Form = ({val,setval}) =>{
    const [authUser, setAuthUser] = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) =>{
       try{
           const url = val ==='Signup'
               ? "http://localhost:4001/api/user/signup"
               : "http://localhost:4001/api/user/login";
           const userdata =
               val === "Signup"
                   ? {
                       name: data.name,
                       email: data.email,
                       password: data.password,
                   }
                   : {
                       email: data.email,
                       password: data.password,
                   };
           const res = await axios.post(url, userdata)
           if (res.data.success && val === "Signup") {
               toast.success("Signup successful, please login");
               setval("Login");
           }

           if (res.data.success && val === "Login") {
               toast.success("Login successful");

               localStorage.setItem("User", JSON.stringify(res.data.data))
               setAuthUser(res.data.data)
               document.getElementById("my_modal_3").close();
           }

       }catch(e){
           console.log(e)
           toast.error(e.message)
       }

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    {val ==='Signup'? (
                        <>
                            <label className="label">username</label>
                            <input type="text"  className="input w-full bg-white text-black
                            border border-gray-300 placeholder:text-slate-400
                            focus:border-pink-500 focus:outline-none
                           dark:bg-slate-800 dark:text-slate-100
                            dark:border-slate-700 dark:placeholder:text-slate-500"
                                   placeholder="username"
                                   {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-sm text-red-600">This field is required</span>}
                        </>) :null}

                    <label className="label">Email</label>
                    <input type="email"  className="input w-full bg-white text-black
                            border border-gray-300 placeholder:text-slate-400
                            focus:border-pink-500 focus:outline-none
                           dark:bg-slate-800 dark:text-slate-100
                            dark:border-slate-700 dark:placeholder:text-slate-500"
                           placeholder="Email"
                           {...register("email", { required: true })}

                    />
                    <br/>
                    {errors.email && <span className="text-sm text-red-600">This field is required</span>}

                    <label className="label">Password</label>
                    <input type="password"  className="input w-full bg-white text-black
                             border border-gray-300 placeholder:text-slate-400
                             focus:border-pink-500 focus:outline-none
                            dark:bg-slate-800 dark:text-slate-100
                            dark:border-slate-700 dark:placeholder:text-slate-500"
                           placeholder="Password"
                           {...register("password", { required: true })}
                    />
                    <br/>
                    {errors.password && <span className="text-sm text-red-600">This field is required</span>}

                    <button type="submit" className="btn btn-neutral mt-4 w-0.4">{val}</button>
                </fieldset>
            </form>
        </>
    )
}