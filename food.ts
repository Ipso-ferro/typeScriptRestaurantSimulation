export class Food{
    foodName:string
    price:number

    constructor(foodName:string,price:number){
        this.foodName = foodName
        this.price = price
    }
}

export interface FoodV2{
    readonly foodName: string
    readonly foodPrice: number
}


const obj1 = {
    param1: "asdads"
}