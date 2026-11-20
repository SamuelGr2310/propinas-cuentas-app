import { BillHistoryItem } from "../domain/tipCalculator";

export function addHistoryItem(
  items: readonly BillHistoryItem[],
  newItem: BillHistoryItem
): BillHistoryItem[] {
  return [newItem, ...items];
}

export function removeHistoryItemById(
  items: readonly BillHistoryItem[],
  id: string
): BillHistoryItem[] {
  return items.filter((item) => item.id !== id);
}

export function clearHistoryItems(): BillHistoryItem[] {
  return [];
}
