import { Expression } from "./expression";
import { Money } from "./money10";

export class Bank{

    reduce(source: Expression, to: String): Money{
        return Money.dollar(10);
    }
}