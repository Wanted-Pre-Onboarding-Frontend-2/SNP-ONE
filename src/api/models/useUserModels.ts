import { useState } from "react";
import { apiRequest } from "../instance/instance";

export const useUsersModel = () => {
  const postUsers = async (data: any) => {
    const response: void | any = await apiRequest.post("/users", data);
    return response;
  };

  return {
    postUsers,
  };
};
