import React from 'react'
import Logo from "../../assets/navbar_logo.svg"
import linkedin from "../../assets/lenkedin.svg";
import instagram from "../../assets/logo-instagram.svg";
import facebok  from "../../assets/facebok.svg";
import twitter from "../../assets/twiter.svg";
import git from "../../assets/git.svg";

const Footer = () => {
  return (
   <footer>
    <div className="container mt-[100px]">
        <div className='flex gap-6 max-[688px]:flex-wrap max-[688px]:gap-12'>
            <div className="logo flex-1 flex-col flex gap-5">
                <img className='w-[40px]' src= {Logo}alt="" />
                <p className='text-[#949CA6] max-[750px]:text-nowrap'>Lorem ipsum is placeholder text commonly <br /> used in the graphic, print, and publishing <br /> industries for previewing layouts and visual <br /> mockups.</p>
            </div>
            <ul className='flex flex-col gap-3'>
                <span className='text-white'>Product</span>
                <li>
                    <a className='text-[#949CA6]' href="#">Web Studio</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">DynamicBox Flex</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Programming Forms</a>
                </li>
            </ul>

            <ul className='flex flex-col gap-3'>
                <span className="text-white">Resources</span>
                <li>
                    <a className='text-[#949CA6]' href="#">Nostrud exercitation</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Visual mockups</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Nostrud exercitation</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Visual mockups</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Nostrud exercitation</a>
                </li>
            </ul>

            <ul className='flex flex-col gap-3'>
                <span className='text-white'>Company</span>
                <li>
                    <a className='text-[#949CA6]' href="#">Consectetur adipiscing</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Labore et dolore</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Consectetur adipiscing</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Labore et dolore</a>
                </li>
                <li>
                    <a className='text-[#949CA6]' href="#">Consectetur adipiscing</a>
                </li>
            </ul>
        </div>
        <div className='mt-[80px] flex justify-between pr-[25px] gap-5 flex-wrap mb-[80px]'>
            <p className='text-[#949CA6] flex gap-2'>Made by <p className='text-white'> Cruip.</p> All right reserved</p>
            <div className="icons flex gap-4 mr-5">
                <img src={twitter} alt="" />
                <img src={git} alt="" />
                <img src={facebok} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>

        </div>
    </div>
   </footer>
  )
}

export default Footer
