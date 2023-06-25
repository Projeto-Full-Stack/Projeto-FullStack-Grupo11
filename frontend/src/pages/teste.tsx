import { AnnForm } from "@/components/annForm";
import { LoginContext } from "@/context/login.context";
import { ContextModal } from "@/context/modal.context";

export default function Teste() {
  const { userInfo } = LoginContext();

  function teste(event: any){
    event.preventDefault()
    console.log(event.target[0].value)
  }
  return (
    <>
      <button onClick={() => console.log(userInfo)}>X</button>      
    </>
  );
}
