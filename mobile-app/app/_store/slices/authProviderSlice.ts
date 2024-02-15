import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface AuthUserState {
    authUser: User | null
};

const initialState: AuthUserState = {
    authUser: null
};

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
      setAuthUser(state, action) {
        state.authUser = action.payload;
      },
    },
});

// Export the action
export const { setAuthUser } = authUserSlice.actions;

// Export the reducer
export default authUserSlice.reducer;