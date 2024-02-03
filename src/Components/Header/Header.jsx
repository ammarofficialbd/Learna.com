import React from 'react'
import Logo from '../../UI/Logo'

function Header() {
  return (
    <div>
    <header id="header">
        <nav class="flex container1">
            <div class="logo flex">
                <div class="logoimg">
                 <Logo/>
                </div>
                <a href="/" title="codingwebstudio">
                    <h1 className=''>EARNA</h1>
                </a>
            </div>
            <div class="navlist flex">
                <ul class="flex">
                    <li><a href="/" class="liactive">Home</a></li>
                    <li> <a href='https://ammarofficialbd.github.io/ammarofficial/' target='_blank'> About Me </a> </li>
                    <li>Courses</li>
                    <li>Notes</li>
                    <li>Blogs</li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Donation</a></li>
                </ul>
            </div>
            <div class="searchdarksub flex">
                <div class="searchbar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <div class="searchclick">
                        <form action="#">
                            <input class="form-control" type="text" placeholder="Search"/>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </form>
                        <div class="tagssec">
                            <h3>Popular tags:</h3>
                            <div class="tegs flex">
                                <a href="/">#Travel<span>,</span></a>
                                <a href="/">#Tech<span>,</span></a>
                                <a href="/">#Movie<span>,</span></a>
                                <a href="/">#Lifestyle<span>,</span></a>
                                <a href="/">#Sport</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="toggle-switch">
                    <input type="checkbox" class="l toggle-checkbox" id="dark-mode-toggle"/>
                    <label class="toggle-label" for="dark-mode-toggle"></label>
                </div>
                <button class="subbtn"><a href="#subform">Subcribe</a></button>
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header