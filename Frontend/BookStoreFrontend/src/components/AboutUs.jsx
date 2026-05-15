
export const AboutUs = () =>{
    return(
        <>
            <section className="w-full px-4 py-16">
                <div
                    className="max-w-4xl mx-auto rounded-xl
        bg-white text-slate-900
        border border-gray-200 shadow-xl shadow-gray-200/70
        dark:bg-slate-900 dark:text-slate-100
        dark:border-slate-700 dark:shadow-black/40
        p-6 sm:p-10 mt-10 "
                >
                    <h1 className="text-3xl font-bold mb-4 ">About Us</h1>

                    <p className="text-slate-600 dark:text-slate-300 leading-7 mb-4">
                        Welcome to Book Store, a simple place for readers to discover books
                        they love. Our goal is to make browsing books feel easy, clean, and
                        enjoyable for every visitor.
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 leading-7 mb-4">
                        We believe books are more than products. They help people learn,
                        imagine, grow, and see the world from new perspectives. This store is
                        built with that idea in mind.
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 leading-7">
                        Whether you are looking for something educational, inspiring, or just
                        fun to read, Book Store is designed to give you a smooth and pleasant
                        experience from the first page to checkout.
                    </p>
                </div>
            </section>
        </>
    )
}