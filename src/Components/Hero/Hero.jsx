import React from 'react'
import ai from "./../../img/ai-man.png"
import Pattern from '../../UI/Pattern'
function Hero() {
  return (
    <>
 <section class="biosec container flex">
            <div class="bio">
                <h4>Hello Everyone!</h4>
                <h1>I'm
                    <div>
                        <span class="multi-text"></span>
                        <span class="blink"></span>
                    </div>
                </h1>
                <p>Welcome to my corner of the internet! I'm Coder, a passionate web developer.experience in
                    crafting dynamic and visually stunning websites, My journey in the world of coding has led me to
                    unravel the potential of languages like HTML, CSS, JavaScript, Next js and beyond. </p>
                <div class="emailsub">
                    <form action="#" class="flex">
                        <input type="email" name="email" id="email" placeholder="Type your email address"/>
                        <button type="submit">Subcribe</button>
                    </form>
                </div>

            </div>
            <div class="bioimg">
                <img src={ai} alt=""/>
                <Pattern/>
            </div>
        </section>
    </>
  )
}

export default Hero