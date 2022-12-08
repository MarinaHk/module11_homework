import { getPercents } from "../../src/getPercents.js";
describe("tests for getPercents function", () => {
    const percent = 30;
    const number = 200;
    const percent2 = 20;
  it("should operate correctly", () => {
    expect(getPercents(30, 200)).toBe(60);
  }),
    it("should not operate correctly", () => {
        expect(getPercents(20, 200)).toBe(false);
    });
});

describe("tests for getPercents function", () => {
  const percent = 30;
  const number = 200;
  const percent2 = 20;
  it("should operate correctly or not operate correctly", () => {
    expect(getPercents(percent, number)).toBe(`${percent} процентов от ${number} = 60`);
    expect(getPercents(percent2, number)).toBe(`${percent2} процентов от ${number} не равно 60`);
  });
});
