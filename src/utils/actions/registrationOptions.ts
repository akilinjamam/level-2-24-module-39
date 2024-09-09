"use server";

import { UserData } from "@/app/register/page";

export const registerForm = async (data: UserData) => {
  const result = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await result.json();

  return userInfo;
};
