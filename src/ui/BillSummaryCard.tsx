import React from "react";
import { Pressable, Text, View } from "react-native";
import { BillCalculationResult } from "../domain/tipCalculator";
import { tipStyles as s } from "./tipStyles";

interface BillSummaryCardProps {
  summary: BillCalculationResult;
  onSave: () => void;
}

export function BillSummaryCard(props: BillSummaryCardProps): React.JSX.Element {
  return (
    <View style={s.summaryBox}>
      <Text style={s.summaryLine}>Propina: ${props.summary.tipAmount.toFixed(2)}</Text>
      <Text style={s.summaryLine}>Total: ${props.summary.totalAmount.toFixed(2)}</Text>
      <Text style={s.highlight}>Por persona: ${props.summary.perPersonAmount.toFixed(2)}</Text>
      <Pressable style={s.primaryButton} onPress={props.onSave}>
        <Text style={s.buttonText}>Guardar en historial</Text>
      </Pressable>
    </View>
  );
}
