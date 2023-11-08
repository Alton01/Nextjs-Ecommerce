import Container from "@/app/components/Container";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface Iprams {
  productId?: string;
}

const Product = async ({ params }: { params: Iprams }) => {
  console.log("params", params);

  const product = await getProductById(params);

  const user = await getCurrentUser();

  if (!product)
    return <NullData title="OOPS! Product with given id does not exist" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
