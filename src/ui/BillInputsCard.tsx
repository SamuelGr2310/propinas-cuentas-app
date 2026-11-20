import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { tipStyles as s } from "./tipStyles";

const PRESETS = [0, 10, 15, 20];

interface BillInputsCardProps {
  title: string;
  subtotalText: string;
  tipText: string;
  peopleCount: number;
  onTitle: (v: string) => void;
  onSubtotal: (v: string) => void;
  onTip: (v: string) => void;
  onPeople: (d: number) => void;
}

function renderPresetRow(p: BillInputsCardProps): React.JSX.Element {
  return (
    <View style={s.row}>
      {PRESETS.map((n) => (
        <Pressable
          key={n}
          style={s.chip}
          onPress={() => {
            p.onTip(String(n));
          }}
        >
          <Text style={s.chipText}>{n}%</Text>
        </Pressable>
      ))}
    </View>
  );
}

export function BillInputsCard(p: BillInputsCardProps): React.JSX.Element {
  return (
    <View style={s.card}>
      <Text style={s.label}>Concepto (opcional)</Text>
      <TextInput
        style={s.input}
        placeholder="Ej. Cena con amigos"
        value={p.title}
        onChangeText={p.onTitle}
      />
      <Text style={s.label}>Subtotal de la cuenta</Text>
      <TextInput
        style={s.input}
        keyboardType="numeric"
        value={p.subtotalText}
        onChangeText={p.onSubtotal}
      />
      <Text style={s.label}>Propina (%)</Text>
      {renderPresetRow(p)}
      <TextInput style={s.input} keyboardType="numeric" value={p.tipText} onChangeText={p.onTip} />
      <Text style={s.label}>Personas: {p.peopleCount}</Text>
      <View style={s.row}>
        <Pressable
          style={s.buttonSmall}
          onPress={() => {
            p.onPeople(-1);
          }}
        >
          <Text style={s.buttonText}>-</Text>
        </Pressable>
        <Pressable
          style={s.buttonSmall}
          onPress={() => {
            p.onPeople(1);
          }}
        >
          <Text style={s.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
