import Customer from "../entity/Customer";
import RepositoryInterface from "./Repository-interface";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> { }