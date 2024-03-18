import ValidatorInterface from "../../@shared/validator/validator.interface";
import Customer from "../entity/Customer";

export default class CustomerYupValidator implements ValidatorInterface<Customer> {
  validate(entity: Customer): void {
    throw new Error("Method not implemented.");
  }

}