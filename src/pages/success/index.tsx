import { ImageContainer, SuccessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compras efetuada</h1>
      <ImageContainer></ImageContainer>

      <p>
        uuhh <strong>Juan Carlos</strong>, sua{" "}
        <strong>Camista Beyond the Limites</strong> já está a caminho da sua
        casa
      </p>

      <Link href="/">Voltar ao Catalogo</Link>
    </SuccessContainer>
  );
}
