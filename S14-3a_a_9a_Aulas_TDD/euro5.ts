import { Money } from './money5'

export class Euro extends Money{
    constructor(amount: number){
        super();
        this.amount = amount;
    }

    times(multiplier: number): Euro{
        return new Euro(this.amount * multiplier);
    }
}