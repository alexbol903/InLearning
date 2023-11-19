import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable, PartialObserver } from 'rxjs';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const httpClient = () => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 10000,
  });
};

export const getAsObservable = (url: string, config?: AxiosRequestConfig) => {
  return Observable.create((observer: PartialObserver<AxiosResponse>) => {
    const cancelToken = axios.CancelToken.source();

    httpClient()
      .get(url, {
        cancelToken: cancelToken.token,
        ...config,
      })
      .then(
        (result) => {
          observer.next?.(result);
          observer.complete?.();
        },
        (error) => {
          if (axios.isCancel(error)) {
            observer.complete?.();
          } else {
            observer.error?.(error);
          }
        }
      );

    return () => cancelToken.cancel();
  });
};
