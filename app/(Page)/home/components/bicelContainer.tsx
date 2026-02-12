import React from "react";

interface BicelBoxProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  bevel?: number;
  stroke?: number;
}

export const BicelBox: React.FC<BicelBoxProps> = ({ children, className = "", color = "f", bevel = 8 }) => {
  return (
    <div className={`relative ${className} shadow-s${color}`}>
      <svg className={`absolute inset-0 w-full h-full pointer-events-none`} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon
          points={`
            ${bevel},0
            ${100 - bevel},0
            100,${bevel}
            100,${100 - bevel}
            ${100 - bevel},100
            ${bevel},100
            0,${100 - bevel}
            0,${bevel}
          `}
          fill="currentColor"
          className={`text-${color}`}
        />
      </svg>

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};


// import BicelSmall from "../../assets/svg/bicel3.svg";
// import Bicel from "../../assets/svg/bicel2.svg";

// interface BicelContainerProps {
//   children?: React.ReactNode;
//   className?: string;
//   color?: string;
// }

// export const BicelContainer: React.FC<BicelContainerProps> = ({ children, className = "", color = "f" }) => {
//   const bgClass =
//     color === "a" ? "text-a shadow-sa" : color === "b" ? "text-b shadow-sb" : color === "c" ? "text-c shadow-sc" : color === "d" ? "text-d shadow-sd" : color === "e" ? "text-e shadow-se" : color === "f" ? "text-f shadow-sf" : "bg-f shadow-sf";
//   return (
//     <div className={`relative h-full w-full ${className}`}>
//       <Bicel className={`absolute h-full w-full ${bgClass}`} preserveAspectRatio="none"></Bicel>
//       <div className="absolute inset-0 z-10 flex h-full w-full px-9 py-6 lg:px-15">{children}</div>
//     </div>
//   );
// };

// interface BicelContainerPropsSmall {
//   children?: React.ReactNode;
//   className?: string;
//   color?: string;
// }

// export const BicelContainerSmall: React.FC<BicelContainerPropsSmall> = ({ children, className = "", color = "b" }) => {
//   const bgClass =
//     color === "a" ? "text-a shadow-sa" : color === "b" ? "text-b shadow-sb" : color === "c" ? "text-c shadow-sc" : color === "d" ? "text-d shadow-sd" : color === "e" ? "text-e shadow-se" : color === "f" ? "text-f shadow-sf" : "bg-f shadow-sf";
//   return (
//     <div className={`relative h-full w-full ${className}`}>
//       <BicelSmall className={`absolute h-full w-full ${bgClass}`} preserveAspectRatio="none"></BicelSmall>
//       <div className="absolute inset-0 z-10 flex h-full w-full px-9 py-6 lg:px-15">{children}</div>
//     </div>
//   );
// }; 