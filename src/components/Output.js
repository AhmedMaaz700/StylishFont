import React from 'react'
import '../styles/output.css'
import data from '../fontjson'

const Output = ({input}) => {
  return (
    <section className='output'>
        <div className='container'>
            <h2>{data.heading}</h2>
            {data.outputCards.map((card, i) => (
                <div className='cards' key={i}>
                    <span>{card.fontName}</span>
                    <p style={{fontFamily: `${card.fontFamily}`}}>{card.prefix} {input ? input : 'Preview'} {card.postfix}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Output
