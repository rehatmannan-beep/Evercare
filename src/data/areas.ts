export interface StateArea {
  state: string;
  counties?: string[];
  areas?: string[];
}

export interface ServiceAreas {
  nj: StateArea;
  ny: StateArea;
}

export const areas: ServiceAreas = {
  nj: {
    state: "New Jersey",
    counties: [
      "Bergen",
      "Hudson",
      "Essex",
      "Passaic",
      "Union",
      "Middlesex",
      "Morris",
      "Somerset",
    ],
  },
  ny: {
    state: "New York",
    areas: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "The Bronx",
      "Staten Island",
      "Nassau",
      "Westchester",
      "Rockland",
    ],
  },
};
