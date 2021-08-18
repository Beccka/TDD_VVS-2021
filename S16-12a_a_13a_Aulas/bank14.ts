import { Expression } from "./expression14";
import { Money } from "./money14";
import { Sum } from "./sum14";

const currenciesToKey = (currencies: Pair): string =>{
    return `${currencies.from}-${currencies.to}`;
} 

interface Rates{
    [index: string]: number;
}

interface Pair{
    from: string
    to: string

}

export class Bank{
    private rates: Rates = {}
    reduce(source: Expression, to: string): Money{
        return source.reduce(this, to);
    }

    addRate(from: string, to: string, rate: number){
        const currencies: Pair = {from, to}
        this.rates[currenciesToKey(currencies)] = rate;
    }

    rate(from: string, to: string): number{
        if (from === to){
            return 1;
        }
        const currencies: Pair = {from, to}
        return this.rates[currenciesToKey(currencies)]
    }
}
