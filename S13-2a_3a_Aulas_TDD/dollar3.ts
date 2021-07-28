export class Dollar{
    amount: number = 5 * 2;

    constructor(amount: number){
        this.amount = amount;
    }

    times(multiplier: number): Dollar{
        return new Dollar(this.amount * multiplier);
    }
}