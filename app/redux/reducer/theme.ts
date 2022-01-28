import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
    dark: boolean
}

const initialState: ThemeState = {
    dark : false
} 

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.dark = !state.dark
    },
    initTheme(state, action: PayloadAction<boolean>){
        state.dark = action.payload
    }
  }
})
export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;