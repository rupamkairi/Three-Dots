import { configureStore } from "@reduxjs/toolkit";

import guestChatReducer from "./guestChat";

export default configureStore({
  reducer: {
    guestChat: guestChatReducer,
  },
});
