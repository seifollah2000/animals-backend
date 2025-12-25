export interface ResponseType<T> {
  status: boolean;
  statusCode: number;
  message?: string;
  data: T | null;
}
