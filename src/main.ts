type Concat<T extends string, K extends String> = `${T}.${K}`;

type TranslationShape = {
  [key: string]: string | TranslationShape;
};

export type TranslationKeysExtractor<TTranslations extends TranslationShape> =
  TTranslations[keyof TTranslations] extends string ? ;

  type Toto <object, keys> = objet[keys] extends string ? keys : 