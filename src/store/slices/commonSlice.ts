import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type commonState = {
  chat_id: string;
  messages: Array<any>;
  chat_title: string;
};

const initialState: commonState = {
  chat_id: '',
  messages: [],
  chat_title: ''
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setChatId(state: commonState, action: PayloadAction<string>) {
      state.chat_id = action.payload
    },
    setMessages(state: commonState, action: PayloadAction<Array<any>>) {
      state.messages = action.payload
    },
    setChatTitle(state: commonState, action: PayloadAction<string>) {
      state.chat_title = action.payload
    }
  },
});

export default commonSlice.reducer;
export const { setChatId, setMessages, setChatTitle } = commonSlice.actions;

export const commonSelector = (state: RootState) => state.common
