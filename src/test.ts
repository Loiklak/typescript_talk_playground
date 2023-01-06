import { TranslationKeysExtractor } from "./main";
import { Equal, Expect } from "./utils";

namespace test {
  const input = {
    translationKey: "Traduction fr",
  } as const;

  type expected = "translationKey";

  type test = Expect<Equal<TranslationKeysExtractor<typeof input>, expected>>;
}

namespace test {
  const input = {
    toto: "Traduction fr",
  } as const;

  type expected = "toto";

  type test = Expect<Equal<TranslationKeysExtractor<typeof input>, expected>>;
}

namespace test {
  const input = {
    translationKey: "Traduction fr",
    toto: "traduction fr 2",
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "translationKey" | "toto";

  type test = Expect<Equal<output, expected>>;
}

namespace test {
  const input = {
    toto: {
      tata: "Traduction",
    },
  } as const;

  type output = TranslationKeysExtractor<typeof input>;

  type expected = "toto.tata";

  type test = Expect<Equal<output, expected>>;
}
