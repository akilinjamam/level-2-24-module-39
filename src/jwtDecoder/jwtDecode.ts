"use server";

import { jwtDecode } from "jwt-decode";

export const jwtDecoder = (data: string) => {
  const decode = jwtDecode<any>(data);

  return decode;
};
