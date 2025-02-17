const URL_API = 'localhost:3333/';

interface ApiQueryParams {
  [key: string]: string | number | boolean;
}
export interface requestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

const defaultRequestOptions: requestOptions = {
  page: 1,
  _limit: 10,
};

const buildQueryParams = (params: ApiQueryParams) => {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, value.toString()]);

  return `?${new URLSearchParams(query).toString()}`;
};

export async function apiRequest(
  path: string,
  params: ApiQueryParams = {},
  requestOptions: requestOptions = {}
) {
  const mergedOptions = {
    ...defaultRequestOptions,
    ...requestOptions,
  };

  const queryString: string = buildQueryParams({ ...params, ...mergedOptions });
  try {
    const response = await fetch(`http://${URL_API}${path}${queryString}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
