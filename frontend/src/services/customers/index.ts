import { api } from "../api";

const PATH = "/customers";

export const customersService = {
  get: async (id?: string) => {
    if (id) {
      return await api.get(`${PATH}/${id}`);
    }
    return await api.get(PATH);
  },
  create: async (data: any) => {
    return await api.post(`${PATH}/`, data);
  },
  update: async (data: any, id: string) => {
    console.log("🚀 ~ file: index.ts ~ line 16 ~ update: ~ id", id);
    console.log("🚀 ~ file: index.ts ~ line 16 ~ update: ~ data", data);

    await api.put(`${PATH}/${id}`, data);
  },

  delete: async (id: string) => {
    return await api.delete(`${PATH}/${id}`);
  },
};
