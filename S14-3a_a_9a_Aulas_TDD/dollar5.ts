import { Money } from './money5'

export class Dollar extends Money{
    constructor(amount: number){
        super();
        super.amount = amount;
    }

    times(multiplier: number): Dollar{
        return new Dollar(this.amount * multiplier);
    }
}