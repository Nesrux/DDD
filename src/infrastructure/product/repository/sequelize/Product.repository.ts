import Product from "../../../../domain/product/entity/Product";
import ProductRepositoryInterface from "../../../../domain/product/repository/Product-repository.interface";
import ProductModel from "./Product.model";

export default class ProductRepository implements ProductRepositoryInterface {

  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    })
  }

  async update(entity: Product): Promise<void> {
    await ProductModel.update(
      {
        name: entity.name,
        price: entity.price
      },
      {
        where: {
          id: entity.id
        }
      },
    );
  }

  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { id } });
    return new Product(
      productModel.id,
      productModel.name,
      productModel.price)

  }

  async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll();
    return productModels.map((ProductModel) =>
      new Product(ProductModel.id, ProductModel.name, ProductModel.price))
  }

}