import { atom } from 'jotai';

const priceRangeFromAtom = atom<number | ''>('');
const priceRangeToAtom = atom<number | ''>('');

export const priceRangeFrom = atom(
  (get) => get(priceRangeFromAtom),
  (_, set, _arg: number) => set(priceRangeFromAtom, _arg)
);

export const priceRangeTo = atom(
  (get) => get(priceRangeToAtom),
  (_, set, _arg: number) => set(priceRangeToAtom, _arg)
);
