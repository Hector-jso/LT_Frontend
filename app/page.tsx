import { ButtonInicio } from "@/app/components/inicio/Button";
import { PolygonInicio } from "@/app/components/inicio/PolygonInicio";

function HomePage() {
  return (
    <div className="flex bg-e h-screen w-screen">
      <PolygonInicio />
      <div className="left-5/12 w-7/12 h-screen flex flex-col justify-center items-center ">
        <ButtonInicio href="/login" text="Iniciar Sesión"  />
        <ButtonInicio href="/register" text="Registro" />
      </div>
    </div>
  );
}

export default HomePage;
