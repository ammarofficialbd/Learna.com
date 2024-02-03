import React from 'react'
import Ecard from './Ecard'


function Editor() {
  return (
    <div>
         <section className="editorcards container flex">
            <Ecard/>
            <div className="showmorepost flex">
                <a href="/">Show More Posts<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </section>
    </div>
  )
}

export default Editor