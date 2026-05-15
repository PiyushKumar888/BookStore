
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Card} from "./Card.jsx"
import {useEffect, useState} from "react";
import axios from "axios";
import * as constants from "node:constants";



export const FreeBook = () =>{
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        const getBooks = async () => {
            try {
                const res = await axios.get(`"https://bookstore-1-ltqp.onrender.com/api/books"`);
                console.log("res"+res);
                console.log("res.data="+res.data);
                setBooks(res.data.data);
            } catch (e) {
                console.log(e)
            }
        }
      getBooks();

    },[])

    const freebook =  books.filter((book)=>(book.category==="Free"))
    console.log(freebook)

    return (
        <>
            <div className="mt-20 px-6 py-10 bg-base-200/30 rounded-3xl dark:bg-slate-900 dark:text-white">
                <div className="space-x-3 w-full">
                    <h2 className="font-bold text-xl ml-14">Free Course</h2>
                    <p className="ml-14">
                        Explore a collection of free courses designed to help you learn new skills,
                        improve your knowledge, and start your journey without any cost. Learn anytime,
                        anywhere, and grow step by step with high-quality learning resources.
                    </p>
                </div>
                <div className="px-10 mt-8

                ">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

                        {freebook.map((book) => (
                           <SwiperSlide>
                               <Card key={book._id} book={book} />
                           </SwiperSlide>
                        ))

                        }
                    </Swiper>
                </div>
            </div>

        </>
    )
}


