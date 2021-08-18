import { Bank } from "./bank13";
import { Expression } from "./expression13";
import { Money } from "./money13";

export class Sum implements Expression{
    augend: Expression;
    addend: Expression;

    constructor(augend: Expression, addend: Expression){
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank: Bank, to: string): Money{
        const amount = this.augend.reduce(bank, to).amount() + this.addend.reduce(bank, to).amount();
        return new Money(amount, to);   
    }

    plus(addend: Expression): Expression{
        return null;
    }
}