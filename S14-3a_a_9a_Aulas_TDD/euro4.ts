import { Money } from './money4'

export class Euro extends Money{
    constructor(amount: number){
        super();
        this.amount = amount;
    }

    times(multiplier: number): Euro{
        return new Euro(this.amount * multiplier);
    }
}