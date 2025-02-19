interface ImpleniaItem {
  number: number;
  title: string;
}
interface HeaderItem {
  title: string;
  link: string;
}

export const HEADER_LIST: HeaderItem[] = [
  {
    title: "Home",
    link: "#hero",
  },
  {
    title: "Stories",
    link: "#stories",
  },
  {
    title: "Community",
    link: "#community",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export const IMPLENIA_LIST: ImpleniaItem[] = [
  {
    number: 155,
    title: "Ideas submitted",
  },
  {
    number: 325,
    title: "Active Platform users",
  },
  {
    number: 250,
    title: "Community Members",
  },
];
