import axios from 'axios';

const BASE_URL = 'https://suap.ifpi.edu.br/api/v2';

export const autenticar = async (matricula, senha) => {
  try {
    const response = await axios.post(`${BASE_URL}/autenticacao/token/`, {
      username: matricula,
      password: senha,
    });

    return response.data.token;
  } catch (error) {
    throw new Error('Falha na autenticação');
  }
};

export const getMeusDados = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/minhas-informacoes/meus-dados/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Falha ao obter dados do aluno');
  }
};
