import store from "~/store/index.js";
import {_setCurrentAccount} from "~/store/auth/index.js";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))