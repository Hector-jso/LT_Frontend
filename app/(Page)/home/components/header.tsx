import ButtonHeader from "../assets/buttonHeader.svg";
import User from "../assets/User.svg";
import Messager from "../assets/messager.svg";
import Friends from "../assets/Friends.svg";
import Logo from "@/app/assets/svg/Logo.svg";

export function Header() {
  return (
    <div className="grid grid-cols-4 h-full w-full">
      <div className="h-full w-full">
        <button className="relative h-[15vh] lg:h-[20vh] lg:w-[15vw] shadow-sb shadow-interactive">
          <ButtonHeader className="h-full w-full text-b" preserveAspectRatio="none" />
          <Logo className="absolute inset-0 ml-[2vw] lg:ml-[6vw] mt-[1vh] lg:mt-[2vh] h-[50%] text-e" />
        </button>
      </div>
      <div className="flex justify-center items-center pt-3 h-full w-full">
        <button className="w-[35%] lg:w-[20%] shadow-sf shadow-interactive">
          <Messager className=" pb-25"></Messager>
        </button>
      </div>
      <div className="flex justify-center items-center pt-3 h-full w-full">
        <button className="w-[35%] lg:w-[20%] shadow-sf shadow-interactive">
          <Friends className=" pb-25"></Friends>
        </button>
      </div>
      <div className="flex justify-end h-full w-full">
        <button className="relative h-[15vh] lg:h-[20vh] lg:w-[15vw] shadow-sb shadow-interactive ">
          <ButtonHeader className="h-full w-full text-b scale-x-[-1]" preserveAspectRatio="none" />
          <User className="absolute inset-0 mx-auto ml-[6vw] lg:ml-[4vw] mt-[1vh] lg:mt-[2vh] h-[50%] text-e" />
        </button>
      </div>
    </div>
  );
}
