import React from 'react'
import '../styles/input.css'

const Input = ({func, input}) => {
  return (
    <section className='input'>
        <div className='container'>
            <div className='inputdiv'>
                <textarea 
                    className='textarea' 
                    placeholder='✏️ Type text here...' 
                    value={input}
                    onChange={(e)=>func(e.target.value)}
                />
                <button className='close' onClick={()=>func('')}>X</button>
            </div>
        </div>
    </section>
  )
}

export default Input
