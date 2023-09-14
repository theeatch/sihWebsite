import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [languageSelected, setLanguageSelected] = useState("English");
  const englishHref = "/english-url"; // Replace with the actual English URL
  const hindiHref = "/hindi-url"; // Replace with the actual Hindi URL

  const handleLanguageChange = (language: string) => {
    setLanguageSelected(language);
  };

  return (
    <div className="min-w-md:hidden fixed navbar top-0 bg-[#a7d6cb] text-[#586F7C] w-full px-20 h-24 border-b-2 border-[#e7634b]">
      <div className="flex-1">
        <a href="/" className=" normal-case text-[#07161a] text-3xl font-semibold">
          <span className="text-[#e7634b] text-4xl">S</span>ound{" "}
          <span className="text-[#e7634b] text-4xl">S</span>culptor
        </a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal gap-6 px-1 bg-none">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/CardHome">Learning Section</a>
          </li>
          <li>
            <details>
              <summary>{languageSelected}</summary>
              <ul className="p-2 bg-white">
                <li>
                  <a onClick={() => handleLanguageChange("English")} >
                    English
                  </a>
                </li>
                <li>
                  <a onClick={() => handleLanguageChange("Hindi")} >
                    Hindi
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/signup-url">Sign Up</a> {/* Replace with the actual Sign Up URL */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
