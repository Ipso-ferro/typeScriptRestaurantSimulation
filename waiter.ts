import { FoodV2 } from "./food";

export class Waiter {
  orderFromTable:number
  food:FoodV2

  constructor( orderFromTable:number,food:FoodV2){
    this.orderFromTable = orderFromTable
    this.food = food
  }
}
