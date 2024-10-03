import { Selection, TextInput } from "./question";

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};


export interface Test<T extends Selection | TextInput> {
  header: string; // название теста
  questions: T[];
  time: Time;
}
