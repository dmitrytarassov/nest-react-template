export interface IResponseData<T = null> {
  statusCode: number;
  message: string | string[];
  data: T;
}

export type IControllerResponse<T = undefined> = Partial<IResponseData<T>>;
