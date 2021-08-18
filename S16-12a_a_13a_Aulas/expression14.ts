import { Bank } from "./bank14";
import { Money } from "./money14";

export interface Expression {
    reduce: (bank: Bank, to: string) => Money;
    plus:  (addend: Expression) => Expression;
    times: (multiplier: number) => Expression;
}