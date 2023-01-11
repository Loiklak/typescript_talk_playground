import { TranslationKeysExtractor } from "./main";
import { Equal, Expect } from "./utils";
import { Test } from "ts-toolbelt";

const { checks, check } = Test;

checks([
  check<
    TranslationKeysExtractor<{ translationKey: "Traduction fr" }>,
    "translationKey",
    Test.Pass
  >(),
  check<
    TranslationKeysExtractor<{ toto: "Traduction fr" }>,
    "toto",
    Test.Pass
  >(),
  check<
    TranslationKeysExtractor<{
      translationKey: "Traduction fr";
      toto: "traduction fr 2";
    }>,
    "translationKey" | "toto",
    Test.Pass
  >(),
  check<
    TranslationKeysExtractor<{ toto: { tata: "Traduction" } }>,
    "toto.tata",
    Test.Pass
  >(),
  check<
    TranslationKeysExtractor<{
      toto: { tata: "Traduction" };
      translationKey: "traduction 2";
    }>,
    "toto.tata" | "translationKey",
    Test.Pass
  >(),
  check<
    TranslationKeysExtractor<{ toto: { tata: { titi: "Traduction" } } }>,
    "toto.tata.titi",
    Test.Pass
  >(),
]);
