import { createSlice } from '@reduxjs/toolkit';

// Define the initial state with a type
interface AppSectionState {
  appSection: 'host' | 'visitor';
}

const initialState: AppSectionState = {
  appSection: 'visitor', // initial value is 'host'
};

// Create a slice of the store for handling appSection with types
const appSectionSlice = createSlice({
  name: 'appSection',
  initialState,
  reducers: {
    // Define a reducer and corresponding action to toggle the appSection value
    toggleAppSection(state) {
      state.appSection = state.appSection === 'host' ? 'visitor' : 'host';
    },
  },
});

// Export the action
export const { toggleAppSection } = appSectionSlice.actions;

// Export the reducer
export default appSectionSlice.reducer;
