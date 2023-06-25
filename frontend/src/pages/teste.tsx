import { AnnForm } from "@/components/annForm";
import { ContextModal } from "@/context/modal.context";

export default function Teste() {
  const { setModalContent } = ContextModal();

  function teste(event: any){
    event.preventDefault()
    console.log(event.target[0].value)
  }
  return (
    <>
      <button onClick={() => setModalContent(<AnnForm />)}>X</button>      
    </>
  );
}
