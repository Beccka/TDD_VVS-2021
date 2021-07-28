import { Dollar } from './dollar3' 

describe('Dollar', () => {
    it('should return 10 when five dollars are multiplied by two', () => {
        const five: Dollar = new Dollar(5);
        var product: Dollar = five.times(2);
        expect(product.amount).toEqual(10);
        product = five.times(3);
        expect(product.amount).toEqual(15);
    })
});