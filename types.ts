export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface SloganResult {
  slogans: string[];
}

export enum FormStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}