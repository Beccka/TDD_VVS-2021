import { Money } from "./money11";

export interface Expression {
    reduce: (to: string) => Money;
}