import { ListFuncionalities } from "./listFunctionalities";
import { Waiter } from "./waiter";

export class WaiterService implements ListFuncionalities<Waiter> {
  constructor(
    readonly waiterOrder: Waiter,
    readonly waiterOrdersList: Waiter[]
  ) {}
  saveToList(): void {
    this.waiterOrdersList.push(this.waiterOrder);
  }
}
