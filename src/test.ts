import { TranslationKeysExtractor } from "./main";
import { Equal, Expect } from "./utils";

namespace shouldExtractKeyOfSimpleItem {
  const input = {
    translationKey: "Traduction fr",
  } as const;

  type expected = "translationKey";

  type test = Expect<Equal<TranslationKeysExtractor<typeof input>, expected>>;
}

namespace shouldExtractOfAnotherSimpleItem {
  const input = {
    toto: "Traduction fr",
  } as const;

  type expected = "toto";

  type test = Expect<Equal<TranslationKeysExtractor<typeof input>, expected>>;
}

namespace shouldExtractKeysOfItemWithMultipleKeys {
  const input = {
    translationKey: "Traduction fr",
    toto: "traduction fr 2",
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "translationKey" | "toto";

  type test = Expect<Equal<output, expected>>;
}

namespace shouldExtractASingleNestedKey {
  const input = {
    toto: {
      tata: "Traduction",
    },
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "toto.tata";

  type test = Expect<Equal<output, expected>>;
}

namespace shouldExtractNestedKeyAndSimpleKey {
  const input = {
    toto: {
      tata: "Traduction",
    },
    translationKey: "traduction 2",
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "toto.tata" | "translationKey";

  type test = Expect<Equal<output, expected>>;
}

namespace shouldExtractDoubleNestedKey {
  const input = {
    toto: {
      tata: { titi: "Traduction" },
    },
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "toto.tata.titi";

  type test = Expect<Equal<output, expected>>;
}
