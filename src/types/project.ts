export type projectTypes = {
  isClickable: boolean;
  overview?: overviewTypes;
  responsibility?: string[];
  description?: descriptionType;
  demo?: demoType[];
  link?: LinkType[];
  account?: AccountType[];
};

export type overviewTypes = {
  name: string;
  thumb: string;
  role: string;
  short_description: string;
  tech: string[];
};

export type descriptionType = {
  admin?: {
    thumb?: string;
    content?: string[];
  };
  client?: {
    thumb?: string;
    content?: string[];
  };
};

export type demoType = {
  url?: string;
  title?: string;
};

export type LinkType = {
  title?: string;
  url?: string;
};

export type AccountType = {
  username: string;
  password: string;
  role: string;
};
