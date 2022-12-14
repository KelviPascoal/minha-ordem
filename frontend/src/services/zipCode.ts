import axios from "axios";

const api = axios.create({});

export const getZipCode = async (zipCode: string) => {
  if (zipCode.length === 8) {
    const zipCodeResponse = await api.get(
      `https://viacep.com.br/ws/${zipCode}/json/`
    );

    if (!zipCodeResponse.data.error) {
      const addressData = {
        address: zipCodeResponse.data.logradouro,
        district: zipCodeResponse.data.bairro,
        city: zipCodeResponse.data.localidade,
        uf: zipCodeResponse.data.uf,
      };
      return addressData;
    }
  }
};
