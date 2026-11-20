import { StyleSheet } from "react-native";

export const tipStyles = StyleSheet.create({
  container: { padding: 20, gap: 16 },
  heading: { fontSize: 22, fontWeight: "700", color: "#111827" },
  subHeading: { fontSize: 18, fontWeight: "600", color: "#111827" },
  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },
  summaryBox: {
    backgroundColor: "#EFF6FF",
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: "#BFDBFE"
  },
  label: { fontSize: 14, fontWeight: "600", color: "#374151" },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16
  },
  row: { flexDirection: "row", gap: 8, alignItems: "center" },
  chip: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999
  },
  chipText: { fontWeight: "600", color: "#111827" },
  buttonSmall: {
    backgroundColor: "#2563EB",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  primaryButton: {
    backgroundColor: "#1D4ED8",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4
  },
  buttonText: { color: "#FFFFFF", fontWeight: "600", fontSize: 15 },
  summaryLine: { fontSize: 15, color: "#1F2937" },
  highlight: { fontSize: 18, fontWeight: "700", color: "#1E3A8A" },
  historyHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  clearText: { color: "#DC2626", fontWeight: "600" },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB"
  },
  itemTitle: { fontWeight: "600", fontSize: 15, color: "#111827" },
  itemMeta: { fontSize: 13, color: "#4B5563" },
  deleteText: { color: "#DC2626", fontSize: 13, fontWeight: "600" }
});
