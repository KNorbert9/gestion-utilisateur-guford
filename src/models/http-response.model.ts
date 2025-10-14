export interface  HttpResponseModel<T> {
  status: number;
  message: string;
  data: T;
  results: T;
  result: T;
}
