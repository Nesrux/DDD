import Product from "../entity/Product";
import RepositoryInterface from "./Repository-interface";

export default interface ProductRepositoryInterface
  extends RepositoryInterface<Product> {}