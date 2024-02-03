import React from 'react'
import Logo from '../../UI/Logo'

function Footer() {
  return (
    <div>
         <footer class="container1 footer">
        <section class="footersec flex">
            <div class="logofooter">
                <div class="logof">
                    <a href="/" class="flex">
                        <Logo/>
                        <h1>EARNA</h1>
                    </a>
                </div>
                <p>Lorem, ipsum dolor sit amet consect adipcing elit. Facere eos ab sit btae excei, prident, aetur mnam
                    qui odio bore nis a minus molia vitae. Maxta hrum sit
                    illo.</p>
                <h4>Address</h4>
                <p>123 Cumilla</p>
                <p>Bangladesh, Hydrabad</p>
            </div>
            <div class="categoriesfooter">
                <h3>Categories</h3>
                <div class="flex">
                    <div class="catefbx">
                        <ul>
                            <li><a href="/">Culture</a></li>
                            <li><a href="/">Travel</a></li>
                            <li><a href="/">Lifestyle</a></li>
                            <li><a href="/">Fashion</a></li>
                            <li><a href="/">Food</a></li>
                            <li><a href="/">Space</a></li>
                        </ul>
                    </div>
                    <div class="catefbx">
                        <ul>
                            <li><a href="/">Culture</a></li>
                            <li><a href="/">Travel</a></li>
                            <li><a href="/">Lifestyle</a></li>
                            <li><a href="/">Fashion</a></li>
                            <li><a href="/">Food</a></li>
                            <li><a href="/">Space</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="newsletterfooter" id="subform">
                <h3>Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa aspernatur Lorem, ipsum dolor.
                </p>
                <form action="" class="flex">
                    <div class="flex">
                        <i class="fa-regular fa-user"></i>
                        <input type="name" placeholder="Your name"/>
                    </div>
                    <div class="flex">
                        <i class="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Email address"/>
                    </div>
                    <button type="submit" class="flex">Subcribe<i class="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
        </section>
        <div class="themeauthor container flex">
            <div class="createdby">
                <h4>&copy; 2023 Created by <a href="https://ammarofficialbd.github.io/ammarofficial//" target="_blank"
                        title="codingwebstudio">rareTech IT</a></h4>
            </div>
            <div class="social flex">
                <div class="socialicon">
                    <i class="fa-brands fa-twitter"></i>
                    <h4>Twitter</h4>
                </div>
                <div class="socialicon">
                    <i class="fa-brands fa-facebook"></i>
                    <h4>Facebook</h4>
                </div>
                <div class="socialicon">
                    <i class="fa-brands fa-square-instagram"></i>
                    <h4>Instagram</h4>
                </div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer