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
    await api.put(`${PATH}/${id}`, data);
  },

  delete: async (id: string) => {
    return await api.delete(`${PATH}/${id}`);
  },
};
