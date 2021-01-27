let baseUrl = 'http://localhost:8010';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestOptions = {
  method?: MethodType;
  shouldBasicAuth?: boolean;
  token?: string;
  query?: ObjectKey;
  body?: any;
  shouldTextPlan?: boolean;
};

export type Result = {
  statusCode: number;
  data?: any;
  errorCode?: string;
};

let fetchApi = async (
  path: string,
  {
    method = 'GET',
    token = '',
    query,
    body,
    shouldTextPlan= false,
  }: RequestOptions = {},
) => {
  let url = `${baseUrl}${path}`;

  if (query) {
    let queryParams = `?${Object.keys(query)
      .map((key) => `${key}=${encodeURIComponent(query && query[key])}`)
      .join('&')}`;
    url = `${url}${queryParams}`;
  }

  let optionConfig = {
    method,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  if (shouldTextPlan) {
    optionConfig.headers['Content-Type'] = 'text/plain';
    optionConfig.body = body;
  }

  return fetch(url, optionConfig)
    .then(processResponse)
    .then((res) => {
      let result: Result = {
        statusCode: res.statusCode,
        data: res.resData.data,
        errorCode: res.resData.error_code,
      };
      return result;
    })
    .catch((error) => {
      console.log('Network response was not ok', error);
      let result: Result = {
        statusCode: 500,
        errorCode: 'NETWORK_ERROR',
      };
      return result;
    });
};

function processResponse(response: any) {
  const statusCode = response.status;
  const data = response.json();

  return Promise.all([statusCode, data]).then((res) => ({
    statusCode: res[0],
    resData: res[1],
  }));
}

export default fetchApi;
