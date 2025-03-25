import { Bill } from "./bill";
import { ListFuncionalities } from "./listFunctionalities";

export class BillPerTable implements ListFuncionalities<Bill> {
  constructor(readonly billPerTable: Bill, readonly billPerTableList: Bill[]) {}

  saveToList(): void {
    this.billPerTableList.push(this.billPerTable);
  }
}
