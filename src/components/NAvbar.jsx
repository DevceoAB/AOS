import React from "react"



const Navbar = () => {
    return(
        <nav data-aos="fade-down" data-aos-duration='1200' className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">DevABC</div>
        <div className="flex space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
    )
}

export default Navbar