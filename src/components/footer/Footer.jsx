import React from "react"

const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                    <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
                        Ravian.ai
                    </h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500">Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-600"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
                        {["Home", "Work", "Careers", "Contact"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-300"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <div className="basis-1/2 flex flex-col items-end">
                        <p className="text-right">
                        At RAVIAN AI, our vision is to redefine the
                  frontiers of data science by integrating artificial
                  intelligence with human ingenuity.
                        </p>
                        <img
                            className="w-24 px-4 py-1 mt-8 bg-blue-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
