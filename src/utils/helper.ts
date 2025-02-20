import { title } from "process";

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

export const IMPLENIA_LIST: string[] = [
  "Ideas submitted",
  "Active Platform users",
  "Community Members",
];

export const KICKBOX_PROCESS_LIST = [
  {
    image: "/assets/images/png/kick-box-red.png",
    title: "Validate",
    titleClass: "text-red",
    heading: "RedBox",
    descriptionOne:
      "You’ve taken the first step -welcome to the RedBox phase! In this phase, you’ll validate your idea and test its business potential. The RedBox concludes with you pitching your idea to internal sponsors to secure funding for the BlueBox phase.",
    descriptionTwo:
      "Duration: 2 months Start Budget: 700 CHF/EUR 20% of your working time",
  },
  {
    image: "/assets/images/png/kick-box-blue.png",
    title: "Pilot",
    titleClass: "text-lightBlue",
    heading: "BlueBox",
    descriptionOne:
      "This phase begins once you’ve secured a sponsor. Here, you’ll test your pilot with real customers, gather insights, and make improvements. Upon successful testing, you’ll receive support to secure a sponsor for the final implementation phase.",
    descriptionTwo:
      "Duration:  4-6 months Budget: According to funding 20% of  your working time",
  },
  {
    image: "/assets/images/png/kick-box-gold.png",
    title: "Implement",
    titleClass: "text-orangeLight",
    heading: "GoldBox",
    descriptionOne:
      "Once you've proven that your idea has real business potential, you'll move to the GoldBox phase. Congratulations! This is your opportunity to scale and implement your idea within the organization, as a separate project, or even as a spin-off.",
    descriptionTwo:
      "Duration: ongoing Budget: According to funding 20-100% of your working time",
  },
];
