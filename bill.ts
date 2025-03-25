import { Waiter } from "./waiter";

export class Bill {
  waiterOrdered: Waiter[];

  constructor(waiterOrdered: Waiter[]) {
    this.waiterOrdered = waiterOrdered;
  }

  totalOfAccountPerTable(tableNumber: number) {
    const waiterOrderedFiltered = this.waiterOrdered.filter(
      (waiterOrdered) => waiterOrdered.orderFromTable == tableNumber
    );
    let totalAcountInTable = 0
    waiterOrderedFiltered.forEach((item)=>{
      totalAcountInTable = totalAcountInTable + item.food.foodPrice
    })
    console.log(
      `total to pay in table ${tableNumber} is: ${totalAcountInTable}`
    );
  }
}

