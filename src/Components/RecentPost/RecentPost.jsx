import React from 'react'
import PCard from './Pcard/PCard'
import Ppost from './Pcard/Ppost'

function RecentPost() {
  return (
    <>
         <section className="recentpostsec container flex">
            <div className="recentposts">
                <div className="bigtitle">
                    <h2 className="textcolor">Recent posts</h2>
                    <p>Don't miss the latest trends</p>
                </div>
                <div className="posts">
                   {/* Popular Card */}
                   <PCard/>
                </div>
                {/* Next Button */}
                <div style={{position:'relative'}}> <button style={{position: 'absolute', right: '0', bottom: '1.2rem'}}> Next </button> </div>
            </div>
            <div className="postslider">
                <div className="popularposts">
                    <div className="poptitle">
                        <h3>Popular Posts</h3>
                    </div>
                    <div className="populposts">

                       <Ppost/>
                    </div>
                </div>
                <div className="popularposts">
                    <div className="poptitle">
                        <h3>Last Comment</h3>
                    </div>
                    <div className="postcomments">
                        <div className="comment">
                            <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                            </p>
                            <div className="authorcomment flex">
                                <img src="/img/author.png" alt=""/>
                                <div className="authortimename">
                                    <h5>Coder</h5>
                                    <span>25 August 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                            </p>
                            <div className="authorcomment flex">
                                <img src="/img/author.png" alt=""/>
                                <div className="authortimename">
                                    <h5>Coder</h5>
                                    <span>25 August 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <p><span>"</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis
                                rerum suscipit quisquam quaerat odio repudiandae perspiciatis veritatis?<span>"</span>
                            </p>
                            <div className="authorcomment flex">
                                <img src="/img/author.png" alt=""/>
                                <div className="authortimename">
                                    <h5>Coder</h5>
                                    <span>25 August 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RecentPost