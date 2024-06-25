import React, { useState, useEffect , useRef} from "react";
import { IoChevronDown } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { CiShuffle } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { VscTarget } from "react-icons/vsc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { BiLogoLinkedin, BiCopyright } from "react-icons/bi";
import { FaPlus, FaPinterest, FaMinus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import phonix from "./images/phonix image.jpg";
import clinax from "./images/clinasia image.jpg";
import freyr from "./images/freyr image.jpg";
import koni from "./images/kony image.jpg";
import max from "./images/maxsoftware image.jpg";
import otsi from "./images/otsi image.jpg";
import value from "./images/valuelabs image.jpg";
import cape from "./images/capgemini image.jpg";
import Carousel from "./Carousel";
const Landingpage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(false);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const scrollref = useRef(null)


  const [showaccordion, setshowaccordion] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  let images = [clinax, phonix, freyr, cape, max, value, otsi, koni];
  useEffect(() => {
    const handlescroll = () => {
      // window.addEventListener("scroll",()=>{
      //   alert("working")
      //   setScrolled(!scrolled);
      //   console.log(scrolled);
      // })
      if (window.scrollY > 50) {
        // console.log(window.scrollY);
        setScrolled(true);
      } else {
        console.log(scrolled);
        setScrolled(false);
      }
    };
    scrollref.current = handlescroll
    console.log(scrollref);

    window.addEventListener("scroll", scrollref.current );

    return () => {
      window.removeEventListener("scroll", scrollref.current );
    };
  }, [scrolled]);
  const accordion = (index) => {
    setshowaccordion((prev) => ({
      ...prev,
      [index]: !showaccordion[index],
    }));
  };
  setInterval(() => {}, 3000);

  const showslide = () => {
    setSlide(!slide);
  };
  const closeslide = () => {
    setSlide(!slide);
  };
  const moredrop2 = () => {
    setshow2(!show2);
  };

  const moredrop = () => {
    setshow(!show);
  };
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-[#983ff9] to-[#542dff] h-auto home-area">
        <div className="home-area2"></div>
        <div
          className={
            scrolled
              ? "bg-white fixed top-0 w-full z-10 shadow-sm nav-sticky"
              : "w-full shadow-sm z-10"
          }
        >
          <nav className="max-w-[1300px] mx-auto flex justify-between items-center  py-[15px]  px-10 md:px-0 ">
            <div>
              <img
                src={
                  scrolled
                    ? "https://barakahit.net/html/crypto/assets/img/logo-black.png"
                    : "https://barakahit.net/html/crypto/assets/img/logo.png"
                }
                alt=""
              />
            </div>
            <div className="flex justify-between items-center ">
              <div className=" mr-[50px] md:flex hidden ">
                <a
                  className={
                    scrolled
                      ? "text-black py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] "
                      : "py-[15px] px-[10px] font-medium tracking-[0.5px]  text-[15px] text-[#fff]"
                  }
                  href="#home"
                >
                  Home
                </a>
                <a
                  className={
                    scrolled
                      ? "text-black py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px]"
                      : " py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] text-[#fff]"
                  }
                  href="#about"
                >
                  About
                </a>
                <a
                  className={
                    scrolled
                      ? "text-black py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px]"
                      : " py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] text-[#fff]"
                  }
                  href="#features"
                >
                  Features
                </a>
                <a
                  className={
                    scrolled
                      ? "text-black py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px]"
                      : " py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] text-[#fff]"
                  }
                  href="#roadmap"
                >
                  Roadmap
                </a>
                <a
                  className={
                    scrolled
                      ? "text-black py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px]"
                      : " py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] text-[#fff]"
                  }
                  href="#whitepapers"
                >
                  Whitepapers
                </a>
                <div className="relative group ">
                  <a
                    className={
                      scrolled
                        ? " text-black py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px] flex justify-center items-center"
                        : " py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px] text-[#fff] flex justify-center items-center"
                    }
                    href="#"
                  >
                    More <IoChevronDown className="ml-1" />
                    <ul className="hidden border bg-white w-[220px] rounded-md  absolute top-12 left-4 group-hover:block nav-drop ">
                      <li className="py-2 px-3 rounded-t-md border-[#cccbcb]  border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay ">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] text-right"
                          href="#"
                        >
                          Token
                        </a>
                      </li>
                      <li className="py-2 px-3 border-[#cccbcb] border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay z-10 ">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050]  font-medium text-right"
                          href="#team"
                        >
                          Team
                        </a>
                      </li>
                      <li className="py-2 px-3 border-[#cccbcb] border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay ">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050]  font-medium text-right"
                          href="#faqs"
                        >
                          Faqs
                        </a>
                      </li>
                      <li className="py-2 px-3 border-[#cccbcb] border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay ">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050]  font-medium text-right"
                          href="#blog"
                        >
                          {" "}
                          Blog
                        </a>
                      </li>
                      <li className="py-2 px-3 hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050]  font-medium text-right hover-delay "
                          href="#contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </a>
                </div>
                <div className="relative group">
                  <a
                    className={
                      scrolled
                        ? "py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px] text-black flex justify-center items-center"
                        : " py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px] text-[#fff] flex justify-center items-center"
                    }
                    href="#"
                  >
                    Pages <IoChevronDown className="ml-1" />
                  </a>
                  <ul className="hidden border bg-white w-[220px] rounded-md  absolute top-12 left-4 group-hover:block nav-drop ">
                    <li className="py-2 px-3 rounded-t-md border-[#cccbcb]  border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay ">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050] text-right"
                        href="#"
                      >
                        Blog Details
                      </a>
                    </li>
                    <li className="py-2 px-3 border-[#cccbcb] border-b hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover:border-b-[#cccbcb] hover-delay ">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050]  font-medium text-right"
                        href="#"
                      >
                        {" "}
                        404 Error
                      </a>
                    </li>
                    <li className="py-2 px-3 hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050]  font-medium text-right hover-delay "
                        href="#"
                      >
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" justify-between items-center py-2 px-5 md:flex hidden ">
                <div className="relative group">
                  <a
                    className={
                      scrolled
                        ? " text-black py-[15px] px-[10px]  font-medium tracking-[0.5px]  text-[15px] flex justify-center items-center"
                        : " py-[15px] px-[10px]  font-medium tracking-[0.5px] text-[15px] text-[#fff] flex justify-center items-center"
                    }
                    href="#"
                  >
                    English <AiFillCaretDown className="ml-1" />{" "}
                  </a>
                  <ul className="hidden border bg-white w-[180px] rounded-md  absolute top-12 left-2 group-hover:block nav-drop">
                    <li className="py-2 px-3 rounded-t-md  hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover-delay ">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050] text-right"
                        href="#"
                      >
                        English
                      </a>
                    </li>
                    <li className="py-2 px-3  hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]  hover-delay ">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050]  font-medium text-right"
                        href="#"
                      >
                        简体中文
                      </a>
                    </li>
                    <li className="py-2 px-3 hover:border-l-4 hover:border-[#ff9b08] hover:bg-[#f1efeffa]">
                      {" "}
                      <a
                        className=" text-[15px] text-[#505050]  font-medium text-right hover-delay "
                        href="#"
                      >
                        Русский
                      </a>
                    </li>
                  </ul>
                </div>
                <button className="rounded-full bg-[#ff9b08] px-[25px] font-medium py-2 text-white text-[14px]">
                  Sign Up
                </button>
              </div>
              <div onClick={showslide} className="py-2 px-5 md:hidden flex">
                {slide ? (
                  <MdClose
                    className={
                      scrolled
                        ? "text-black text-[30px]"
                        : "text-white text-[30px]"
                    }
                  />
                ) : (
                  <FaBars
                    className={
                      scrolled
                        ? "text-black text-[30px]"
                        : "text-white text-[30px]"
                    }
                  />
                )}
              </div>
              <div
                className={
                  slide
                    ? "h-[300px] overflow-y-scroll fixed left-0 right-0 mx-auto top-[70px] w-[80%] bg-[#ffffff] z-30  py-5 ease-in-out duration-500 step-num"
                    : "h-[350px] fixed left-0 right-0 w-[80%] top-[-100%] hidden"
                }
              >
                {/* <h1 className='text-[#fff] w-full font-bold text-3xl flex justify-between '><img src="https://barakahit.net/html/crypto/assets/img/logo-black.png" alt="" /> <button onClick={closeslide}><MdClose className="text-[black]" /></button></h1> */}
                <ul className="relative border">
                  <li className=" border-t  border-[#dbeefd]  p-4 group">
                    <a
                      href="#home"
                      className=" block  text-[#505050] group-hover:text-[#ff9b08] font-archivo"
                    >
                      Home
                    </a>
                  </li>
                  <li className=" border-t  border-[#dbeefd]  p-4 group">
                    <a
                      href="#about"
                      className=" block text-[#505050] group-hover:text-[#ff9b08] font-archivo"
                    >
                      About
                    </a>
                  </li>
                  <li className=" border-t  border-[#dbeefd]  p-4 group">
                    <a
                      href="#features"
                      className=" block  text-[#505050] group-hover:text-[#ff9b08] font-archivo"
                    >
                      Features
                    </a>
                  </li>
                  <li className=" border-t  border-[#dbeefd]  p-4 group">
                    <a
                      href="#roadmap"
                      className=" block  text-[#505050] group-hover:text-[#ff9b08] font-archivo"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className=" border-t  border-[#dbeefd]  p-4 group">
                    <a
                      href="#whitepapers"
                      className=" block  text-[#505050] group-hover:text-[#ff9b08] font-archivo"
                    >
                      Whitepapers
                    </a>
                  </li>
                  <li
                    onClick={moredrop}
                    className=" relative  border-t  border-b-[#dbeefd]"
                  >
                    <div className="p-4 flex justify-between items-center group">
                      <a
                        className="block  text-[#505050] font-archivo group-hover:text-[#ff9b08]"
                        href="#"
                      >
                        More
                      </a>{" "}
                      {show ? (
                        <FaMinus className="text-[10px] text-[#505050] group-hover:text-[#ff9b08] " />
                      ) : (
                        <FaPlus className="text-[10px] text-[#505050] group-hover:text-[#ff9b08] " />
                      )}
                    </div>
                    <ul
                      className={
                        show
                          ? "block  bg-white w-full rounded-md  static top-14 left-0 "
                          : "hidden  bg-white w-full rounded-md  static top-14 left-0  "
                      }
                    >
                      <li className="py-2   border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] group-hover:text-[#ff9b08]"
                          href="#"
                        >
                          Token
                        </a>
                      </li>
                      <li className="py-2   border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08]"
                          href="#team"
                        >
                          Team
                        </a>
                      </li>
                      <li className="py-2   border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08]"
                          href="#faqs"
                        >
                          Faqs
                        </a>
                      </li>
                      <li className="py-2   border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08]"
                          href="#blog"
                        >
                          {" "}
                          Blog
                        </a>
                      </li>
                      <li className="py-2   border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08] "
                          href="#contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    onClick={moredrop2}
                    className="relative  border-t  border-b-[#dbeefd] "
                  >
                    <div className="flex justify-between group  items-center  p-4">
                      <a
                        href="/blog"
                        className=" group-hover:text-[#ff9b08] block  text-[#505050] font-archivo"
                      >
                        Pages
                      </a>{" "}
                      {show2 ? (
                        <FaMinus className="text-[10px] text-[#505050] group-hover:text-[#ff9b08] " />
                      ) : (
                        <FaPlus className="text-[10px] text-[#505050] group-hover:text-[#ff9b08] " />
                      )}
                    </div>
                    <ul
                      className={
                        show2
                          ? "block  bg-white w-full rounded-md  static top-14 left-0  "
                          : "hidden  bg-white w-full rounded-md   top-14 left-0 "
                      }
                    >
                      <li className="py-2    border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] group-hover:text-[#ff9b08]"
                          href="#"
                        >
                          Blog Details
                        </a>
                      </li>
                      <li className="py-2  border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08]"
                          href="#team"
                        >
                          404 Error
                        </a>
                      </li>
                      <li className="py-2  border-[#dbeefd]  border-t group">
                        {" "}
                        <a
                          className=" text-[15px] text-[#505050] ml-[40px] font-medium text-right group-hover:text-[#ff9b08]"
                          href="#faqs"
                        >
                          Coming Soon
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="home" className="w-full  py-10 ">
          <div className="max-w-[1300px] mx-auto grid  grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-2 px-2 md:px-7 py-12 md:py-24">
              <button className="bg-[#03a9f4] px-12 py-2 rounded-full text-white  md:text-[15px] sm:mx-auto mb-7 mt-10">
                Trusted brand in Cryptocurrency
              </button>
              <h2 className=" text-white text-[28px] md:text-[32px] sm:text-center ">
                Make the world a better place with Cryptocurrency.
              </h2>
              <p className="text-white sm:text-center text-[14px] font-normal tracking-[0.3px] leading-[1.8] mt-4">
                Sign up today and buy 50+ cryptocurrencies in minutes, Get
                started with as little as $5.
              </p>
              <div className="mt-7 block md:flex justify-between max-w-[400px]">
                <button className="rounded-full bg-white py-[12px] px-[40px] md:px-[40px] text-[#505050] text-[12px] md:text-[15px] font-semibold">
                  Get Started
                </button>
                <button className="rounded-full bg-[#ff9b08] font-semibold ml-[20px] md:ml-0 text-[12px] px-[35px]  md:text-[15px]   text-white py-[12px] md:px-[35px]">
                  join and buy token
                </button>
              </div>
            </div>
            <div className="col-2 ">
              <img
                className="image-animate"
                src="https://barakahit.net/html/crypto/assets/img/home-font.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f8f8f8] py-6">
        <Carousel images={images}/>
      </div>
      <div id="about" className="w-full py-10">
        <div className="max-w-[1300px] mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 ">
          <div className="col-2 px-7 py-24">
            <h6 className="text-[16px] text-[#ff9b08] font-semibold tracking-[0.5px] mb-[10px]">
              ABOUT CRYPTO
            </h6>
            <h3 className="font-semibold text-[25px] mb-[20px]">
              Leading Blockchain Marketing Expertise
            </h3>
            <p className="text-[15px] text-[#5f5f5f] mb-[15px] tracking-[0.3px] leading-[1.8] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
            <ul className="list-points">
              <li className="text-[#5f5f5f] py-[6px] pl-[20px] list-item">
                What is ICO Crypto?
              </li>
              <li className="text-[#5f5f5f] py-[6px] pl-[20px] list-item">
                There are many variations of passages of Lorem Ipsum
              </li>
              <li className="text-[#5f5f5f] py-[6px] pl-[20px] list-item">
                Many desktop publishing packages and web page editors now
              </li>
            </ul>
          </div>
          <div className="col-2 ">
            <img
              src="https://barakahit.net/html/crypto/assets/img/about.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full py-24 bg-[#f8f8f8]">
        <div className="max-w-[1300px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
          <div className="py-[70px] px-[30px] rounded-md bg-[#E91E63] text-center relative bitcoin-area">
            <div className="mx-auto py-1  flex justify-center items-center">
              <p className="text-[40px] text-[#fff] ">
                <CiShuffle />
              </p>
            </div>
            <h6 className="text-[20px] text-[#ffff] font-semibold mt-[20px] mb-[15px]">
              Bitcoin Exchange
            </h6>
            <p className="text-[15px] text-[#ffff]">
              We ensure quality and commitment throughout the development
              life-cycle
            </p>
          </div>
          <div className="py-[70px] px-[30px] rounded-md bg-[#9C27B0] text-center bitcoin-area">
            <div className="mx-auto py-1  flex justify-center items-center">
              <p className="text-[40px] text-[#fff] ">
                <BsTools />
              </p>
            </div>
            <h6 className="text-[20px] text-[#ffff] font-semibold mt-[20px] mb-[15px]">
              Paid Campaigns
            </h6>
            <p className="text-[15px] text-[#ffff]">
              We ensure quality and commitment throughout the development
              life-cycle
            </p>
          </div>
          <div className="py-[70px] px-[30px] rounded-md bg-[#CDDC39] text-center bitcoin-area">
            <div className="mx-auto py-1  flex justify-center items-center">
              <p className="text-[40px] text-[#fff] ">
                <IoSettingsOutline />
              </p>
            </div>
            <h6 className="text-[20px] text-[#ffff] font-semibold mt-[20px] mb-[15px]">
              Exchange Marketing
            </h6>
            <p className="text-[15px] text-[#ffff]">
              We ensure quality and commitment throughout the development
              life-cycle
            </p>
          </div>
          <div className="py-[70px] px-[30px] rounded-md bg-[#FF9800] text-center bitcoin-area">
            <div className="mx-auto py-1  flex justify-center items-center">
              <p className="text-[40px] text-[#fff] ">
                <VscTarget />
              </p>
            </div>
            <h6 className="text-[20px] text-[#ffff] font-semibold mt-[20px] mb-[15px]">
              Quality Experience
            </h6>
            <p className="text-[15px] text-[#ffff]">
              We ensure quality and commitment throughout the development
              life-cycle
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="max-w-[1300px] mx-auto">
          <div className="mx-auto">
            <h1 className="text-[#505060] text-[30px] font-semibold leading-[1.8] text-center">
              How it Works
            </h1>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[60px] px-10 md:px-0">
            <div>
              <div className="relative w-[140px] mb-[20px] h-[140px] rounded-[50%] bg-[#ffffff] items-center  flex justify-center leading-[140px] mx-auto step-icon">
                <img
                  className="w-[70px] "
                  src="https://barakahit.net/html/crypto/assets/img/icons/process-icon-1.png"
                  alt=""
                />
                <div className="bg-[#fff] h-[50px] w-[50px] font-semibold text-[18px] text-[#6f64e7] rounded-[50%] flex justify-center items-center absolute top-0 right-0 step-num">
                  01
                </div>
              </div>
              <h3 className="text-[20px] font-semibold mb-[12px] leading-[1.4] text-center">
                Register
              </h3>
              <p className="text-[15px] tracking-[0.3px] font-normal  leading-[1.8] text-[#5f5f5f] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore0
              </p>
            </div>
            <div>
              <div className="relative w-[140px] mb-[20px] h-[140px] rounded-[50%] bg-[#ffffff] items-center  flex justify-center leading-[140px] mx-auto step-icon">
                <img
                  className="w-[70px] "
                  src="https://barakahit.net/html/crypto/assets/img/icons/process-icon-2.png"
                  alt=""
                />
                <div className="bg-[#fff] h-[50px] w-[50px] font-semibold text-[18px] text-[#6f64e7] rounded-[50%] flex justify-center items-center absolute top-0 right-0 step-num">
                  02
                </div>
              </div>
              <h3 className="text-[20px] font-semibold mb-[12px] leading-[1.4] text-center">
                ID Verification
              </h3>
              <p className="text-[15px] tracking-[0.3px] font-normal  leading-[1.8] text-[#5f5f5f] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore0
              </p>
            </div>
            <div>
              <div className="relative w-[140px] mb-[20px] h-[140px] rounded-[50%] bg-[#ffffff] items-center  flex justify-center leading-[140px] mx-auto step-icon">
                <img
                  className="w-[70px] "
                  src="https://barakahit.net/html/crypto/assets/img/icons/process-icon-3.png"
                  alt=""
                />
                <div className="bg-[#fff] h-[50px] w-[50px] font-semibold text-[18px] text-[#6f64e7] rounded-[50%] flex justify-center items-center absolute top-0 right-0 step-num">
                  03
                </div>
              </div>
              <h3 className="text-[20px] font-semibold mb-[12px] leading-[1.4] text-center">
                Deposit & Trade
              </h3>
              <p className="text-[15px] tracking-[0.3px] font-normal  leading-[1.8] text-[#5f5f5f] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="w-full py-20 sm:px-4 px-0 ">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.8] text-center">
              Our Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:px-6 md:px-12 lg:px-0 mt-10 ">
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px] ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[30px] h-auto  ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    Assets Security
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px]  ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[20px] h-auto  ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    High Performance
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px]  ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[20px] h-auto  ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    Trade with Secure
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px]  ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[20px] h-auto  ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    Professional Team
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px]  ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-5.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[20px] h-auto ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    Get free Wallet
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid  grid-cols-3 md:grid-cols-3  items-center mt-[35px]  ">
                <div className="col-span-1 ">
                  <div className="w-[135px] sm:max-w-[135px] h-[140px] flex justify-center items-center rounded-[8px] bg-[#fff] step-icon">
                    <img
                      className="w-[65px] h-auto max-w-[100%]"
                      src="https://barakahit.net/html/crypto/assets/img/icons/services-icon-6.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-2 text-start md:pl-0  pl-[20px] h-auto  ">
                  <h3 className="text-[20px] font-semibold leading-[1.4] ">
                    Digital Currencies
                  </h3>
                  <p className="text-[15px]  text-[#5f5f5f] mt-[5px] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#983ff9] to-[#542dff] counter-area">
        <div className="counter-area2"></div>
        <div className="mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <div className="py-[15px] col-1 text-center">
            <h2 className="text-[45px] font-semibold text-[#fff] mb-[5px]  leading-[1.4]">
              2010
            </h2>
            <h3 className="text-[18px] font-semibold text-[#fff]   leading-[1.4]">
              Founded in
            </h3>
          </div>
          <div className="py-[15px] col-1 text-center">
            <h2 className="text-[45px] font-semibold text-[#fff] mb-[5px]  leading-[1.4]">
              2500
            </h2>
            <h3 className="text-[18px] font-semibold text-[#fff]  leading-[1.4]">
              Team of
            </h3>
          </div>
          <div className="py-[15px] col-1 text-center">
            <h2 className="text-[45px] font-semibold text-[#fff] mb-[5px] leading-[1.4]">
              10M
            </h2>
            <h3 className="text-[18px] font-semibold text-[#fff]  leading-[1.4]">
              Users
            </h3>
          </div>
          <div className="py-[15px] col-1 text-center">
            <h2 className="text-[45px] font-semibold text-[#fff] mb-[5px] tracking-[2px] leading-[1.4]">
              550M
            </h2>
            <h3 className="text-[18px] font-semibold text-[#fff]  leading-[1.4]">
              Insurance Coverage (USD)
            </h3>
          </div>
        </div>
      </div>
      <div id="roadmap" className="w-full py-10">
        <div className="mx-auto max-w-[1300px]  px-6 md:px-0  relative ">
          <div className="text-center mb-[65px]">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.8] text-center">
              Roadmap
            </h2>
          </div>
          <div className="w-full px-6 md:px-0 overflow-x-auto  h-auto mx-auto box-border roadmap-scroll">
            <div className="w-[2552px] relative  cursor-e-resize">
              <div className="h-border"></div>
              <div className="flex justify-between relative ">
                <div className=" px-[15px] text-center owl-item w-[250px] ">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      June 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">Token Fixed Exchange</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-[15px] text-center owl-item w-[300px]">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      July 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">Bitcoin Transaction</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-[15px] text-center owl-item w-[300px] ">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      August 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">Investment Banking</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-[15px] text-center owl-item w-[300px] ">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      April 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">ICO Payment System</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-[15px] text-center owl-item w-[300px]">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      May 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">Digital Currency</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" px-[15px] text-center owl-item w-[300px] ">
                  <div className="relative  mt-[-12px] main-box">
                    <div className="py-[12px] w-[100%] bottom-[100%] text-[#333] font-semibold text-[15px] absolute title">
                      June 2022
                    </div>
                    <div className="overflow-hidden w-[100%] roadmap-chart">
                      <div className="small-round"></div>
                      <div className="v-row"></div>
                    </div>
                    <div className="roadmap-detail-box">
                      <h3 class="sub-title">Token Fixed Exchange</h3>
                      <p className="text-[15px] text-[#5f5f5f]  tracking-[0.3px] font-normal leading-[1.8]">
                        Bitcoin is a worldwide cryptocurrency and digital
                        payment system called
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="whitepapers" className="w-[100%] py-16 ">
        <div className="max-w-[1300px] mx-auto  px-6 md:px-0 ">
          <div className="text-center mb-[65px]">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.8] text-center">
              Documents
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
            <div className="py-[70px] px-[30px] rounded-md bg-gradient-to-r from-[#983ff9] to-[#542dff] document-area">
              <div className="document-area2"></div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[51px] h-[55px] mb-[30px]"
                  src="https://barakahit.net/html/crypto/assets/img/pdf-1.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[20px] text-[#fff] font-semibold text-center leading-[1.4]">
                  White Papers
                </h3>
              </div>
            </div>
            <div className="py-[70px] px-[30px] rounded-md bg-gradient-to-r from-[#983ff9] to-[#542dff] document-area">
              <div className="document-area2"></div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[51px] h-[55px] mb-[30px]"
                  src="https://barakahit.net/html/crypto/assets/img/pdf-1.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[20px] text-[#fff] font-semibold text-center leading-[1.4]">
                  Business Summary
                </h3>
              </div>
            </div>
            <div className="py-[70px] px-[30px] rounded-md bg-gradient-to-r from-[#983ff9] to-[#542dff] document-area">
              <div className="document-area2"></div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[51px] h-[55px] mb-[30px]"
                  src="https://barakahit.net/html/crypto/assets/img/pdf-1.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[20px] text-[#fff] font-semibold text-center leading-[1.4]">
                  Terms & Conditions
                </h3>
              </div>
            </div>
            <div className="py-[70px] px-[30px] rounded-md bg-gradient-to-r from-[#983ff9] to-[#542dff] document-area">
              <div className="document-area2"></div>
              <div className="flex justify-center items-center">
                <img
                  className="w-[51px] h-[55px] mb-[30px]"
                  src="https://barakahit.net/html/crypto/assets/img/pdf-1.svg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[20px] text-[#fff] font-semibold text-center leading-[1.4]">
                  Privacy Policy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="token" className="w-[100%] py-16 bg-[#f8f8f8] ">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[65px]">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.8] text-center">
              Pre-sale & Values
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8  px-6 md:px-0  ">
            <div>
              <h1 className="text-[33px] font-semibold mb-[15px] leading-[1.4]">
                Distribution of Tokens
              </h1>
              <p className="text-[15px] tracking-[0.3px] font-normal text-[#5f5f5f] mb-[15px] leading-[1.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-none">
                <li className="leading-[45px] font-medium ">
                  {" "}
                  <span className="bg-[#0fa5fd] rounded-full text-center w-[20px] h-[20px] mr-[10px] mb-[-4px] inline-block"></span>{" "}
                  03% Gift Code Inventory
                </li>
                <li className="leading-[45px] font-medium ">
                  {" "}
                  <span className="bg-[#865bf3] rounded-full text-center w-[20px] h-[20px] mr-[10px] mb-[-4px] inline-block"></span>{" "}
                  30% Bounty and Overhead
                </li>
                <li className="leading-[45px] font-medium ">
                  {" "}
                  <span className="bg-[#e65356] rounded-full text-center w-[20px] h-[20px] mr-[10px] mb-[-4px] inline-block"></span>{" "}
                  40% It Infastructure
                </li>
                <li className="leading-[45px] font-medium ">
                  {" "}
                  <span className="bg-[#e6c253] rounded-full text-center w-[20px] h-[20px] mr-[10px] mb-[-4px] inline-block"></span>{" "}
                  50% Legal & Financial
                </li>
                <li className="leading-[45px] font-medium ">
                  {" "}
                  <span className="bg-[#00f9a7] rounded-full text-center w-[20px] h-[20px] mr-[10px] mb-[-4px] inline-block"></span>{" "}
                  70% Branding and Merketing
                </li>
              </ul>
            </div>
            <div className="bg-[white] rounded-[5px] px-6 py-4">
              <h3 className="text-center text-[#333] text-[30px] font-semibold mb-[20px] leading-[1.8]">
                ICO will Start On
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="w-full h-[80px] rounded-[5px] bg-gradient-to-t from-[#372e95] to-[#9629e6] text-[40px] font-semibold flex justify-center items-center relative text-[#fff] z-[1]">
                    <div className="bg-[#b5b5b5] h-[1px] w-full absolute left-0 top-[50%] z-[-1]"></div>
                    06
                  </div>
                  <div className="text-[18px] font-semibold pt-[10px] text-center ">
                    Days
                  </div>
                </div>
                <div>
                  <div className="w-full h-[80px] rounded-[5px] bg-gradient-to-t from-[#372e95] to-[#9629e6] text-[40px] font-semibold flex justify-center items-center relative text-[#fff] z-[1]">
                    <div className="bg-[#b5b5b5] h-[1px] w-full absolute left-0 top-[50%] z-[-1]"></div>
                    09
                  </div>
                  <div className="text-[18px] font-semibold pt-[10px] text-center ">
                    Hours
                  </div>
                </div>
                <div>
                  <div className="w-full h-[80px] rounded-[5px] bg-gradient-to-t from-[#372e95] to-[#9629e6] text-[40px] font-semibold flex justify-center items-center relative text-[#fff] z-[1]">
                    <div className="bg-[#b5b5b5] h-[1px] w-full absolute left-0 top-[50%] z-[-1]"></div>
                    15
                  </div>
                  <div className="text-[18px] font-semibold pt-[10px] text-center ">
                    Minutes
                  </div>
                </div>
                <div>
                  <div className="w-full h-[80px] rounded-[5px] bg-gradient-to-t from-[#372e95] to-[#9629e6] text-[40px] font-semibold flex justify-center items-center relative text-[#fff] z-[1]">
                    <div className="bg-[#b5b5b5] h-[1px] w-full absolute left-0 top-[50%] z-[-1]"></div>
                    36
                  </div>
                  <div className="text-[18px] font-semibold pt-[10px] text-center ">
                    Seconds
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <a
                  className="mx-auto px-[35px] mt-[35px] py-[12px] inline-block bg-[#ff9b08] text-center text-[#ffffff] relative rounded-[30px] text-[15px] z-[1] group"
                  href="#"
                >
                  <span className="bg-[#3e57d0] absolute z-[-1] rounded-[30px] hidden show"></span>
                  Join & Buy Tokens
                </a>
              </div>
            </div>
            <div className="bg-[#ffff] flex justify-center items-center ">
              <img
                src="https://barakahit.net/html/crypto/assets/img/token-1.jpg"
                alt=""
              />
            </div>
            <div className="">
              <img
                src="https://barakahit.net/html/crypto/assets/img/token-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="w-[100%] py-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[45px]">
            <h2 className="text-[#505060] text-[33px] font-semibold leading-[1.8] text-center">
              Expert Team
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className=" py-[10px] mt-[30px] rounded-[5px]">
              <div className="w-[200px] h-[200px] rounded-full relative  z-[1] mx-auto team-image">
                <img
                  className="w-[100%] h-auto rounded-full"
                  src="https://barakahit.net/html/crypto/assets/img/team/team-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-center px-[15px] pt-[20px] pb-[10px]">
                <h3 className="text-[18px] font-semibold  leading-[1.4]">
                  Ava Farrington
                </h3>
                <p className="text-[#ff9b08] text-[15px] font-medium ">
                  Founder, ceo
                </p>
              </div>
              <div className=" text-center">
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoFacebookSquare />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
            <div className=" py-[10px] mt-[30px] rounded-[5px]">
              <div className="w-[200px] h-[200px] rounded-full relative border z-[1] mx-auto team-image">
                <img
                  className="w-[100%] h-auto rounded-full"
                  src="https://barakahit.net/html/crypto/assets/img/team/team-2.jpg"
                  alt=""
                />
              </div>
              <div className="text-center px-[15px] pt-[20px] pb-[10px]">
                <h3 className="text-[18px] font-semibold  leading-[1.4]">
                  Kevin Haley
                </h3>
                <p className="text-[#ff9b08] text-[15px] font-medium ">
                  Co-founder, cto
                </p>
              </div>
              <div className=" text-center">
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoFacebookSquare />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
            <div className=" py-[10px] mt-[30px] rounded-[5px]">
              <div className="w-[200px] h-[200px] rounded-full relative  z-[1] mx-auto team-image">
                <img
                  className="w-[100%] h-auto rounded-full"
                  src="https://barakahit.net/html/crypto/assets/img/team/team-3.jpg"
                  alt=""
                />
              </div>
              <div className="text-center px-[15px] pt-[20px] pb-[10px]">
                <h3 className="text-[18px] font-semibold  leading-[1.4]">
                  Alishia Fulton
                </h3>
                <p className="text-[#ff9b08] text-[15px] font-medium ">
                  Chief creative officer
                </p>
              </div>
              <div className=" text-center">
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoFacebookSquare />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
            <div className=" py-[10px] mt-[30px] rounded-[5px]">
              <div className="w-[200px] h-[200px] rounded-full relative  z-[1] mx-auto team-image">
                <img
                  className="w-[100%] h-auto rounded-full"
                  src="https://barakahit.net/html/crypto/assets/img/team/team-4.jpg"
                  alt=""
                />
              </div>
              <div className="text-center px-[15px] pt-[20px] pb-[10px]">
                <h3 className="text-[18px] font-semibold  leading-[1.4]">
                  Lucas Martinez
                </h3>
                <p className="text-[#ff9b08] text-[15px] font-medium ">
                  Project Manager
                </p>
              </div>
              <div className=" text-center">
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoFacebookSquare />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="py-[5px] px-[10px] text-[#444] text-[18px] inline-block"
                  href=""
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="faqs" className="w-full py-16">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[65px]">
            <h2 className="text-[#505060] text-[33px] font-semibold leading-[1.4] text-center">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-[100%] ">
            <ul className="relative list-none w-full px-4 md:px-16  ">
              <li className="mb-[20px] w-full ">
                <a
                  onClick={() => accordion(1)}
                  className="text-[#333] w-full text-[15px] md:text-[18px] relative py-[20px] flex justify-between items-start  font-semibold border-b border-b-[#cccccc]"
                  href="javacript:void(0)"
                >
                  {showaccordion[1] ? (
                    <FaMinus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block transform rotate-45 accordion-icon" />
                  ) : (
                    <FaPlus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block accordion-icon" />
                  )}
                  How can one buy/sell Crypto tokens?
                </a>
                <p
                  className={
                    showaccordion[1]
                      ? "text-[15px] py-[20px] px-1 md:px-[50px] accordion-down active "
                      : " text-[15px] py-[20px] px-1 md:px-[50px] accordion-down"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehender
                </p>
              </li>
              <li className="mb-[20px] w-full ">
                <a
                  onClick={() => accordion(2)}
                  className="text-[#333] w-full  text-[15px] md:text-[18px] relative py-[20px] flex justify-between items-start  font-semibold border-b border-b-[#cccccc]"
                  href="javacript:void(0)"
                >
                  {showaccordion[2] ? (
                    <FaMinus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block transform rotate-45 accordion-icon" />
                  ) : (
                    <FaPlus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block accordion-icon" />
                  )}
                  Where can I safely store my Crypto tokens?
                </a>
                <p
                  className={
                    showaccordion[2]
                      ? "text-[15px] py-[20px] px-1 md:px-[50px] accordion-down active "
                      : " text-[15px] py-[20px] px-1 md:px-[50px] accordion-down"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa officia deserunt mollit
                  anim id est laborum.
                </p>
              </li>
              <li className="mb-[20px] w-full ">
                <a
                  onClick={() => accordion(3)}
                  className="text-[#333] w-full  text-[15px] md:text-[18px] relative py-[20px] flex justify-between items-start  font-semibold border-b border-b-[#cccccc]"
                  href="javacript:void(0)"
                >
                  {showaccordion[3] ? (
                    <FaMinus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block transform rotate-45 accordion-icon" />
                  ) : (
                    <FaPlus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block accordion-icon" />
                  )}
                  What is the initial price of the Crypto token?
                </a>
                <p
                  className={
                    showaccordion[3]
                      ? "text-[15px] py-[20px] px-1 md:px-[50px] accordion-down active "
                      : " text-[15px] py-[20px] px-1 md:px-[50px] accordion-down"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa officia deserunt mollit
                  anim id est laborum.
                </p>
              </li>
              <li className="mb-[20px] w-full ">
                <a
                  onClick={() => accordion(4)}
                  className="text-[#333] w-full  text-[14px] md:text-[18px] relative py-[20px] flex justify-between items-start  font-semibold border-b border-b-[#cccccc]"
                  href="javacript:void(0)"
                >
                  {showaccordion[4] ? (
                    <FaMinus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block transform rotate-45 accordion-icon" />
                  ) : (
                    <FaPlus className="absolute top-[50%] right-[20px] text-[14px] text-[#333] inline-block accordion-icon" />
                  )}
                  Can I get cashback when purchasing Crypto tokens?
                </a>
                <p
                  className={
                    showaccordion[4]
                      ? "text-[15px] py-[20px] px-1 md:px-[50px] accordion-down active "
                      : " text-[15px] py-[20px] px-1 md:px-[50px] accordion-down"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa officia deserunt mollit
                  anim id est laborum.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-16 bg-[#f8f8f8]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-0 grid grid-cols-1 gap-4 md:grid-cols-2  items-center ">
          <div className="col-1">
            <img
              src="https://barakahit.net/html/crypto/assets/img/download.png"
              alt=""
            />
          </div>
          <div className="col-1">
            <h5 className="text-[#ff9b08] text-[16px] mb-[10px] font-semibold uppercase leading-[1.4]">
              Download The Apps
            </h5>
            <h2 className="text-[#333] text-[33px] mb-[20px] font-semibold  leading-[1.4]">
              Multi-terminal trading, anytime, anywhere
            </h2>
            <p className="text-[#5f5f5f] text-[15px] mb-[15px] tracking-[0.3px] font-normal  leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className=" flex md:justify-start justify-between items-center">
              <a className="inline-block mr-[10px] text-[#505060]" href="">
                <img
                  className="rounded-[3px] w-full h-auto"
                  src="https://barakahit.net/html/crypto/assets/img/appstore.png"
                  alt=""
                />
              </a>
              <a className="inline-block  text-[#505060]" href="">
                <img
                  className="rounded-[3px] w-full h-auto"
                  src="https://barakahit.net/html/crypto/assets/img/playstore.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="blog" className="w-full py-16">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[45px]">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.4] text-center">
              Latest Blog
            </h2>
          </div>
          <div className="grid px-6 md:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="rounded-[3px]">
                <a href="#">
                  <img
                    src="https://barakahit.net/html/crypto/assets/img/blog/blog-1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <ul className="mb-[15px]">
                  <li className="inline-block text-[#555] font-semibold text-[13px]">
                    <a href="#">ICO</a>
                  </li>
                  <li className="inline-block text-[#555] px-[5px] text-[12px]">
                    <span>|</span>
                  </li>
                  <li className="inline-block text-[#555] font-semibold text-[13px] leading-[1.4]">
                    <h6>20 January - 2022</h6>
                  </li>
                </ul>
                <h3 className="font-semibold  leading-[1.4] ">
                  <a
                    className="block text-[#333] font-semibold text-[18px] leading-[1.5] mb-[10px]"
                    href="#"
                  >
                    New Leveraged Pairs Added to Margin Trading on the Crypto
                    Exchange
                  </a>
                </h3>
                <p className="text-[#5f5f5f] text-[15px] tracking-[0.3px] font-normal  leading-[1.8]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore veniam dolore.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[3px]">
                <a href="#">
                  <img
                    src="https://barakahit.net/html/crypto/assets/img/blog/blog-2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <ul className="mb-[15px]">
                  <li className="inline-block text-[#555] font-semibold text-[13px]">
                    <a href="#">Crypto</a>
                  </li>
                  <li className="inline-block text-[#555] px-[5px] text-[12px]">
                    <span>|</span>
                  </li>
                  <li className="inline-block text-[#555] font-semibold text-[13px] leading-[1.4]">
                    <h6>25 January - 2022</h6>
                  </li>
                </ul>
                <h3 className="font-semibold  leading-[1.4] ">
                  <a
                    className="block text-[#333] font-semibold text-[18px] leading-[1.5] mb-[10px]"
                    href="#"
                  >
                    Cryptocurrency Pay Now Accepts BTC Payments From Any Wallet
                  </a>
                </h3>
                <p className="text-[#5f5f5f] text-[15px] tracking-[0.3px] font-normal  leading-[1.8]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore veniam dolore.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-[3px]">
                <a href="#">
                  <img
                    src="https://barakahit.net/html/crypto/assets/img/blog/blog-3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <ul className="mb-[15px]">
                  <li className="inline-block text-[#555] font-semibold text-[13px]">
                    <a href="#">Bitcoin</a>
                  </li>
                  <li className="inline-block text-[#555] px-[5px] text-[12px]">
                    <span>|</span>
                  </li>
                  <li className="inline-block text-[#555] font-semibold text-[13px] leading-[1.4]">
                    <h6>30 January - 2022</h6>
                  </li>
                </ul>
                <h3 className="font-semibold  leading-[1.4] ">
                  <a
                    className="block text-[#333] font-semibold text-[18px] leading-[1.5] mb-[10px]"
                    href="#"
                  >
                    Bitcoin (BTC) Supercharger Launches With a Bonus Lucky Draw
                  </a>
                </h3>
                <p className="text-[#5f5f5f] text-[15px] tracking-[0.3px] font-normal  leading-[1.8]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore veniam dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full py-16 ">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-[65px]">
            <h2 className="text-[#505060] text-[30px] font-semibold leading-[1.4] text-center">
              Contact us
            </h2>
          </div>
          <div className="max-w-[100%] w-[800px] mx-auto px-6 md:px-0">
            <div className="mb-[25px] grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="text-[#333] h-[55px] w-[100%] px-[20px] py-[12px] bg-[#f2f2f2] rounded-[10px] outline-none"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="text-[#333] h-[55px] w-[100%] px-[20px] py-[12px] bg-[#f2f2f2] rounded-[10px] outline-none"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-[25px]">
              <input
                className="text-[#333] h-[55px] w-[100%] px-[20px] py-[12px] bg-[#f2f2f2] rounded-[10px] outline-none"
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <div className="mb-[25px]">
              <textarea
                className="text-[#333] max-h-[320px] h-auto w-[100%] px-[20px] py-[12px] bg-[#f2f2f2] rounded-[10px] outline-none"
                name=""
                id=""
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button className="bg-[#ff9b08] px-[35px] py-[12px] text-[15px] rounded-[30px] font-semibold text-center text-[#ffffff]">
                Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full footer-area py-16">
        <div className="max-w-[1300px] mx-auto px-12 md:px-4">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center ">
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 py-[15px]">
              <div className="mb-[20px]">
                <img
                  className="max-w-[100%] h-auto"
                  src="https://www.barakahit.net/html/crypto/assets/img/logo.png"
                  alt=""
                />
              </div>
              <p className="text-[15px] text-[#ececec] font-normal leading-[1.8] tracking-[0.3px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                consectetur laboris.
              </p>
              <ul className=" mt-[20px]">
                <li className="inline-block mr-[10px]">
                  <a
                    className="flex justify-center items-center w-[38px] h-[38px] rounded-[5px] bg-[#ffffff] leading-[38px] text-[18px] text-center  "
                    href=""
                  >
                    {" "}
                    <BiLogoFacebookSquare className="text-[#ff9b08] text-[18px] text-center" />
                  </a>
                </li>
                <li className="inline-block mr-[10px]">
                  <a
                    className="flex justify-center items-center w-[38px] h-[38px] rounded-[5px] bg-[#ffffff] leading-[38px] text-[18px] text-center  "
                    href=""
                  >
                    {" "}
                    <FaTwitter className="text-[#ff9b08] text-[18px] text-center" />
                  </a>
                </li>
                <li className="inline-block mr-[10px]">
                  <a
                    className="flex justify-center items-center w-[38px] h-[38px] rounded-[5px] bg-[#ffffff] leading-[38px] text-[18px] text-center  "
                    href=""
                  >
                    {" "}
                    <FaPinterest className="text-[#ff9b08] text-[18px] text-center" />
                  </a>
                </li>
                <li className="inline-block mr-[10px]">
                  <a
                    className="flex justify-center items-center w-[38px] h-[38px] rounded-[5px] bg-[#ffffff] leading-[38px] text-[18px] text-center  "
                    href=""
                  >
                    {" "}
                    <BiLogoLinkedin className="text-[#ff9b08] text-[18px] text-center" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 py-[15px]">
              <ul>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Features
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Roadmap
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Token
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Faqs
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Whitepapers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 py-[15px]">
              <ul>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Blog Details
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    404 Error
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="pb-[18px]">
                  <a
                    className="text-[15px] inline-block text-[#ececec] font-normal hover:underline"
                    href=""
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 py-[15px]">
              <div className="mb-[20px]">
                <h3 className="text-[#fffff] text-[20px] font-semibold pb-[10px] leading-[1.4] text-[#ececec] border-b border-b-[#fff] ">
                  Contact Information
                </h3>
              </div>
              <div className="mb-[16px]">
                <span className="text-[#ececec] text-[15px] font-normal">
                  <strong className="font-bloder">Phone:</strong>+000 313 577
                  111{" "}
                </span>
              </div>
              <div className="mb-[16px]">
                <span className="text-[#ececec] text-[15px] font-normal">
                  <strong className="font-bloder">Email:</strong>
                  demo@example.com{" "}
                </span>
              </div>
              <div className="mb-[16px]">
                <span className="text-[#ececec] text-[15px] font-normal">
                  <strong className="font-bloder">Address:</strong> 4035
                  Heavens, Los Angeles, California{" "}
                </span>
              </div>
              <form className="max-w-[580px] mt-[20px] mx-auto" action="">
                <input
                  className="h-[50px] pl-[25px] w-[100%] rounded-[5px] bg-[#ffffff] text-[#505060] block outline-none"
                  type="text"
                  placeholder="Enter your email"
                  name=""
                  id=""
                />
                <button className="mt-[25px] relative rounded-[5px] bg-[#ff9b08] h-[50px] text-[15px] text-[#ffffff] leading-[50px] px-[30px]">
                  Subscribe{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[35px] bg-[#0e1326] text-left px-10 md:px-0">
        <div className="max-w-[1300px] mx-auto block md:flex justify-between items-center ">
          <div className="col-1 text-center">
            <p className="text-[#ececec] text-[15px] leading-[1.4] tracking-[0.3px]">
              {" "}
              <BiCopyright className="leading-[1] font-normal inline-block" />
              2022 Crypto - All Rights Reserved.
            </p>
          </div>
          <div className="col-1 text-center ">
            <ul>
              <li className="text-[15px] mr-[10px] text-[#ececec] inline-block relative copyright-area">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="text-[15px] ml-[10px] text-[#ececec] inline-block">
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
