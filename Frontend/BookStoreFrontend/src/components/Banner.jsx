import {EmailInput} from "./EmailInput.jsx";
import BookImage from "../../public/BookImage.jpg"
export const Banner = () =>{
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center dark:bg-slate-900 dark:text-white">
                <div className="w-full md:w-1/2 mt-12 md:mt-24 order-2 md:order-1 dark:bg-slate-900 dark:text-white">
                    <h1 className="font-bold text-xl leading-tight dark:bg-slate-900 dark:text-white">
                        Hello, welcome here to learn something
                        <br/>
                        <span className="text-pink-500">new everyday!!!</span>
                    </h1>
                    <p className="mt-14 dark:bg-slate-900 dark:text-white ">
                        Discover courses, explore new skills, and improve your knowledge step by step.
                        Whether you're just beginning your learning journey or looking to sharpen your
                        existing skills, this platform is designed to help you grow with confidence.
                        Learn at your own pace, stay consistent, and build the future you want one day
                        at a time.
                        <br /><br />
                        From programming and technology to creativity and problem solving, every lesson
                        is an opportunity to become better than yesterday. Keep learning, stay curious,
                        and never stop improving yourself.
                    </p>
                    <div className="mt-14 ">
                        <EmailInput/>
                    </div>
                    <div className="mt-14 mb-8">
                        <button className="btn btn-secondary">Secondary</button>
                    </div>

                </div>

                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                    <img src={BookImage} alt="book" className="w-full max-w-md object-cover" ></img>
                </div>
            </div>
        </>
    )
}
