import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import avatars from "@/assets/avatars.jpg";

export { poster1, poster2, poster3, poster4, poster5, poster6, heroBanner, avatars };

export type Movie = {
  id: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  genres: string[];
  poster: string;
  synopsis: string;
  match: number;
};

export const movies: Movie[] = [
  {
    id: "neon-veil",
    title: "The Neon Veil",
    year: 2025,
    rating: 8.7,
    duration: "2h 14m",
    genres: ["Sci-Fi", "Thriller"],
    poster: poster1,
    synopsis: "A hooded wanderer crosses dimensions stitched from cosmic dust, hunted by a faction that fears what he remembers.",
    match: 96,
  },
  {
    id: "midnight-circuit",
    title: "Midnight Circuit",
    year: 2024,
    rating: 8.2,
    duration: "1h 58m",
    genres: ["Cyberpunk", "Action"],
    poster: poster2,
    synopsis: "In a rain-soaked metropolis powered by stolen memories, a courier breaks the only rule that mattered.",
    match: 92,
  },
  {
    id: "ashes-of-aurora",
    title: "Ashes of Aurora",
    year: 2025,
    rating: 9.1,
    duration: "2h 32m",
    genres: ["Fantasy", "Epic"],
    poster: poster3,
    synopsis: "Two rival warriors must walk into the singing forest before its lights fade for the last time.",
    match: 98,
  },
  {
    id: "zonee",
    title: "Zonee",
    year: 2024,
    rating: 7.9,
    duration: "1h 46m",
    genres: ["Romance", "Drama"],
    poster: poster4,
    synopsis: "Two strangers meet on the edge of the world and decide whether to step off it together.",
    match: 84,
  },
  {
    id: "ringbearer",
    title: "Ringbearer",
    year: 2025,
    rating: 8.5,
    duration: "2h 21m",
    genres: ["Sci-Fi", "Adventure"],
    poster: poster5,
    synopsis: "A lone astronaut drifts through the orbital ruins of a planet that should not exist.",
    match: 90,
  },
  {
    id: "horuen-mystery",
    title: "Horuen Mystery",
    year: 2024,
    rating: 7.6,
    duration: "1h 52m",
    genres: ["Horror", "Mystery"],
    poster: poster6,
    synopsis: "Six strangers inherit a mansion that remembers everyone who ever screamed inside it.",
    match: 81,
  },
];

export const continueWatching = [
  { ...movies[0], progress: 0.42 },
  { ...movies[2], progress: 0.18 },
  { ...movies[4], progress: 0.71 },
  { ...movies[1], progress: 0.05 },
];

export const genres = [
  { name: "Sci-Fi", icon: "🛸", count: 248 },
  { name: "Action", icon: "💥", count: 412 },
  { name: "Drama", icon: "🎭", count: 386 },
  { name: "Horror", icon: "👻", count: 174 },
  { name: "Romance", icon: "💜", count: 219 },
  { name: "Fantasy", icon: "🐉", count: 156 },
  { name: "Thriller", icon: "🔪", count: 298 },
  { name: "Comedy", icon: "😂", count: 341 },
];

export const moods = [
  { name: "Mind-Bending", color: "from-violet to-fuchsia-500" },
  { name: "Adrenaline", color: "from-orange-500 to-red-500" },
  { name: "Cozy Night", color: "from-amber-400 to-rose-400" },
  { name: "Tear-Jerker", color: "from-blue-400 to-violet" },
  { name: "Laugh Out Loud", color: "from-yellow-400 to-orange-500" },
  { name: "Edge of Seat", color: "from-teal to-cyan-500" },
];

export type SocialUser = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  level: number;
  xp: number;
};

export const users: SocialUser[] = [
  { id: "u1", name: "Nova Reyes", handle: "novaframes", avatar: avatars, followers: 12400, level: 27, xp: 8420 },
  { id: "u2", name: "Kai Mendoza", handle: "kaicuts", avatar: avatars, followers: 8920, level: 19, xp: 5210 },
  { id: "u3", name: "Lyra Okafor", handle: "lyralens", avatar: avatars, followers: 24800, level: 34, xp: 14820 },
  { id: "u4", name: "Ezra Chen", handle: "ezracine", avatar: avatars, followers: 4210, level: 12, xp: 2840 },
  { id: "u5", name: "Mira Halvorsen", handle: "mirareels", avatar: avatars, followers: 18200, level: 29, xp: 10120 },
];

export type Post = {
  id: string;
  user: SocialUser;
  movie?: Movie;
  text: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
};

export const posts: Post[] = [
  {
    id: "p1",
    user: users[0],
    movie: movies[0],
    text: "The cinematography in The Neon Veil completely rewired my brain. That third-act hallway sequence?? 🤯",
    image: movies[0].poster,
    likes: 1284,
    comments: 92,
    timeAgo: "2h",
  },
  {
    id: "p2",
    user: users[2],
    movie: movies[2],
    text: "Finally watched Ashes of Aurora. I didn't breathe for the last 20 minutes. This is the fantasy renaissance.",
    image: movies[2].poster,
    likes: 3421,
    comments: 248,
    timeAgo: "5h",
  },
  {
    id: "p3",
    user: users[4],
    movie: movies[1],
    text: "Hot take: Midnight Circuit > every cyberpunk film of the last decade. Fight me in the comments 😤",
    image: movies[1].poster,
    likes: 892,
    comments: 412,
    timeAgo: "8h",
  },
  {
    id: "p4",
    user: users[1],
    text: "Hosting a watch party for Ringbearer tonight at 9pm. Drop a 🚀 if you're in!",
    likes: 184,
    comments: 56,
    timeAgo: "12h",
  },
];

export const badges = [
  { id: "b1", name: "Cinephile", icon: "🎬", desc: "Watched 100+ movies", earned: true, rarity: "Rare" },
  { id: "b2", name: "Night Owl", icon: "🌙", desc: "10 movies after midnight", earned: true, rarity: "Common" },
  { id: "b3", name: "Genre Master", icon: "🎭", desc: "Explored every genre", earned: true, rarity: "Epic" },
  { id: "b4", name: "Party Host", icon: "🎉", desc: "Hosted 5 watch parties", earned: true, rarity: "Rare" },
  { id: "b5", name: "Critic", icon: "✍️", desc: "Posted 50 reviews", earned: false, rarity: "Epic" },
  { id: "b6", name: "Trendsetter", icon: "🔥", desc: "Post hits 10k likes", earned: false, rarity: "Legendary" },
  { id: "b7", name: "Marathon", icon: "⏱️", desc: "8h continuous watch", earned: true, rarity: "Common" },
  { id: "b8", name: "Sphere Elite", icon: "💎", desc: "Reach Level 50", earned: false, rarity: "Legendary" },
];

export const missions = [
  { id: "m1", title: "Watch a Sci-Fi film today", xp: 120, progress: 0, total: 1, type: "Daily" },
  { id: "m2", title: "Comment on 3 social posts", xp: 80, progress: 1, total: 3, type: "Daily" },
  { id: "m3", title: "Host a watch party this week", xp: 500, progress: 0, total: 1, type: "Weekly" },
  { id: "m4", title: "Earn 5 reactions on your post", xp: 200, progress: 3, total: 5, type: "Weekly" },
];

export const leaderboard = users
  .slice()
  .sort((a, b) => b.xp - a.xp)
  .map((u, i) => ({ ...u, rank: i + 1 }));

export const watchPartyMessages = [
  { id: "w1", user: users[0], text: "this score is insaneee", time: "00:12", reaction: "🔥" },
  { id: "w2", user: users[2], text: "wait wait wait pause", time: "00:34" },
  { id: "w3", user: users[1], text: "i CALLED this twist 😤", time: "01:02" },
  { id: "w4", user: users[3], text: "the lighting in this scene 🎨", time: "01:18", reaction: "💜" },
  { id: "w5", user: users[4], text: "never recovering from this ngl", time: "01:45" },
];

export const aiSuggestions = [
  "I want something mind-bending under 2 hours",
  "Cozy fantasy with great soundtrack",
  "A heist movie I haven't seen",
  "Find the warehouse scene from Midnight Circuit",
];

export function getMovie(id: string): Movie {
  return movies.find((m) => m.id === id) ?? movies[0];
}
