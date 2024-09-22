import logo from "../assets/websitelogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <>
        <nav className="bg-black-800 mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#"><img src={logo} className="mx-2 w-10 h-10" alt="logo" /></a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a className="hover:text-blue-400 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(0,112,244,1)] transition-all duration-300" href="https://www.linkedin.com/in/yash-parmar-394460222/" target="_blank"><FaLinkedin /></a>
            <a className="hover:text-violet-500 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(139,92,246,1)] transition-all duration-300" href="https://github.com/Yashpsct010 " target="_blank"><FaGithub /></a>
            <a className="hover:text-white hover:scale-125 hover:drop-shadow-[0_0_20px_white] transition-all duration-300" href="https://x.com/Yashp010" target="_blank"><FaSquareXTwitter /></a>
            <a className="hover:text-pink-500 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(255,182,193,1)] transition-all duration-300" href="https://www.instagram.com/yashpsct010/" target="_blank"><FaInstagram /></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar