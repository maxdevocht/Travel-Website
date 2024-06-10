import { useState } from "react";

const Navbar = () => {

  // const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  // const toggleNavigation = () => {
  //   if (openNavigation) {
  //     setOpenNavigation(false);
  //   } else {
  //     setOpenNavigation(true);
  //     disablePageScroll();
  //   }
  // };

  // const handleClick = () => {
  //   if (!openNavigation) return
  //   setOpenNavigation(false);
  // };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm ${
      openNavigation ? "bg-1" : "bg-n-8/90 backdrop-blur-sm"
    }`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#home" className="flex w-[12rem] xl:mr-8">
          <img src="./src/assets/logo.svg" alt="logo" width={40} height={40}/>
          <h1 className="text-2xl items-center justify-center">JetLinker</h1> 
        </a>
      </div>
    </div>
  )
}

export default Navbar