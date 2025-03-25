import { Food, FoodV2 } from "./food";
import { ListFuncionalities } from "./listFunctionalities";

export class FoodService implements ListFuncionalities<FoodV2>{

    constructor (readonly foodMenuList: FoodV2[]){}
    saveToList(food: FoodV2): void {
       this.foodMenuList.push(food)
    }  
}
