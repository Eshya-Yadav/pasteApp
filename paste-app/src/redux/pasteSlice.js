import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const loadPastes = () => {
  try {
    const stored = localStorage.getItem('pastes')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('❌ Corrupted localStorage detected. Clearing...', error)
    localStorage.removeItem('pastes')
    return []
  }
}

const initialState = {
  pastes: loadPastes(),
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

    addToPastes: (state, action) => {
      const paste = action.payload;


      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));

      toast.success('Paste added successfully')
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        toast.success('Paste updated successfully')

        localStorage.setItem('pastes', JSON.stringify(state.pastes))
      }

    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('All pastes have been reset successfully')

    },
    removeAllPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste removed successfully')

      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeAllPastes } = pasteSlice.actions

export default pasteSlice.reducer