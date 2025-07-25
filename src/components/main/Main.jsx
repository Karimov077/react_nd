import { CARD, CLIENT } from "../../static/index"
import collaction_1 from "../../assets/Illustration.png"
import collaction_2 from "../../assets/Illustration (1).png"
import collaction_3 from "../../assets/Illustration (2).png"
import Ok from "../../assets/Ok.svg"
import Soch from "../../assets/soch_3.png"
import "./Main.css" // CSS faylini import qildim

function Main() {
  return (
    <main className="main mt-[80px]">
      <section className="main">
        <div className="container flex gap-[50px] flex-wrap justify-between border-b-2 border-[#34363A] pb-[80px] max-[1106px]:justify-around max-[1106px]:gap-[30px] cards-container">
          {CARD?.map((item, index) => (
            <div
              key={index}
              className="card flex gap-6 p-2.5 flex-col w-[325px] text-center items-center max-[710px]:w-[100%] feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="imag card-image">
                <img
                  className="max-[710px]:w-[120px] max-[500px]:w-[80px]"
                  src={item.img || "/placeholder.svg"}
                  alt=""
                />
              </div>
              <span className="text-white text-2xl font-bold max-[710px]:text-[32px] max-[500px]:text-[25px] card-title">
                {item.span}
              </span>
              <p className="text-[#949CA6] max-[710px]:text-[20px] max-[500px]:text-[14px] card-description">
                {item.p}
              </p>
            </div>
          ))}
        </div>

        <div className="container flex justify-center mt-[100px] center-section">
          <div className="desc flex gap-7 flex-col text-center items-center">
            <button className="px-4 py-2 font-bold rounded-3xl bg-[#D3F4D8] text-[#609F6E] border-none max-[900px]:text-[14px] badge-button">
              Reach goals that matter
            </button>
            <span className="text-white text-[40px] font-bold max-[900px]:text-[30px] section-title">
              One product, unlimited solutions
            </span>
            <p className="text-[#949CA6] section-subtitle">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
              deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="main__collaction mt-[130px]">
        <div className="container flex justify-between mb-[100px] max-[1100px]:flex-col max-[1100px]:items-center feature-section">
          <div className="w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto feature-content">
            <p className="text-[#6560F3] feature-badge">More speed. Less spend</p>
            <span className="text-white text-3xl feature-title">Keep projects on schedule</span>
            <p className="text-[#949CA6] feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Excepteur sint occaecat{" "}
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="feature-image">
            <img className="max-[1100px]:w-[900px] main-feature-img" src={collaction_1 || "/placeholder.svg"} alt="" />
          </div>
        </div>

        <div className="container flex flex-row-reverse justify-between mb-[100px] max-[1100px]:flex-col max-[1100px]:items-center feature-section-reverse">
          <div className="w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto feature-content">
            <p className="text-[#6560F3] feature-badge">More speed. Less spend</p>
            <span className="text-white text-3xl feature-title">Keep projects on schedule</span>
            <p className="text-[#949CA6] feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Excepteur sint occaecat{" "}
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="max-[1100px]:w- feature-image">
            <img className="max-[1100px]:w-[900px] main-feature-img" src={collaction_2 || "/placeholder.svg"} alt="" />
          </div>
        </div>

        <div className="container flex justify-between pb-[100px] border-b-2 border-[#34363A] max-[1100px]:flex-col max-[1100px]:items-center feature-section">
          <div className="w-[500px] flex flex-col gap-[20px] my-auto max-[1100px]:mb-12 max-[1100px]:w-auto feature-content">
            <p className="text-[#6560F3] feature-badge">More speed. Less spend</p>
            <span className="text-white text-3xl feature-title">Keep projects on schedule</span>
            <p className="text-[#949CA6] feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" />
              Duis aute irure dolor in reprehenderit
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Excepteur sint occaecat{" "}
            </p>
            <p className="text-[#949CA6] feature-item">
              <img className="inline pr-1.5 check-icon" src={Ok || "/placeholder.svg"} alt="" /> Amet consectetur
              adipiscing elit
            </p>
          </div>
          <div className="feature-image">
            <img className="max-[1100px]:w-[900px] main-feature-img" src={collaction_3 || "/placeholder.svg"} alt="" />
          </div>
        </div>
      </section>

      <section className="clients mt-20">
        <div className="container main_title flex text-center flex-col gap-5 mb-14 testimonials-header">
          <span className="font-bold text-[40px] text-white max-[570px]:text-[26px] testimonials-title">
            Don't take our word for it
          </span>
          <p className="text-[#949CA6] text-[18px] max-[570px]:text-[16px] testimonials-subtitle">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br /> nulla at volutpat
            diam ut venenatis tellus—in ornare.
          </p>
        </div>
        <div className="container flex justify-between gap-5 max-[1130px]:flex-wrap max-[1130px]:justify-center max-[1130px]:gap-8 testimonials-grid">
          {CLIENT?.map((item, index) => (
            <div
              key={index}
              className="cards w-[352px] bg-[#26282C] p-[20px] max-[768px]:w-auto testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="img pb-4 testimonial-avatar">
                <img src={item.img || "/placeholder.svg"} alt="" />
              </div>
              <p className="text-[#949CA6] pb-[35px] border-b-2 border-[#34363A] testimonial-text">{item.p_1}</p>
              <div className="card_end flex pt-5 testimonial-author">
                <p className="text-[#949CA6]">{item.p_2}</p>
                <p className="text-[#6560F3]">{item.p_3}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 newsletter-section">
        <div className="container relative bg-[#6661F5] p-19 gap-4 flex items-center px-[30px] max-[810px]:flex-col max-[810px]:gap-y-7 newsletter-container">
          <div className="dec flex flex-1 flex-col gap-4 newsletter-content">
            <span className="text-[32px] text-white font-bold newsletter-title">Stay in the loop</span>
            <p className="text-white newsletter-subtitle">Join our newsletter to get top news before anyone else.</p>
          </div>
          <div className="input h-[35px] flex gap-3 px-2 newsletter-form">
            <input
              className="w-[320px] h-[48px] bg-[#524DC7] text-[#dfe6f0] indent-5 border-[1px] border-[#AEACF9] max-[515px]:w-[250px] max-[515px]:h-[40px] ml-[20px] max-[430px]:w-[200px] max-[430px]:h-[35px] newsletter-input"
              type="text"
              placeholder="Your best email…"
              name=""
              id=""
            />
            <button className="w-[139px] h-[48px] bg-white text-[#6661F5] font-bold max-[515px]:w-[110px] max-[515px]:h-[40px] max-[430px]:w-[80px] max-[430px]:h-[35px] max-[430px]:text-[14px] newsletter-button">
              <span>Subscribe</span>
            </button>
          </div>
          <img
            className="absolute top-[4px] right-[20px] newsletter-decoration"
            src={Soch || "/placeholder.svg"}
            alt=""
          />
        </div>
      </section>
    </main>
  )
}

export default Main
