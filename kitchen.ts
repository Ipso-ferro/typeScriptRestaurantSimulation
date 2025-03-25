import { Waiter } from "./waiter";

export class Kitchen {
  constructor(readonly orderFromWaiter: Waiter,readonly timeOfOrder: Number) {
  }
}
