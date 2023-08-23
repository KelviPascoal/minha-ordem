import { customers } from "../../__mocks__";
import { api } from "../api";

const PATH = "/customers";

export const customersService = {
  get: async (id?: string) => {
    if (id) {
      const [item] = customers.filter((item) => item.id === id);
      return { data: item };
    }
    return await { data: customers };
  },
  create: async (data: any) => {
    customers.push(data);
  },
  update: async (data: any, id: string) => {
    const index = customers.findIndex((item) => item.id === id);
    customers[index] = data;
  },

  delete: async (id: string) => {
    const index = customers.findIndex((item) => item.id === id);
    customers.splice(index, 1);
  },

  /*
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
  */
};
