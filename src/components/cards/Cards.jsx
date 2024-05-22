import React from "react"
import Card from "./Card"

const Cards = () => {
    const content = [
        { header: "About us", title: "At RAVIAN, we are dedicated to transforming the landscape of data analytics through innovation and cutting-edge technology" },
        { header: "Get In Touch", title: "Let's get to it, together. " },
    ]

    return (
        <div className="w-full ">
            <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
                <Card
                    width={"basis-1/3"}
                    start={false}
                    para={true}
                    hover={false}
                    header={content[0].header}
                    title={content[0].title}
                />
                <Card
                    width={"basis-2/3"}
                    start={true}
                    para={false}
                    hover={true}
                    header={content[1].header}
                    title={content[1].title}
                />
            </div>
        </div>
    )
}

export default Cards
