export class Dollar{
    private readonly amount: number = 5 * 2;

    constructor(amount: number){
        this.amount = amount;
    }

    times(multiplier: number): Dollar{
        return new Dollar(this.amount * multiplier);
    }

    equals(other: Dollar): boolean{
        return this.amount === other.amount;
    }
}