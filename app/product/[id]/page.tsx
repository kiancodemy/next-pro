import Products from "@/components/product";
import { id } from "@/type";
export default function page({ params }: id) {
  return (
    <>
      <Products id={params.id}></Products>
    </>
  );
}
