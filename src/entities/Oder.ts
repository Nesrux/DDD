import OrderItem from "./Order_Item";

export default class Order {
  _id: string;
  _customerId: string;
  _itens: OrderItem[] = [];

  constructor(id: string, custumerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = custumerId;
    this._itens = items
  }

}


/*Se estiver em agregados diferentes a relação é apenas por Id
porém se estiverem no mesmo agregado, a relação é por objeto*/