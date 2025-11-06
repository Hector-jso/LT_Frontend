import Link from "next/link";

interface ButtonInicioProps {
  onClick?: () => void;
  text?: string;
  href?: string;
}

export function ButtonInicio(props: ButtonInicioProps) {
  return (
    <Link href={props.href ?? "#"} className="block w-full h-1/12 mt-6 mb-6">
      <button className="w-full h-full  bg-d shadow-sd shadow-interactive font-Login text-3xl sm:text-4xl lg:text-4xl text-e" onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  );
}

export function ButtonLogin(props: ButtonInicioProps) {
  return (
    <div className="block w-3/6 sm:w-4/12 lg:w-2/12 h-5/12 mb-6">
      <button className="w-full h-full bg-c shadow-sc shadow-interactive font-Login font-black text-xl sm:text-2xl lg:text-3xl text-e" type="submit" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
