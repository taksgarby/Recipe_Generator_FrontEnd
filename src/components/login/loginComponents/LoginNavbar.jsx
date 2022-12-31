import React, {useEffect} from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const LoginNavbar = () => {
  
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  // Use effect so that when in mobile view sidebar doesn't show as will take up whole page
  useEffect(() => {
      const handleResize = () => setScreenSize (window.innerWidth);

      window.addEventListener('resize', handleResize)

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu)=>
        !prevActiveMenu)} color="green" icon={<AiOutlineMenu/>}/> 
    </div>
    
  )
}

export default LoginNavbar