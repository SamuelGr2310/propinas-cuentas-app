import { createHistoryEntry } from "../domain/tipCalculator";
import { addHistoryItem, clearHistoryItems, removeHistoryItemById } from "./billHistoryStorage";

describe("billHistoryStorage", () => {
  const sampleItem = createHistoryEntry(
    "Cena amigos",
    { subtotal: 120000, tipPercentage: 10, peopleCount: 4 },
    "id-1",
    "2026-11-20T10:00:00.000Z"
  );

  it("agrega una cuenta al inicio del historial", () => {
    const updated = addHistoryItem([], sampleItem);
    expect(updated).toHaveLength(1);
    expect(updated[0]?.id).toBe("id-1");
  });

  it("elimina una cuenta por su id", () => {
    const second = createHistoryEntry(
      "Almuerzo",
      { subtotal: 40000, tipPercentage: 5, peopleCount: 2 },
      "id-2",
      "2026-11-20T10:05:00.000Z"
    );
    const list = [sampleItem, second];
    const filtered = removeHistoryItemById(list, "id-1");
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.id).toBe("id-2");
  });

  it("limpia todo el historial", () => {
    const cleared = clearHistoryItems();
    expect(cleared).toEqual([]);
  });
});
