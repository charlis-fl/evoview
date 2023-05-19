import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ElementalData } from 'features/intro/types';

export type AppState = {
  header: string;
  currentDepth: number;
  currentTreeChildren: Array<ElementalData>;
}

const initialState: AppState = {
  header: '',
  currentDepth: 0,
  currentTreeChildren: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHeader: (state, { payload }: PayloadAction<string>) => {
      state.header = payload;
    },
    setCurrentTreeChildren: (state, { payload }: PayloadAction<Array<ElementalData>>) => {
      state.currentTreeChildren = payload;
    },
  },
});

export const {
  setHeader,
  setCurrentTreeChildren,
} = appSlice.actions;

export default appSlice.reducer;
