import React,{useState} from 'react'
import data from '../data/section2'

const Section2 = () => {
    const [cards, setCards] = useState(data)
    return (
        <section className = "section-2  md:grid grid-cols-2 xl:grid-cols-4 ">
            {cards.map((card) => {
                const{id,image,title,desc,link} = card

                return (
                    <article key={id} className = "p-8">
                        <div className = "mb-5">
                            <img src = {image} alt="card"/>
                            <h2 className="font-semibold text-xl mt-2 mb-1">{title}</h2>
                            <p>{desc}</p>
                            <button className= "cursor-pointer text-red-600 font-semibold"> {link} </button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Section2
