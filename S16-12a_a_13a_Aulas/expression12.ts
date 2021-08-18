import { Bank } from "./bank12";
import { Money } from "./money12";

export interface Expression {
    reduce: (bank: Bank, to: string) => Money;
}