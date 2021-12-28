import httpServise from "./httpServices";

const userEndpoint = "user?";

export const userService = {
  fetchAll: async (page, count) => {
    const { data } = await httpServise.get(
      `${userEndpoint}page=${page}&count=${count}`
    );
    return data;
  },
};
