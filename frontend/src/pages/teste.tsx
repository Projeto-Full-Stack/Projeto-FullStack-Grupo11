import { AnnForm } from "@/components/annForm";
import { ContextModal } from "@/context/modal.context";

export default function Teste() {
  const { setModalContent } = ContextModal();
  return (
    <>
      <button onClick={() => setModalContent(<AnnForm />)}>X</button>
    </>
  );
}
