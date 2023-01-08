import { NonStringValueKeys, StringValueKeys } from "./StringValueKeys";

type Concat<T, K> = T extends string
  ? K extends string
    ? `${T}.${K}`
    : never
  : never;

export type TranslationShape = {
  [key: string]: string | TranslationShape;
};

export type TranslationKeysExtractor<TTranslations extends TranslationShape> =
  keyof {
    [Key in keyof TTranslations as TTranslations[Key] extends string
      ? Key
      : Key extends string
      ? TTranslations[Key] extends TranslationShape
        ? Concat<Key, TranslationKeysExtractor<TTranslations[Key]>>
        : never
      : never];
  };
