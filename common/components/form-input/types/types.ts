export interface IInput {
  id: string;
  type: React.HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  name?: string;
  minLength?: number;
  maxLength?: number;
}
