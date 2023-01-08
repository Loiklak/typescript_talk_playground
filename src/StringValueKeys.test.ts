import { StringValueKeys } from "./StringValueKeys";
import { Equal, Expect } from "./utils";

namespace shouldReturnNeverOnItemWithNoStringAsValues {
  const input = {
    translationKey: {},
  } as const;

  type expected = never;

  type output = StringValueKeys<typeof input>;

  type test = Expect<Equal<output, expected>>;
}

namespace shouldReturnKeyOnItemWithOnlyOneStringValue {
  const input = {
    translationKey: "",
  } as const;

  type expected = "translationKey";

  type output = StringValueKeys<typeof input>;

  type test = Expect<Equal<output, expected>>;
}

namespace shouldReturnStringValueKeyOnItemWithOneStringValueAndOneNonStringValue {
  const input = {
    translationKey: "",
    otherKey: {},
  } as const;

  type expected = "translationKey";

  type output = StringValueKeys<typeof input>;

  type test = Expect<Equal<output, expected>>;
}
