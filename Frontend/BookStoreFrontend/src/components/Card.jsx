

export const Card = ({book}) => {
        return(
            <>
                <div className="card bg-base-100 w-full shadow-sm card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:text-white
                 ">
                    <figure>
                        <img
                            className="h-56 w-full object-cover"
                            src={book.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body dark:bg-slate-900 dark:text-white">
                        <h2 className="card-title">
                            {book.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{book.title}</p>
                        <div className="card-actions justify-end dark:bg-slate-900 dark:text-white">
                            <div className="badge badge-outline">{book.price}</div>
                            <div className="badge badge-outline hover:bg-pink-600">BuyNow</div>
                        </div>
                    </div>
                </div>
            </>
        )
}