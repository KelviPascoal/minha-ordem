import { api } from "./axios";

export const getCEP = async (cep: string) => {
  if (cep.length === 8) {
    const cepResponse = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log("cepResponsecepResponsecepResponse", cepResponse);

    if (!cepResponse.data.error) {
      const addressData = {
        address: cepResponse.data.logradouro,
        district: cepResponse.data.bairro,
        city: cepResponse.data.localidade,
        uf: cepResponse.data.uf,
      };
      return addressData;
    }
  }
};
