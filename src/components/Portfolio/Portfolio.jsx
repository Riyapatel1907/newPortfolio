import React from 'react'
import './Portfolio.css'
import mongoDB from './../../images/mongo.png'
import react from './../../images/react.png'
import node from './../../images/node.png'
import js from './../../images/js.jpg'
import next from './../../images/next.png'

export const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: 'mongoDB'
        },
        {
            id: 2,
            logo: react,
            name: 'React'
        },
        {
            id: 3,
            logo: node,
            name: 'Node'
        },
        {
            id: 4,
            logo: js,
            name: 'Javascript'
        },
        {
            id: 5,
            logo: next,
            name: 'Next'
        },
    ]

  return (
    <div name='Portfolio' className='mt-5'>
        <h1 className='head'>Portfolio</h1>
        <span className='skip'>Featured Projects</span>
        <div className='count'>
            {
                cardItem.map(({id,logo,name}) => (
                    <div key={id} className='card'>
                        <img src={logo} alt='logo' width={80} height={80} className='p-2 border-black rounded-5'/>
                        <div className='fw-bold'>{name}</div>
                        <p>A paragraph is a series of sentences that are organized and coherent.</p>
                        <div>
                            <button className='bg-primary'>Video</button>
                            <button className='bg-success'>Source code</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
