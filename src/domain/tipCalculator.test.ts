import { calculateSplitBill, createHistoryEntry } from "./tipCalculator";

describe("calculateSplitBill", () => {
  it("calcula propina, total y monto por persona correctamente", () => {
    const result = calculateSplitBill({
      subtotal: 100000,
      tipPercentage: 10,
      peopleCount: 4
    });

    expect(result.subtotal).toBe(100000);
    expect(result.tipAmount).toBe(10000);
    expect(result.totalAmount).toBe(110000);
    expect(result.perPersonAmount).toBe(27500);
  });

  it("lanza error si el subtotal es negativo", () => {
    expect(() =>
      calculateSplitBill({
        subtotal: -500,
        tipPercentage: 10,
        peopleCount: 2
      })
    ).toThrow("El subtotal debe ser un número mayor o igual a 0");
  });

  it("lanza error si el porcentaje de propina es negativo", () => {
    expect(() =>
      calculateSplitBill({
        subtotal: 50000,
        tipPercentage: -5,
        peopleCount: 2
      })
    ).toThrow("El porcentaje de propina debe ser un número mayor o igual a 0");
  });
});

describe("createHistoryEntry", () => {
  it("lanza error si la cantidad de personas no es válida", () => {
    expect(() =>
      calculateSplitBill({
        subtotal: 50000,
        tipPercentage: 10,
        peopleCount: 0
      })
    ).toThrow("El número de personas debe ser un entero mayor a 0");
  });

  it("crea registro con título por defecto si está vacío", () => {
    const item = createHistoryEntry(
      "   ",
      { subtotal: 60000, tipPercentage: 15, peopleCount: 3 },
      "bill-1",
      "2026-11-20T10:00:00.000Z"
    );

    expect(item.id).toBe("bill-1");
    expect(item.title).toBe("Cuenta de restaurante");
    expect(item.totalAmount).toBe(69000);
  });
});
