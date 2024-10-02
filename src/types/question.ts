interface Question {
  header: string;
}
export enum SelectionType {
  Unary,
  Multiple,
}
export enum InputType {
  Short,
  Long,
}

export interface Selection extends Question {
  variants: string[];
  type: SelectionType;
}

export interface TextInput extends Question {
  placeholder: string;
  type: InputType;
}
