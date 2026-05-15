
import {Card} from "./Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


export const Course = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        const getBooks = async () => {
            try {
                const res = await axios.get("https://bookstore-2-juvs.onrender.com/api/books");
                setBooks(res.data.data);
            } catch (e) {
                console.log(e)
            }
        }
        getBooks()


    },[])
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-16 dark:bg-slate-900 dark:text-white " >
                <div className="mt-10 text-center space-y-5 dark:bg-slate-900 dark:text-white">
                    <h1 className="text-3xl md:text-4xl font-bold">We are delighted to have you <span className="font-bold text-pink-500">Here!!</span></h1>
                    <p className="text-black max-w-3xl mx-auto leading-8 dark:bg-slate-900 dark:text-white">
                        Discover a wide range of courses designed to help you learn, grow, and
                        build valuable skills for your future. Explore high-quality content,
                        improve your knowledge step by step, and continue your learning journey
                        with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14" >
                    { books.map((book)=>(
                        <Card key={book._id} book={book} />
                    ))

                    }
                </div>
            </div>
        </>
    )
}
