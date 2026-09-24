export type CompanySectionHeader = {
  sectionHeader: string;
  sectionDescription: string;
};

export type Company = {
  key: string;
  name: string;
  description: string;
  personQuoted: string;
  logo: string;
  bgImage: string;
};

export type InfoCardLink = {
  link: string;
  linkTitle: string;
  linkTarget: string;
  linkRel: string;
  linkStyle: string;
};

export type InfoCard = {
  title: string;
  description: string;
  links: InfoCardLink[];
};

export type ScheduleEvent = {
  name: string;
  timeuk: string;
};

export type Schedule = Record<string, Record<string, ScheduleEvent>>;
