declare type Location = {
  readonly href: string;
  readonly pathname: string;
  readonly search: string;
};

declare type History = {
  replaceState(data: any, unused: string, url?: string | null): void;
};

declare const URLSearchParams: {
  prototype: URLSearchParams;
  new (init?: string | string[][] | Record<string, string> | URLSearchParams): URLSearchParams;
};

interface URLSearchParams {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  toString(): string;
}
