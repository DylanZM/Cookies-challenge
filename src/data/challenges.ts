export const challenges = [
  "Write down three things you are grateful for today.",
  "Drink an extra glass of water right now.",
  "Do 10 minutes of physical stretching.",
  "Send a message appreciating a friend or family member.",
  "Read an article or a chapter of a book on a new topic.",
  "Spend 15 minutes organizing a messy physical space.",
  "Take a 15-minute walk outside without looking at your phone.",
  "Try a new healthy recipe or cook something different.",
  "Meditate or do deep breathing exercises for 5 minutes.",
  "Write down a personal goal for this week and one step to achieve it.",
  "Compliment a stranger or a coworker today.",
  "Unfollow 5 accounts on social media that don't bring you joy.",
  "Listen to an album you've never heard before from start to finish.",
  "Practice a hobby you enjoy but haven't done in a while for 20 minutes.",
  "Go to bed 30 minutes earlier than your usual time."
];

export function getRandomChallenge(): string {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}
