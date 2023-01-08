import { TranslationShape } from "./main";

export type StringValueKeys<T extends TranslationShape> = keyof {
  [Key in keyof T as T[Key] extends string ? Key : never];
};

export type NonStringValueKeys<T extends TranslationShape> = keyof {
  [Key in keyof T as T[Key] extends string ? never : Key];
};
