export class Dollar{
    amount: number = 5 * 2;

    constructor(amount: number){
        this.amount = amount;
    }

    times(multiplier: number): void{
        this.amount *= multiplier;
    }
}