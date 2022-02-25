import React from 'react'

const NewsList = () => {
    return (
        <div class="grid grid-cols-2 pt-1 pl-1 pb-1 shadow-xl">

            <img class="h-10" src="https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg"></img>
            <div class="flex justify-end">
                <ul class="flex pt-2">
                    <li class="mr-6">
                        <a class="text-blue-500 hover:text-blue-800" href="#">Button</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-blue-500 hover:text-blue-800" href="#">Button</a>
                    </li>
                </ul>
            </div>
        </div>
      )
    }

export default NewsList