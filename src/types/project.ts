export type projectTypes = {
  overview: overviewTypes;
  responsibility: string[];
  description: descriptionType;
  demo?: demoType;
  link?: {
    admin?: string;
    client?: string;
    github?: string;
  };
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
};
