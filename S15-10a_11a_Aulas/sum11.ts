import { Expression } from "./expression11";
import { Money } from "./money11";

export class Sum implements Expression{
    augend: Money;
    addend: Money;

    constructor(augend: Money, addend: Money){
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to: string): Money{
        const amount = this.augend.amount() + this.addend.amount(); 
        return new Money(amount, to);   
    }
}