import React from "react";
import { Pressable, Text, View } from "react-native";
import { BillHistoryItem } from "../domain/tipCalculator";
import { tipStyles as s } from "./tipStyles";

interface BillHistoryCardProps {
  items: readonly BillHistoryItem[];
  onDelete: (id: string) => void;
  onClear: () => void;
}

export function BillHistoryCard(props: BillHistoryCardProps): React.JSX.Element {
  return (
    <View style={s.card}>
      <View style={s.historyHeader}>
        <Text style={s.subHeading}>Historial ({props.items.length})</Text>
        {props.items.length > 0 ? (
          <Pressable onPress={props.onClear}>
            <Text style={s.clearText}>Limpiar</Text>
          </Pressable>
        ) : null}
      </View>
      {props.items.map((item) => (
        <View key={item.id} style={s.historyItem}>
          <View>
            <Text style={s.itemTitle}>{item.title}</Text>
            <Text style={s.itemMeta}>
              Total: ${item.totalAmount.toFixed(2)} · {item.peopleCount} pers. · $
              {item.perPersonAmount.toFixed(2)} c/u
            </Text>
          </View>
          <Pressable
            onPress={() => {
              props.onDelete(item.id);
            }}
          >
            <Text style={s.deleteText}>Eliminar</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
