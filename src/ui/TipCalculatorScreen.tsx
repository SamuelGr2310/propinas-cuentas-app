import React, { useMemo, useState } from "react";
import { ScrollView, Text } from "react-native";
import { BillHistoryItem, calculateSplitBill, createHistoryEntry } from "../domain/tipCalculator";
import {
  addHistoryItem,
  clearHistoryItems,
  removeHistoryItemById
} from "../storage/billHistoryStorage";
import { BillHistoryCard } from "./BillHistoryCard";
import { BillInputsCard } from "./BillInputsCard";
import { BillSummaryCard } from "./BillSummaryCard";
import { tipStyles as s } from "./tipStyles";

function toNum(raw: string): number {
  const n = Number(raw.replace(",", ".").trim());
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export function TipCalculatorScreen(): React.JSX.Element {
  const [title, setTitle] = useState("");
  const [subtotalText, setSubtotalText] = useState("100000");
  const [tipText, setTipText] = useState("10");
  const [peopleCount, setPeopleCount] = useState(2);
  const [history, setHistory] = useState<BillHistoryItem[]>([]);

  const subtotal = toNum(subtotalText);
  const tipPercentage = toNum(tipText);
  const summary = useMemo(
    () => calculateSplitBill({ subtotal, tipPercentage, peopleCount }),
    [subtotal, tipPercentage, peopleCount]
  );

  function saveCurrent(): void {
    const item = createHistoryEntry(
      title,
      { subtotal, tipPercentage, peopleCount },
      String(Date.now()),
      new Date().toISOString()
    );
    setHistory((prev) => addHistoryItem(prev, item));
    setTitle("");
  }

  return (
    <ScrollView contentContainerStyle={s.container}>
      <Text style={s.heading}>Propinas y Cuentas Divididas</Text>
      <BillInputsCard
        title={title}
        subtotalText={subtotalText}
        tipText={tipText}
        peopleCount={peopleCount}
        onTitle={setTitle}
        onSubtotal={setSubtotalText}
        onTip={setTipText}
        onPeople={(d) => {
          setPeopleCount((p) => Math.max(1, p + d));
        }}
      />
      <BillSummaryCard summary={summary} onSave={saveCurrent} />
      <BillHistoryCard
        items={history}
        onDelete={(id) => {
          setHistory((prev) => removeHistoryItemById(prev, id));
        }}
        onClear={() => {
          setHistory(clearHistoryItems());
        }}
      />
    </ScrollView>
  );
}
