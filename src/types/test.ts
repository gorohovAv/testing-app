import { Selection, TextInput } from "./question";

export interface Test<T extends Selection | TextInput> {
  header: string; // название теста
  questions: T[];
}
