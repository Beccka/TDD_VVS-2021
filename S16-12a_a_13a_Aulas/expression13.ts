import { Bank } from "./bank13";
import { Money } from "./money13";

export interface Expression {
    reduce: (bank: Bank, to: string) => Money;
    plus:  (addend: Expression) => Expression;
}