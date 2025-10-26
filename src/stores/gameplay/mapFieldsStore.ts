import { create } from "zustand";

interface MapFieldsStoreProps {
  mapFields: any[];
  setMapFields: (fields: any[]) => void;
  addMapField: (field: any) => void;
  updateMapField: (id: string, newValues: any) => void;
  clearMapFields: () => void;
}

export const useMapFieldsStore = create<MapFieldsStoreProps>((set) => ({
  mapFields: [],
  setMapFields: (fields) => set({ mapFields: fields }),

  addMapField: (field) =>
    set((state) => ({ mapFields: [...state.mapFields, field] })),

  updateMapField: (id, newValues) =>
    set((state) => ({
      mapFields: state.mapFields.map((field) =>
        field.id === id ? { ...field, ...newValues } : field
      ),
    })),

  clearMapFields: () => set({ mapFields: [] }),
}));
