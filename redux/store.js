import { configureStore } from '@reduxjs/toolkit';

import auth from "./slices/auth/authSlice";
import lists from "./slices/list/listSlice";

export const store = configureStore({
    reducer: {
        auth,
        lists
    },
});
