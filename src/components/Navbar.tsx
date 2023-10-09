import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";

type Props = {}

const Navbar = (props : Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      {/* fixed : position fix
        top: 0
        z-index: 30 - being on top
        w-full : entire width 
        py-6 : padding 6 level
      */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>

        {/* w-5/6 : 5/6% of width */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img 
              alt="logo"
              src={Logo}
            />

            {/* right side of navbar */}
            <div className={`${flexBetween} w-full`}>

              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar