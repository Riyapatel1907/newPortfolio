import React from 'react'
import './Home.css'
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiNodedotjs } from "react-icons/si";
import pic from './../../images/riya.png'
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <>
    <div className='head' name='Home'>
        <div className='left'>
            <h4>Welcome In My Feed</h4>
            <p className='header'>Hello, I'm a
                      <ReactTyped
                strings={[" Developer", " Coder", " Programmer"]}
                typeSpeed={30}
                backSpeed={40}
                loop={true}
                className='mx-1'
                />
            </p>
            <p className='para'>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
            <div className='d-flex justify-content-between fw-bold'>
                <div>
                    <span>Available On</span>
                    <a href='https://www.linkedin.com/in/patel-riya-b75187292'>
                    <p><IoLogoLinkedin size={24}/></p></a>
                </div>
                <div className='logo fw-bold'>
                    <span>Skills</span>
                    <p><BiLogoMongodb size={24}/><SiExpress size={24} /><DiReact size={24}/><SiNodedotjs size={24}/></p>
                </div>
            </div>
        </div>
        <div className='right'>
            <img src={pic} alt='pic' ></img>
        </div>
    </div>
    <hr />
    </>
  )
}
