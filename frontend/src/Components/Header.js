import React from 'react'
import './Header.css';
import DropdownRender from './Dropdown';

const Header = () => {
    return (
        <div class="grid grid-cols-2 pt-1 pl-3 pb-1 shadow-xl">

            <h1><span class="logo">H</span><span class="fire">&#128293;</span><span class="logo">T T</span><span class="globe">&#127760;</span><span class="logo">PIC</span></h1>
            <div class="flex justify-end">
                <ul class="flex pt-2">
                    <li class="mr-6">
                        <a><DropdownRender></DropdownRender></a>
                    </li>
                </ul>
            </div>
        </div>
      )
    }

export default Header