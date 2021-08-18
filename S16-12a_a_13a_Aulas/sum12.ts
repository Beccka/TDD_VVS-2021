import { Bank } from "./bank12";
import { Expression } from "./expression12";
import { Money } from "./money12";

export class Sum implements Expression{
    augend: Money;
    addend: Money;

    constructor(augend: Money, addend: Money){
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank: Bank, to: string): Money{
        const amount = this.augend.amount() + this.addend.amount(); 
        return new Money(amount, to);   
    }
}