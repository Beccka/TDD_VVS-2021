import { Expression } from "./expression11";
import { Money } from "./money11";
import { Sum } from "./sum11";

export class Bank{

    reduce(source: Expression, to: string): Money{
        return source.reduce(to);
    }
}