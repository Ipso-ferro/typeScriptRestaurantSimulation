import { Kitchen } from "./kitchen";
import { ListFuncionalities } from "./listFunctionalities";
import { Waiter } from "./waiter";

export class KitchenService implements ListFuncionalities<Kitchen>{
    constructor(readonly listKitchenOrders:Kitchen[]){}
    buildingKitchenOrder(orderFromWaiter:Waiter){
        const timeOfOrder = new Date().getMinutes()
        const kitchen = new Kitchen(orderFromWaiter,timeOfOrder)
        this.saveToList(kitchen)
    }
    saveToList(kitchen:Kitchen):void{
        this.listKitchenOrders.push(kitchen)
    }
}

