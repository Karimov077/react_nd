import logo from "../../assets/navbar_logo.svg"
import soch_2 from "../../assets/Shape.png"
import "./Header.css"

function Header() {
  return (
    <header className="bg-[#161719]">
      <nav className="container h-20 gap-8 flex items-center relative">
        <div className="shoch absolute right-[-120px] top-[-30px] max-[1380px]:right-0">
          <img src={soch_2 || "/placeholder.svg"} alt="" />
        </div>

        <div className="logoo flex-1">
          <img src={logo || "/placeholder.svg"} alt="" className="logo-animation" />
        </div>

        <div className="button text-[#5D5BD5] flex gap-7">
          <button className="signin-btn">
            <span>Sign in</span>
          </button>
          <button className="signup-btn px-5 py-2 bg-[#6661F5] text-white border-none">
            <span>Sign up</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
