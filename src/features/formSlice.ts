import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  fullName: string;
  state: string;
  city: string;
  address: string;
  email: string;
  mobileNumber: string;
  profilePic: File | null;
}

const initialState: FormState = {
  fullName: '',
  state: '',
  city: '',
  address: '',
  email: '',
  mobileNumber: '',
  profilePic: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: string; value: any }>) => {
      (state as any)[action.payload.field] = action.payload.value;
    },
    setProfilePic: (state, action: PayloadAction<File>) => {
      state.profilePic = action.payload;
    },
  },
});

export const { setField, setProfilePic } = formSlice.actions;
export default formSlice.reducer;
