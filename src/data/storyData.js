import hero from "../assets/images/hero.png";
import how_we_met from "../assets/images/how_we_met.png";
import first_date from "../assets/images/first_date.png";
import proposal from "../assets/images/proposal.png";

export const storyData = [
  {
    id: "how-we-met",
    title: "How We Met",
    date: "June 2021",
    shortDescription: "A chance encounter that changed everything. A simple conversation in a crowded room where the world suddenly felt quiet.",
    narrative: "It wasn't a movie, but it felt like one. Among a sea of people, our eyes met across a cluttered bookstore. What started as a simple question about a classic novel turned into hours of conversation about life, dreams, and everything in between. That day, we didn't just find a book; we found a beginning.",
    image: how_we_met,
    gallery: [how_we_met, hero, first_date, proposal]
  },
  {
    id: "first-date",
    title: "Our First Date",
    date: "July 2021",
    shortDescription: "Walking through the city under the stars, realizing this was the start of something beautiful.",
    narrative: "Our first date was as simple as it was magical. We walked for miles through the city center, sharing stories and laughter. We ended up at a small, hidden jazz club where the music was soft and the atmosphere was electric. We knew then that this wasn't just another date—it was the start of our story.",
    image: first_date,
    gallery: [first_date, how_we_met, hero]
  },
  {
    id: "falling-in-love",
    title: "Falling in Love",
    date: "Autumn 2021",
    shortDescription: "Quiet moments and big adventures. Learning that home isn't a place, but a person.",
    narrative: "As the leaves turned gold, so did our hearts. We spent weekends exploring local trails, cooking together, and simply being in each other's presence. Every shared sunset and every morning coffee brought us closer. We realized that 'home' was no longer a location, but wherever we were together.",
    image: hero,
    gallery: [hero, proposal, first_date]
  },
  {
    id: "the-proposal",
    title: "The Proposal",
    date: "August 2023",
    shortDescription: "A 'Yes' that echoed through forever. A promise made under a golden sky.",
    narrative: "On a quiet beach as the sun dipped below the horizon, everything became still. With a simple question and an emotional 'Yes', our lives were forever intertwined. It was a moment of pure clarity and overwhelming joy, a promise to walk hand in hand through all the seasons of life.",
    image: proposal,
    gallery: [proposal, first_date, hero, how_we_met]
  },
  {
    id: "the-wedding",
    title: "Our Wedding",
    date: "June 2025",
    shortDescription: "The day we say 'I Do' celebrate our love with all our favorite people.",
    narrative: "This is the chapter we are about to write. A celebration of everything we've built, surrounded by the people who mean the most to us. A day of joy, dance, and a lot of love as we officially begin our journey as husband and wife.",
    image: hero,
    gallery: [hero, proposal, first_date, how_we_met]
  }
];
