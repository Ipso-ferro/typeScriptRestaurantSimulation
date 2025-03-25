import { Bill } from "./bill";
import { BillPerTable } from "./billService";
import { FoodV2 } from "./food";
import { FoodService } from "./foodService";
import { Kitchen } from "./kitchen";
import { KitchenService } from "./kitchenService";
import { Waiter } from "./waiter";
import { WaiterService } from "./waiterService";

//creating lists
const waiterOrders: Waiter[] = [];
const foodMenuList: FoodV2[] = [];
const billPerTableList: Bill[] = [];
const KitchenListCommingFromWaiter: Kitchen[] = [];

const orderFromWaiter: number = 10;

//creating list of menuFood

function creatingFoodList(
  howManyMealsDoesTheMenuHave: number,
  foodMenuList: FoodV2[]
) {
  let counter = 0;
  const arrFood = [
    "pizza",
    "burguer",
    "lasagna",
    "kebab",
    "chicken",
    "picanha",
  ];
  while (counter < howManyMealsDoesTheMenuHave) {
    let creatorFoodPrice = Math.floor(Math.random() * (20 - 11) + 11);
    // const foodMenuData = new Food(arrFood[counter], creatorFoodPrice);
    const foodMenuData:FoodV2 = {
      foodName: arrFood[counter],
      foodPrice: creatorFoodPrice
    }
    const foodService = new FoodService(foodMenuList);
    foodService.saveToList(foodMenuData);
    counter++;
  }
}

//creatiing list of Waiter Orders
function waiterOrdersCreator(
  howManyOrders: number,
  waiterOrders: Waiter[],
  foodMenuList: FoodV2[]
) {
  let counter = 0;
  while (counter < howManyOrders) {
    let quantityOfMeals = 0;
    let howManyMeals = Math.floor(Math.random() * (5 - 1) + 1);

    while (quantityOfMeals < howManyMeals) {
      const foodToGetIn = foodMenuList[Math.floor(Math.random() * (5 - 0) + 0)];
      const orderFromWaiter = new Waiter(counter + 1, foodToGetIn);
      const orderWaiterService = new WaiterService(
        orderFromWaiter,
        waiterOrders
      );
      orderWaiterService.saveToList();
      quantityOfMeals++;
    }
    
    counter++;
  }
}

//creating list of Bill Per Table

function creatingListPerTable(
  QuantityOfWaiterOrders: number,
  waiterOrders: Waiter[],
  billPerTableList: Bill[]
) {
  let counter = 0;
  while (counter < QuantityOfWaiterOrders) {
    const listperTableService = new Bill(waiterOrders);
    listperTableService.totalOfAccountPerTable(counter + 1);

    const listOfTotalsPerTable = new BillPerTable(
      listperTableService,
      billPerTableList
    );
    listOfTotalsPerTable.saveToList();
    counter++;
  }
}

//creating kitchen list
function kitchenList(
  orderFromWaiter: number,
  waiterOders: Waiter[],
  KitchenListCommingFromWaiter: Kitchen[]
) {
  let counter = 0;
  while (counter < orderFromWaiter) {
    const listBuilder = new KitchenService(KitchenListCommingFromWaiter);
    listBuilder.buildingKitchenOrder(waiterOders[counter + 1]);
    counter ++
  }
}
//creating foodMenu
creatingFoodList(6, foodMenuList);
console.log("FOOD MENU:");
console.log(foodMenuList);
//creating witers orders
waiterOrdersCreator(orderFromWaiter, waiterOrders, foodMenuList);
console.log("Waiters Orders");
console.log(waiterOrders);
//creating kitchen Orders
console.log("KITCHEN ORDERS:");
kitchenList(orderFromWaiter, waiterOrders, KitchenListCommingFromWaiter);
console.log(KitchenListCommingFromWaiter);
//creating  filtering and total per table
console.log("TOTAL IN EACH TABLE");
creatingListPerTable(orderFromWaiter, waiterOrders, billPerTableList);
