import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'cswapp',
  initialState: {
    isLoggedIn: false,
    profileInfo: {},
    tableData: [],
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
        console.log('ACTION: ' + action.type + ', PAYLOAD: ' + action.payload);
        state.isLoggedIn = action.payload;
    },

    setProfileInfo: (state, action) => {
        console.log('ACTION: ' + action.type + ', PAYLOAD: ' + action.payload);
        state.profileInfo = action.payload;
    },

    setTableData: (state, action) => {
        console.log('ACTION: ' + action.type + ', PAYLOAD: ' + action.payload);
        state.tableData = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setProfileInfo, setTableData } = appSlice.actions

export default appSlice.reducer;