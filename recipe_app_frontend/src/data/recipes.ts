export type Ingredient = {
  name: string;
  qty: string;
};

export type Step = {
  index: number;
  text: string;
  timecode?: number; // seconds into the video
};

export type Recipe = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string; // human-readable (e.g., "05:30")
  ingredients: Ingredient[];
  steps: Step[];
  videoSrc: string; // could be a URL or local path
};

// PUBLIC_INTERFACE
export const getMockRecipes = (): Recipe[] => {
  /**
   * Returns an array of sample recipes using local demo assets.
   * If you replace videoSrc with a real URL ensure CORS is allowed in your environment.
   */
  const baseThumb = "/assets/placeholder-thumb.jpg"; // can be replaced by real thumbnail in public folder
  const localDemoVideo = "/assets/demo.mp4"; // local demo asset for graceful env fallback

  return [
    {
      id: "classic-carbonara",
      title: "Classic Spaghetti Carbonara",
      thumbnail: baseThumb,
      duration: "06:45",
      videoSrc: localDemoVideo,
      ingredients: [
        { name: "Spaghetti", qty: "200g" },
        { name: "Eggs", qty: "3" },
        { name: "Pancetta", qty: "100g" },
        { name: "Parmesan", qty: "50g" },
        { name: "Black Pepper", qty: "to taste" },
        { name: "Salt", qty: "to taste" },
      ],
      steps: [
        { index: 1, text: "Boil spaghetti in salted water.", timecode: 5 },
        { index: 2, text: "Crisp pancetta in a pan.", timecode: 60 },
        { index: 3, text: "Whisk eggs with grated Parmesan.", timecode: 120 },
        { index: 4, text: "Combine pasta, pancetta and egg mixture off heat.", timecode: 220 },
        { index: 5, text: "Season with black pepper and serve.", timecode: 320 },
      ],
    },
    {
      id: "lemon-garlic-salmon",
      title: "Lemon Garlic Salmon",
      thumbnail: baseThumb,
      duration: "04:20",
      videoSrc: localDemoVideo,
      ingredients: [
        { name: "Salmon Fillet", qty: "2 pieces" },
        { name: "Lemon", qty: "1" },
        { name: "Garlic", qty: "3 cloves" },
        { name: "Olive Oil", qty: "2 tbsp" },
        { name: "Salt", qty: "to taste" },
        { name: "Pepper", qty: "to taste" },
      ],
      steps: [
        { index: 1, text: "Season salmon with salt and pepper.", timecode: 10 },
        { index: 2, text: "Sear salmon skin-side down.", timecode: 45 },
        { index: 3, text: "Add garlic and lemon slices to the pan.", timecode: 120 },
        { index: 4, text: "Finish with olive oil and baste.", timecode: 180 },
      ],
    },
    {
      id: "veggie-stirfry",
      title: "Quick Veggie Stir-Fry",
      thumbnail: baseThumb,
      duration: "05:05",
      videoSrc: localDemoVideo,
      ingredients: [
        { name: "Broccoli", qty: "1 cup" },
        { name: "Bell Pepper", qty: "1" },
        { name: "Carrots", qty: "1/2 cup" },
        { name: "Soy Sauce", qty: "2 tbsp" },
        { name: "Ginger", qty: "1 tsp" },
        { name: "Garlic", qty: "2 cloves" },
      ],
      steps: [
        { index: 1, text: "Heat oil in a wok or large pan.", timecode: 5 },
        { index: 2, text: "Add aromatics: garlic and ginger.", timecode: 30 },
        { index: 3, text: "Add vegetables and stir-fry.", timecode: 75 },
        { index: 4, text: "Add soy sauce and toss.", timecode: 180 },
        { index: 5, text: "Serve hot over rice or noodles.", timecode: 240 },
      ],
    },
  ];
};
