import {rootReducer, setupStore} from "@/redux/store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type DispatchFunc = () => AppDispatch;
