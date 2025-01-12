import { Storage } from "./storage.js";

export const isUserLogin = () => {
  const user = Storage.get("user");
  return !!user;
};
