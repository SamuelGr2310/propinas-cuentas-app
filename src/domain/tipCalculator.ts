export interface BillCalculationInput {
  subtotal: number;
  tipPercentage: number;
  peopleCount: number;
}

export interface BillCalculationResult {
  subtotal: number;
  tipAmount: number;
  totalAmount: number;
  perPersonAmount: number;
}

export interface BillHistoryItem extends BillCalculationResult {
  id: string;
  title: string;
  tipPercentage: number;
  peopleCount: number;
  createdAt: string;
}

function roundToTwoDecimals(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateSplitBill(input: BillCalculationInput): BillCalculationResult {
  if (!Number.isFinite(input.subtotal) || input.subtotal < 0) {
    throw new Error("El subtotal debe ser un número mayor o igual a 0");
  }
  if (!Number.isFinite(input.tipPercentage) || input.tipPercentage < 0) {
    throw new Error("El porcentaje de propina debe ser un número mayor o igual a 0");
  }
  if (!Number.isInteger(input.peopleCount) || input.peopleCount <= 0) {
    throw new Error("El número de personas debe ser un entero mayor a 0");
  }

  const subtotal = roundToTwoDecimals(input.subtotal);
  const tipAmount = roundToTwoDecimals((subtotal * input.tipPercentage) / 100);
  const totalAmount = roundToTwoDecimals(subtotal + tipAmount);
  const perPersonAmount = roundToTwoDecimals(totalAmount / input.peopleCount);

  return {
    subtotal,
    tipAmount,
    totalAmount,
    perPersonAmount
  };
}

export function createHistoryEntry(
  title: string,
  input: BillCalculationInput,
  id: string,
  createdAt: string
): BillHistoryItem {
  const cleanTitle = title.trim().length > 0 ? title.trim() : "Cuenta de restaurante";
  const calculation = calculateSplitBill(input);

  return {
    id,
    title: cleanTitle,
    tipPercentage: input.tipPercentage,
    peopleCount: input.peopleCount,
    createdAt,
    ...calculation
  };
}
