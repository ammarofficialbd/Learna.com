import React from 'react'

function NotesList() {
  return (
    <div>
        <div> 
            <article>
                <a> 
                    <div className='post_thumbnail'> 
                    <img src="" alt="" />
                    </div>
                    <div className='content_wrap'> 
                    <header className='content_header'> 
                    <h2> </h2>
                    </header>
                    <div className='main_content'> 
                    <p> </p>
                    </div>
                    <footer className='content_footer'> 
                     <div className='content_footer__tag'>
                        <span> HTML </span> 
                     </div>
                     <div className='sep'> </div>
                     <div className='content__author'> </div>
                     <div className='sep'> </div>
                     <time> </time>
                    </footer>
                    </div>

                </a>
            </article>
        </div>
    </div>
  )
}

export default NotesList