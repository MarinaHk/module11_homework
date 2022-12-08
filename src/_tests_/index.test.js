const getPercents = require('../index.js');

xtest('getPercents 30 / 100 * 200 to equal 60', () => {
    expect(getPercents(30, 200)).toBe(60);
});

xdescribe(("test getPercents"), ()=> {
    it('getPercents 30 / 100 * 200 to equal 60', () => {
        expect(getPercents(30, 200)).toBe(60);
      }),
    it('getPercents 10 / 100 * 300 to equal 30', () => {
        expect(getPercents(10, 300)).toBe(30);
      });
}); 

xdescribe(("test getPercents2"), ()=> {
    it('getPercents 10 / 100 * 300 to equal 20', () => {
        expect(getPercents(10, 300)).toBe(20);
      });
}); 