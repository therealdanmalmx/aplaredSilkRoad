import { atomWithStorage } from "jotai/utils";
import type { CartItem } from "./types";

export const cartAtom = atomWithStorage<CartItem[]>("shopping-cart", []);
