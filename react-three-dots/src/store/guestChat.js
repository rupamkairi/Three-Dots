import { createSlice } from "@reduxjs/toolkit";

export const guestChatSlice = createSlice({
  name: "guestChat",
  initialState: {
    chatSocketId: null,
  },
  reducers: {
    changeGuestChatSocket: (state, action) => {
      const { chatSocketId } = action.payload;
      state.chatSocketId = chatSocketId;
      console.log("New User connected with socketId: " + chatSocketId);
    },
  },
});

export const { changeGuestChatSocket } = guestChatSlice.actions;

export default guestChatSlice.reducer;
