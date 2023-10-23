export type IResponse = Question[];

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok
    ? res.json()
    : res.json().then(() => Promise.reject(res.status));
};

export const apiRequest = <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res));
};

export const getQuestions = () => {
  return apiRequest<IResponse>('./questions.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  });
};
