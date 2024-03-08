import { create } from "zustand";

type TableRow = {
  index: number;
  label: string;
  budget: string;
};

type TableDataForBudget = {
  data: TableRow[];
  addNew: (label: string, budget: string) => void;
  updateLabel: (label: string, index: number) => void;
  updateBudget: (budget: string, index: number) => void;
  delete: () => void;
};

export const useBudgetStore = create<TableDataForBudget>((set) => {
  return {
    data: [],

    addNew: (label, budget) => {
      set((state) => {
        return {
          data: [...state.data, { index: state.data.length, label, budget }],
        };
      });
    },

    updateLabel: (label, index) => {
      set((state) => {
        let data = [...state.data];
        data[index] = { ...data[index], label };
        return {
          data: data,
        };
      });
    },

    updateBudget: (budget , index) => {
      set((state) => {
        let data = [...state.data];
        data[index] = {...data[index] ,budget };
        return {
           data : data
        }
      })
    },
    delete: () => {},
  };
});
