

export const ContactUS = () => {
    return (
        <div className="w-full px-4 py-16">
            <form
                className="w-full max-w-lg mx-auto rounded-xl
        bg-white text-slate-900
        border border-gray-200 shadow-xl shadow-gray-200/70
        dark:bg-slate-900 dark:text-slate-100
        dark:border-slate-700 dark:shadow-black/40
        p-6 sm:p-8 mt-10"
            >
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Send us a message and we’ll get back to you soon.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="form-control w-full">
                        <label className="label">
              <span className="label-text text-slate-700 dark:text-slate-300">
                Name
              </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full
              bg-white text-slate-900 border-gray-300
              placeholder:text-slate-400
              focus:border-pink-500 focus:outline-none
              dark:bg-slate-800 dark:text-slate-100
              dark:border-slate-700 dark:placeholder:text-slate-500"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
              <span className="label-text text-slate-700 dark:text-slate-300">
                Email
              </span>
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="input input-bordered w-full
              bg-white text-slate-900 border-gray-300
              placeholder:text-slate-400
              focus:border-pink-500 focus:outline-none
              dark:bg-slate-800 dark:text-slate-100
              dark:border-slate-700 dark:placeholder:text-slate-500"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
              <span className="label-text text-slate-700 dark:text-slate-300">
                Message
              </span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered min-h-28 w-full
              bg-white text-slate-900 border-gray-300
              placeholder:text-slate-400
              focus:border-pink-500 focus:outline-none
              dark:bg-slate-800 dark:text-slate-100
              dark:border-slate-700 dark:placeholder:text-slate-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-6 w-full">
                    Send Message
                </button>
            </form>
        </div>
    );
};
