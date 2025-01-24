import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import pwimage from "./assets/pwlogo.png";
import pwcer from "./assets/pwcer.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar goes Here */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
        <div className="text-2xl text-indigo-700 font-bold">Pw Skills</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
      {/* Navbar ends here */}

      {/* Image Section Start Here */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://blog.pwskills.com/wp-content/uploads/2023/05/Untitled-1-3.png"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="https://pbs.twimg.com/media/GhJ4t5YXkAAFzlo?format=jpg&name=4096x4096"
          alt=""
        />
      </header>
      {/* Image Section Ends Here */}

      {/* Student Section Start Here */}
      <div className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounder-2xl md:mt-4 mb-12 md:w-100"></div>
        </div>

        <div className="w-full flex flex-wrap justify-evenly">
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-30 h-30 rounded-4xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAhTXETNIvE8PsF6Uc6bElMUo-GmSmCx01Q&s"
              alt=""
            />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-[18px] font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-30 h-30 rounded-4xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4i2jdkOogLW1mXjh6F3gmXxUhH7PZu0v91A&s"
              alt=""
            />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-[18px] font-bold text-gray-500">
              Different Courses
            </p>
          </div>
          <div className="w-46 flex flex-col items-center mb-12">
            <img
              className="w-30 h-30 rounded-4xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClKqSCiIdHbqtr9cIXY2g-3RYegSRK8Po1w&s"
              alt=""
            />
            <p className="text-2xl font-bold text-white">600+</p>
            <p className="text-[18px] font-bold text-gray-500">
              Different Courses
            </p>
          </div>
        </div>
      </div>
      {/* Student Section Start Here */}

      {/* PW Product Section  Start Here */}
      <div className="h-auto flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            Our Products
          </p>
          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12">
          </div>
        </div>
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <div className="w-46  h-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="rounded-[100%] w-30 h-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKJHf1jQYBoju8GnBtTBa-nCx9pO6j4DZrg&s" alt="" />
            <p className="text-[22px] font-bold text-white mt-2">
              PW Skills lab
            </p>
            <p className="text-[13px] font-bold text-gray-500 mt-2">
              Supercharge your project development with our robus lab.
            </p>
          </div>
          <div className="w-55  h-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="rounded-[100%] w-30 h-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKQKZ7io3poQpuz2FJYsru2XOhGwqBIoMlg&s" alt="" />
            <p className="text-[22px] font-bold text-white mt-2">
              PW Job Portal
            </p>
            <p className="text-[13px] font-bold text-gray-500 mt-2">
              Get the best job from Us.
            </p>
          </div>
          <div className="w-70  h-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="rounded-[100%] w-30 h-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gpg-nq0BpdZ0PStVJ1Z248IhjcCAA_YZRw&s" alt="" />
            <p className="text-[22px] font-bold text-white mt-2">
              Communication Skills
            </p>
            <p className="text-[13px] font-bold text-gray-500 mt-2">
            Build your communication skills and Speak in English in front of people.
            </p>
          </div>
          <div className="w-80  h-60 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="rounded-[100%] w-30 h-30" src="https://cdn-icons-png.flaticon.com/512/201/201614.png" alt="" />
            <p className="text-[22px] font-bold text-white mt-2">
              Scholarship Portal
            </p>
            <p className="text-[13px] font-bold text-gray-500 mt-2">
              Get the Scholarship for you if your cannot afford PW. Get secure your future
            </p>
          </div>
        </div>
      </div>
      {/* PW Product Section Ends Here */}

      {/* PW Footer Section Starts Here */}
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div className="flex flex-col items-center justify-center">
          <img className="w-20 h-20 text-center" src={pwimage} alt="Img Not Found" />
          <p className="my-4">Email us: support@pwskills.com</p>
          <img className="w-40 h-40 mt-[-20px] " src={pwcer} alt="Image Not Found" />
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-full h-1 border-b-2 border-yellow-400 rounded-2xl my-2 md:w-32"></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-[50%] h-1 border-b-2 border-yellow-400 rounded-2xl my-2 md:w-32"></div>
          <div>
            <p>PW Skill Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-[25%] h-1 border-b-2 border-yellow-400 rounded-2xl my-2 md:w-32"></div>
          <div>
            <p>Discord</p>
            <p>PW YouTube</p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
