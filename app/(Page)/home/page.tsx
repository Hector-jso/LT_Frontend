import { Header } from "./components/header";
import { BicelBox } from "./components/bicelContainer";

export default function HomePage() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-3/12">
        <Header />
      </div>
      <div className="flex justify-center w-screen h-9/12 ">
        <div className="w-[90%] h-[90%]">
          <BicelBox bevel={4} className=" h-full w-full" color="f">
            <div className="h-full w-full flex items-center justify-center">
              <div
                className="
                
                grid 
                grid-flow-col 
                auto-rows-fr 
                auto-cols-fr
                gap-9
                w-[90%] 
                h-[90%]
                place-items-center
                overflow-y-auto
                scrollbar-custom
                justify-start
                content-center
              "
                style={{
                  gridTemplateRows: "repeat(2, 11vw)", // ← altura fija para las 3 filas
                  gridAutoColumns: "11vw", // ← ancho fijo para cada columna
                }}
              >
                {Array.from({ length: 32 }).map((_, i) => (
                  <BicelBox key={i} className="w-full h-full" color="b">
                    {i}
                  </BicelBox>
                ))}
              </div>
            </div>
          </BicelBox>
        </div>
      </div>
    </div>
  );
}