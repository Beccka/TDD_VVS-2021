import { Euro } from './euro4'
import { Dollar } from './dollar4'  

describe('Money', () => {
    it('Should return 10 when five dollars are multiplied by two', () => {
        const five: Dollar = new Dollar(5);
        expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
        expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
    })

    it('Should return 10 when five euros are multiplied by two', () => {
        const five: Euro = new Euro(5);
        expect(five.times(2).equals(new Euro(10))).toBeTruthy();
        expect(five.times(3).equals(new Euro(15))).toBeTruthy();
    })

    it('Should return true when dollars and euros of the same value are compared', ()=> {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
        expect(new Euro(5).equals(new Euro(5))).toBeTruthy();
        expect(new Euro(5).equals(new Euro(6))).toBeFalsy();
    })
});