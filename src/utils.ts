/**
 * TYPESCRIPT MENTAL MODEL
 *
 * Les types sont des ensembles. T extends K <=> T C K
 * Les génériques sont des fonctions qui agissent sur les types
 * Les if/else sont des ternaires
 */

/**
 * Utils d'égalité qui se base sur la notion d'égalité dans un ensemble.
 * T = K <=> T C K et K C T <=> T extends K & K extends T
 */
export type Equal<T, K> = [T] extends [K]
  ? [K] extends [T]
    ? true
    : false
  : false;

/**
 * Fonction qui expect un argument (= type générique) qui est le littéral true
 * Throw une erreur sinon
 */
export type Expect<T extends true> = T;
