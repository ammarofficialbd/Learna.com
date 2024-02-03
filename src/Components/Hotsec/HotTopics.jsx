import React from 'react'
import Hcard from './Hcard'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function HotTopics() {
  return (
    <div>
        <section className="container hottopicssec flex">
            <div className="hottopics">
                <h3>Hot topics</h3>
                <p>Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</p>
                <div className="lrbtn">
                    <button className="leftbtn"><IoIosArrowBack /></button>
                    <button className="rightbtn"><IoIosArrowForward /></button>
                </div>
            </div>
            <div className="hotcards flex">
                
               <Hcard/>
            
            </div>
        </section>
    </div>
  )
}

export default HotTopics