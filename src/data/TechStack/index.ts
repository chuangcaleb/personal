import frameworks from "./decks/frameworks";
import languages from "./decks/languages";
import ui from "./decks/ui";
import type { TechCard } from "./types";

const TechStack = Object.assign({}, languages, frameworks, ui);

export type TechTitle = keyof typeof TechStack;

export default TechStack as Record<TechTitle, TechCard>;

console.log("🚀 ~ file: index.ts:12 ~ TechStack:", TechStack);
