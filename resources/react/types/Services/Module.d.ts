export type Module = {
  status: boolean | string;
  name: string;
  alias: string;
  description: string;
  keywords: Array<string | boolean | number>;
  image?: string;
};

export type Modules = Array<Module>;
