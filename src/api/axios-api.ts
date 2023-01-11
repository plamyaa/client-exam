import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Обработка ошибки
    throw error;
  }
);

async function GET(url: string) {
  return await axiosInstance.get(url, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
}

export { GET };
