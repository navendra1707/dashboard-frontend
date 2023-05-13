import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  regions: [],
  sources: [],
  endYears: [],
  topics: [],
  sectors: []
}

const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.countries = action.payload.countries;
      state.regions = action.payload.regions;
      state.sources = action.payload.sources;
      state.endYears = action.payload.endYears;
      state.topics = action.payload.topics;
      state.sectors = action.payload.sectors;
    }
  }
});

export const {setData} = DataSlice.actions;
export default DataSlice.reducer;