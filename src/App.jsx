import React, { useState, useEffect } from "react";
import "./App.css";

// Sample event data
const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Weekend Hike Adventure",
    category: "fitness",
    date: "2026-02-15",
    time: "08:00",
    location: "Mountain Trail",
    description:
      "Join us for an exciting mountain hike. All skill levels welcome!",
    attendees: 12,
    maxAttendees: 20,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    host: "Sarah Chen",
    cost: 0,
    attendeesList: [
      {
        name: "John Doe",
        initial: "JD",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "Emma Wilson",
        initial: "EW",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Mike Johnson",
        initial: "MJ",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 2,
    title: "Art Painting Workshop",
    category: "creative",
    date: "2026-03-20",
    time: "02:00",
    location: "Downtown Art Studio",
    description:
      "Learn professional painting techniques from industry experts.",
    attendees: 8,
    maxAttendees: 15,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    host: "Maya Patel",
    cost: 45,
    attendeesList: [
      {
        name: "Amy Brown",
        initial: "AB",
        avatar: "https://i.pravatar.cc/150?img=25",
      },
      {
        name: "Chris Lee",
        initial: "CL",
        avatar: "https://i.pravatar.cc/150?img=67",
      },
      {
        name: "Jordan Lee",
        initial: "JL",
        avatar: "https://i.pravatar.cc/150?img=29",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 3,
    title: "Tech Networking Mixer",
    category: "professional",
    date: "2024-09-17",
    time: "18:00",
    location: "Tech Hub Downtown",
    description: "Connect with fellow tech enthusiasts and industry leaders.",
    attendees: 35,
    maxAttendees: 50,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    host: "David Kumar",
    cost: 0,
    attendeesList: [
      {
        name: "Rachel Green",
        initial: "RG",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      {
        name: "Tom Harris",
        initial: "TH",
        avatar: "https://i.pravatar.cc/150?img=59",
      },
      {
        name: "Julia Roberts",
        initial: "JR",
        avatar: "https://i.pravatar.cc/150?img=26",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 4,
    title: "Jazz Night Party",
    category: "social",
    date: "2024-09-18",
    time: "08:00",
    location: "Blue Moon Bar",
    description: "Enjoy an evening of smooth jazz and great company.",
    attendees: 67,
    maxAttendees: 100,
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
    host: "Jessica White",
    cost: 25,
    attendeesList: [
      {
        name: "Patrick Wilson",
        initial: "PW",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      {
        name: "Sophie Martin",
        initial: "SM",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
      {
        name: "Carlos Rivera",
        initial: "CR",
        avatar: "https://i.pravatar.cc/150?img=57",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 5,
    title: "Sunset Beach Yoga",
    category: "fitness",
    date: "2026-04-10",
    time: "18:30",
    location: "Venice Beach",
    description: "Relax and stretch while watching the beautiful sunset.",
    attendees: 24,
    maxAttendees: 30,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    host: "Lisa Anderson",
    cost: 15,
    attendeesList: [
      {
        name: "Sarah Kim",
        initial: "SK",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Tyler Rose",
        initial: "TR",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Maya Singh",
        initial: "MS",
        avatar: "https://i.pravatar.cc/150?img=41",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 6,
    title: "Coffee & Code",
    category: "professional",
    date: "2026-05-15",
    time: "10:00",
    location: "Startup Cafe",
    description: "Morning coding session with coffee and collaboration.",
    attendees: 18,
    maxAttendees: 25,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    host: "Alex Chen",
    cost: 0,
    attendeesList: [
      {
        name: "Mark Davis",
        initial: "MD",
        avatar: "https://i.pravatar.cc/150?img=51",
      },
      {
        name: "Nina Patel",
        initial: "NP",
        avatar: "https://i.pravatar.cc/150?img=9",
      },
      {
        name: "Lucas Park",
        initial: "LP",
        avatar: "https://i.pravatar.cc/150?img=17",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 7,
    title: "Wine Tasting Night",
    category: "social",
    date: "2024-09-21",
    time: "19:00",
    location: "Vintage Wine Bar",
    description: "Sample exquisite wines from around the world.",
    attendees: 42,
    maxAttendees: 50,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    host: "Robert Laurent",
    cost: 35,
    attendeesList: [
      {
        name: "Emily Stone",
        initial: "ES",
        avatar: "https://i.pravatar.cc/150?img=20",
      },
      {
        name: "Jack Brown",
        initial: "JB",
        avatar: "https://i.pravatar.cc/150?img=60",
      },
      {
        name: "Zara Ahmed",
        initial: "ZA",
        avatar: "https://i.pravatar.cc/150?img=43",
      },
    ],
    saved: false,
  },
  {
    id: 8,
    title: "Photography Walk",
    category: "creative",
    date: "2024-09-22",
    time: "09:00",
    location: "Downtown District",
    description: "Explore urban photography with professional guidance.",
    attendees: 15,
    maxAttendees: 20,
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    host: "Michael Zhang",
    cost: 20,
    attendeesList: [
      {
        name: "Olivia Lee",
        initial: "OL",
        avatar: "https://i.pravatar.cc/150?img=36",
      },
      {
        name: "Ryan Park",
        initial: "RP",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
      {
        name: "Ava Torres",
        initial: "AT",
        avatar: "https://i.pravatar.cc/150?img=48",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 9,
    title: "Indoor Rock Climbing",
    category: "fitness",
    date: "2026-02-28",
    time: "14:00",
    location: "Summit Climbing Gym",
    description:
      "Challenge yourself with indoor rock climbing. All levels welcome, equipment provided.",
    attendees: 16,
    maxAttendees: 25,
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop",
    host: "Alex Rivera",
    cost: 35,
    attendeesList: [
      {
        name: "Sam Collins",
        initial: "SC",
        avatar: "https://i.pravatar.cc/150?img=51",
      },
      {
        name: "Nina Patel",
        initial: "NP",
        avatar: "https://i.pravatar.cc/150?img=38",
      },
      {
        name: "Tyler Brooks",
        initial: "TB",
        avatar: "https://i.pravatar.cc/150?img=62",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 10,
    title: "Trapeze Yoga",
    category: "fitness",
    date: "2026-03-05",
    time: "18:00",
    location: "Aerial Arts Studio",
    description:
      "Experience the unique combination of trapeze and yoga. Build strength and flexibility.",
    attendees: 12,
    maxAttendees: 15,
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    host: "Luna Martinez",
    cost: 45,
    attendeesList: [
      {
        name: "Grace Kim",
        initial: "GK",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
      {
        name: "Marcus Lee",
        initial: "ML",
        avatar: "https://i.pravatar.cc/150?img=55",
      },
      {
        name: "Aria Johnson",
        initial: "AJ",
        avatar: "https://i.pravatar.cc/150?img=27",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 11,
    title: "Sculpture Class",
    category: "creative",
    date: "2026-03-12",
    time: "13:00",
    location: "Modern Art Workshop",
    description:
      "Learn clay sculpting techniques and create your own masterpiece.",
    attendees: 10,
    maxAttendees: 12,
    image:
      "https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=800&h=600&fit=crop",
    host: "Isabella Chen",
    cost: 55,
    attendeesList: [
      {
        name: "Oliver Smith",
        initial: "OS",
        avatar: "https://i.pravatar.cc/150?img=53",
      },
      {
        name: "Sophia Brown",
        initial: "SB",
        avatar: "https://i.pravatar.cc/150?img=40",
      },
      {
        name: "Liam Davis",
        initial: "LD",
        avatar: "https://i.pravatar.cc/150?img=68",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 12,
    title: "Jewelry Making Workshop",
    category: "creative",
    date: "2026-03-18",
    time: "15:00",
    location: "Artisan's Corner",
    description:
      "Design and craft your own custom jewelry pieces with guidance from experts.",
    attendees: 14,
    maxAttendees: 18,
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop",
    host: "Jade Williams",
    cost: 40,
    attendeesList: [
      {
        name: "Emma White",
        initial: "EW",
        avatar: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Noah Garcia",
        initial: "NG",
        avatar: "https://i.pravatar.cc/150?img=71",
      },
      {
        name: "Mia Rodriguez",
        initial: "MR",
        avatar: "https://i.pravatar.cc/150?img=49",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 13,
    title: "Graffiti Workshop",
    category: "creative",
    date: "2026-03-25",
    time: "17:00",
    location: "Urban Art Space",
    description:
      "Learn street art techniques and create stunning graffiti pieces legally.",
    attendees: 20,
    maxAttendees: 25,
    image:
      "https://images.unsplash.com/photo-1561290332-12b3e59b70c1?w=800&h=600&fit=crop",
    host: "Diego Santos",
    cost: 30,
    attendeesList: [
      {
        name: "Zoe Martinez",
        initial: "ZM",
        avatar: "https://i.pravatar.cc/150?img=39",
      },
      {
        name: "Ethan Taylor",
        initial: "ET",
        avatar: "https://i.pravatar.cc/150?img=58",
      },
      {
        name: "Ava Anderson",
        initial: "AA",
        avatar: "https://i.pravatar.cc/150?img=31",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 14,
    title: "DJ Workshop",
    category: "creative",
    date: "2026-04-01",
    time: "19:00",
    location: "Beat Lab Studio",
    description:
      "Learn the art of DJing, mixing, and creating amazing soundscapes.",
    attendees: 18,
    maxAttendees: 20,
    image:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop",
    host: "DJ Phoenix",
    cost: 50,
    attendeesList: [
      {
        name: "Lucas Moore",
        initial: "LM",
        avatar: "https://i.pravatar.cc/150?img=64",
      },
      {
        name: "Chloe Wilson",
        initial: "CW",
        avatar: "https://i.pravatar.cc/150?img=35",
      },
      {
        name: "Mason Harris",
        initial: "MH",
        avatar: "https://i.pravatar.cc/150?img=72",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 15,
    title: "Dumpling & Dim Sum Cooking Class",
    category: "foodie",
    date: "2026-04-08",
    time: "11:00",
    location: "Culinary Institute Downtown",
    description:
      "Master the art of making authentic dumplings and dim sum with a professional chef.",
    attendees: 22,
    maxAttendees: 30,
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&fit=crop",
    host: "Chef Wei Zhang",
    cost: 60,
    attendeesList: [
      {
        name: "Harper Lee",
        initial: "HL",
        avatar: "https://i.pravatar.cc/150?img=42",
      },
      {
        name: "Jackson Young",
        initial: "JY",
        avatar: "https://i.pravatar.cc/150?img=66",
      },
      {
        name: "Lily Thompson",
        initial: "LT",
        avatar: "https://i.pravatar.cc/150?img=37",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 16,
    title: "Indoor Skydiving Experience",
    category: "adrenaline",
    date: "2026-04-15",
    time: "16:00",
    location: "iFLY Wind Tunnel",
    description:
      "Feel the rush of skydiving in a safe indoor environment. No experience needed!",
    attendees: 25,
    maxAttendees: 35,
    image:
      "https://images.unsplash.com/photo-1545328233-40765661eea4?w=800&h=600&fit=crop",
    host: "Captain Sky",
    cost: 75,
    attendeesList: [
      {
        name: "Aiden Clark",
        initial: "AC",
        avatar: "https://i.pravatar.cc/150?img=70",
      },
      {
        name: "Ella Martinez",
        initial: "EM",
        avatar: "https://i.pravatar.cc/150?img=34",
      },
      {
        name: "Logan Wright",
        initial: "LW",
        avatar: "https://i.pravatar.cc/150?img=63",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 17,
    title: "F-35 Flight Simulator",
    category: "adrenaline",
    date: "2026-04-22",
    time: "14:00",
    location: "Advanced Flight Simulation Center",
    description:
      "Experience the thrill of flying an F-35 fighter jet in a realistic simulator.",
    attendees: 8,
    maxAttendees: 12,
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
    host: "Commander Hayes",
    cost: 120,
    attendeesList: [
      {
        name: "Caleb King",
        initial: "CK",
        avatar: "https://i.pravatar.cc/150?img=69",
      },
      {
        name: "Scarlett Scott",
        initial: "SS",
        avatar: "https://i.pravatar.cc/150?img=33",
      },
      {
        name: "Wyatt Green",
        initial: "WG",
        avatar: "https://i.pravatar.cc/150?img=65",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 18,
    title: "Sound Healing Meditation",
    category: "wellness",
    date: "2026-05-01",
    time: "19:00",
    location: "Zen Meditation Center",
    description:
      "Deep relaxation through crystal singing bowls and tibetan bells. Release stress and find inner peace.",
    attendees: 18,
    maxAttendees: 25,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    host: "Serena Moon",
    cost: 35,
    attendeesList: [
      {
        name: "Maya Singh",
        initial: "MS",
        avatar: "https://i.pravatar.cc/150?img=46",
      },
      {
        name: "River Chen",
        initial: "RC",
        avatar: "https://i.pravatar.cc/150?img=54",
      },
      {
        name: "Sage Williams",
        initial: "SW",
        avatar: "https://i.pravatar.cc/150?img=28",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 19,
    title: "Breathwork & Cold Plunge",
    category: "wellness",
    date: "2026-05-08",
    time: "07:00",
    location: "Vitality Wellness Spa",
    description:
      "Morning breathwork session followed by invigorating cold plunge. Boost your energy and immunity.",
    attendees: 12,
    maxAttendees: 16,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    host: "Wim Thompson",
    cost: 50,
    attendeesList: [
      {
        name: "Aurora Blake",
        initial: "AB",
        avatar: "https://i.pravatar.cc/150?img=50",
      },
      {
        name: "Phoenix Reed",
        initial: "PR",
        avatar: "https://i.pravatar.cc/150?img=61",
      },
      {
        name: "Skylar Morgan",
        initial: "SM",
        avatar: "https://i.pravatar.cc/150?img=30",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 20,
    title: "Reiki Healing Circle",
    category: "wellness",
    date: "2026-05-15",
    time: "18:30",
    location: "Healing Hands Studio",
    description:
      "Experience the power of group Reiki energy healing. Balance your chakras and restore harmony.",
    attendees: 14,
    maxAttendees: 20,
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    host: "Lotus Kimura",
    cost: 40,
    attendeesList: [
      {
        name: "Crystal Waters",
        initial: "CW",
        avatar: "https://i.pravatar.cc/150?img=47",
      },
      {
        name: "Zen Carter",
        initial: "ZC",
        avatar: "https://i.pravatar.cc/150?img=56",
      },
      {
        name: "Harmony Lee",
        initial: "HL",
        avatar: "https://i.pravatar.cc/150?img=41",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 21,
    title: "Mindful Forest Bathing",
    category: "wellness",
    date: "2026-05-22",
    time: "10:00",
    location: "Redwood Nature Reserve",
    description:
      "Japanese Shinrin-yoku practice. Slow mindful walk through ancient forest for mental clarity.",
    attendees: 10,
    maxAttendees: 15,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    host: "Forest Guide Emma",
    cost: 30,
    attendeesList: [
      {
        name: "Willow James",
        initial: "WJ",
        avatar: "https://i.pravatar.cc/150?img=52",
      },
      {
        name: "Cedar Brooks",
        initial: "CB",
        avatar: "https://i.pravatar.cc/150?img=73",
      },
      {
        name: "Meadow Quinn",
        initial: "MQ",
        avatar: "https://i.pravatar.cc/150?img=29",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 22,
    title: "Spa & Wine Night",
    category: "wellness",
    date: "2026-05-29",
    time: "20:00",
    location: "Serenity Wellness Lounge",
    description:
      "Relaxing spa evening with aromatherapy, face masks, and premium wine tasting.",
    attendees: 20,
    maxAttendees: 24,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    host: "Spa Director Michelle",
    cost: 65,
    attendeesList: [
      {
        name: "Jade Harper",
        initial: "JH",
        avatar: "https://i.pravatar.cc/150?img=45",
      },
      {
        name: "Ruby Nelson",
        initial: "RN",
        avatar: "https://i.pravatar.cc/150?img=67",
      },
      {
        name: "Pearl Anderson",
        initial: "PA",
        avatar: "https://i.pravatar.cc/150?img=36",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 23,
    title: "Board Game Cafe Night",
    category: "gaming",
    date: "2026-06-05",
    time: "19:00",
    location: "The Game Den Cafe",
    description:
      "Play classic and modern board games while enjoying craft coffee and snacks. All skill levels welcome!",
    attendees: 28,
    maxAttendees: 40,
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=600&fit=crop",
    host: "GameMaster Alex",
    cost: 15,
    attendeesList: [
      {
        name: "Quinn Foster",
        initial: "QF",
        avatar: "https://i.pravatar.cc/150?img=59",
      },
      {
        name: "Riley Cooper",
        initial: "RC",
        avatar: "https://i.pravatar.cc/150?img=74",
      },
      {
        name: "Jordan Ellis",
        initial: "JE",
        avatar: "https://i.pravatar.cc/150?img=48",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 24,
    title: "Esports Tournament Night",
    category: "gaming",
    date: "2026-06-12",
    time: "18:00",
    location: "Level Up Gaming Arena",
    description:
      "Compete in League of Legends tournament. Form teams or join solo queue. Prizes for top 3!",
    attendees: 32,
    maxAttendees: 50,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    host: "Pro Gamer Chris",
    cost: 25,
    attendeesList: [
      {
        name: "Pixel Storm",
        initial: "PS",
        avatar: "https://i.pravatar.cc/150?img=75",
      },
      {
        name: "Ninja Wolf",
        initial: "NW",
        avatar: "https://i.pravatar.cc/150?img=76",
      },
      {
        name: "Shadow Player",
        initial: "SP",
        avatar: "https://i.pravatar.cc/150?img=77",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 25,
    title: "Pub Trivia Championship",
    category: "gaming",
    date: "2026-06-19",
    time: "20:00",
    location: "The Brainy Pub",
    description:
      "Test your knowledge across pop culture, history, science and more. Form teams of 4-6 players.",
    attendees: 45,
    maxAttendees: 60,
    image:
      "https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=800&h=600&fit=crop",
    host: "Quizmaster Sarah",
    cost: 10,
    attendeesList: [
      {
        name: "Smarty Jones",
        initial: "SJ",
        avatar: "https://i.pravatar.cc/150?img=78",
      },
      {
        name: "Brain Stevens",
        initial: "BS",
        avatar: "https://i.pravatar.cc/150?img=79",
      },
      {
        name: "Clever Kate",
        initial: "CK",
        avatar: "https://i.pravatar.cc/150?img=80",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 26,
    title: "D&D Campaign Launch",
    category: "gaming",
    date: "2026-06-26",
    time: "19:30",
    location: "Dragon's Lair Game Shop",
    description:
      "Begin an epic Dungeons & Dragons adventure! New and experienced players welcome. Characters provided.",
    attendees: 6,
    maxAttendees: 8,
    image:
      "https://images.unsplash.com/photo-1566694271355-ba7c8508f9dc?w=800&h=600&fit=crop",
    host: "Dungeon Master Tom",
    cost: 20,
    attendeesList: [
      {
        name: "Rogue Knight",
        initial: "RK",
        avatar: "https://i.pravatar.cc/150?img=81",
      },
      {
        name: "Wizard Mage",
        initial: "WM",
        avatar: "https://i.pravatar.cc/150?img=82",
      },
      {
        name: "Paladin Hero",
        initial: "PH",
        avatar: "https://i.pravatar.cc/150?img=83",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 27,
    title: "Murder Mystery Dinner",
    category: "gaming",
    date: "2026-07-03",
    time: "18:30",
    location: "The Mystery Manor",
    description:
      "Interactive murder mystery dinner theatre. Solve the crime while enjoying a gourmet meal!",
    attendees: 24,
    maxAttendees: 30,
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
    host: "Detective Victoria",
    cost: 75,
    attendeesList: [
      {
        name: "Detective Dan",
        initial: "DD",
        avatar: "https://i.pravatar.cc/150?img=84",
      },
      {
        name: "Sleuth Sally",
        initial: "SS",
        avatar: "https://i.pravatar.cc/150?img=85",
      },
      {
        name: "Inspector Max",
        initial: "IM",
        avatar: "https://i.pravatar.cc/150?img=86",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 28,
    title: "Live Jazz Under the Stars",
    category: "music",
    date: "2026-07-10",
    time: "20:00",
    location: "Rooftop Jazz Lounge",
    description:
      "Smooth jazz quartet performing classic and contemporary pieces. Cocktails and city views included.",
    attendees: 35,
    maxAttendees: 50,
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop",
    host: "Jazz Quartet Ensemble",
    cost: 40,
    attendeesList: [
      {
        name: "Miles Davis Jr",
        initial: "MD",
        avatar: "https://i.pravatar.cc/150?img=87",
      },
      {
        name: "Ella Fitzgerald",
        initial: "EF",
        avatar: "https://i.pravatar.cc/150?img=88",
      },
      {
        name: "Duke Ellington",
        initial: "DE",
        avatar: "https://i.pravatar.cc/150?img=89",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 29,
    title: "Karaoke Party Night",
    category: "music",
    date: "2026-07-17",
    time: "21:00",
    location: "Star Voice Karaoke Bar",
    description:
      "Sing your heart out! Private rooms available or join the main stage. Song requests welcome!",
    attendees: 40,
    maxAttendees: 60,
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
    host: "Karaoke King Kevin",
    cost: 20,
    attendeesList: [
      {
        name: "Beyonce Fan",
        initial: "BF",
        avatar: "https://i.pravatar.cc/150?img=90",
      },
      {
        name: "Rockstar Rob",
        initial: "RR",
        avatar: "https://i.pravatar.cc/150?img=91",
      },
      {
        name: "Pop Princess",
        initial: "PP",
        avatar: "https://i.pravatar.cc/150?img=92",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 30,
    title: "Open Mic Poetry Night",
    category: "music",
    date: "2026-07-24",
    time: "19:00",
    location: "The Spoken Word Cafe",
    description:
      "Share your poetry, spoken word, or acoustic music. Supportive audience and cozy atmosphere.",
    attendees: 25,
    maxAttendees: 35,
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
    host: "Poet Laureate Maya",
    cost: 5,
    attendeesList: [
      {
        name: "Verse Walker",
        initial: "VW",
        avatar: "https://i.pravatar.cc/150?img=93",
      },
      {
        name: "Rhyme Time",
        initial: "RT",
        avatar: "https://i.pravatar.cc/150?img=94",
      },
      {
        name: "Spoken Soul",
        initial: "SS",
        avatar: "https://i.pravatar.cc/150?img=95",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 31,
    title: "Vinyl Listening Party",
    category: "music",
    date: "2026-07-31",
    time: "17:00",
    location: "Audiophile Record Shop",
    description:
      "Experience classic albums on premium turntables. This month: Pink Floyd's Dark Side of the Moon.",
    attendees: 15,
    maxAttendees: 20,
    image:
      "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=800&h=600&fit=crop",
    host: "Vinyl Collector Dave",
    cost: 15,
    attendeesList: [
      {
        name: "Record Spinner",
        initial: "RS",
        avatar: "https://i.pravatar.cc/150?img=96",
      },
      {
        name: "Groove Lover",
        initial: "GL",
        avatar: "https://i.pravatar.cc/150?img=97",
      },
      {
        name: "Audio Phil",
        initial: "AP",
        avatar: "https://i.pravatar.cc/150?img=98",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
  {
    id: 32,
    title: "Acoustic Sunset Concert",
    category: "music",
    date: "2026-08-07",
    time: "18:30",
    location: "Beachside Amphitheater",
    description:
      "Intimate acoustic performance featuring local singer-songwriters. Bring blankets and enjoy the sunset.",
    attendees: 50,
    maxAttendees: 75,
    image:
      "https://images.unsplash.com/photo-1487537708572-3c850b5e856a?w=800&h=600&fit=crop",
    host: "Sunset Sessions Collective",
    cost: 25,
    attendeesList: [
      {
        name: "String Player",
        initial: "SP",
        avatar: "https://i.pravatar.cc/150?img=99",
      },
      {
        name: "Melody Maker",
        initial: "MM",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        name: "Harmony Voice",
        initial: "HV",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    ],
    saved: false,
    registered: false,
    registeredAt: null,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Sarah Mitchell",
    preview: "Hey! Don't forget about the volleyball game tomorrow!",
    time: "2:30 PM",
    unread: 2,
    isGroupChat: false,
    avatar: null,
    chatHistory: [
      {
        sender: "Sarah Mitchell",
        message: "Hey! Don't forget about the volleyball game tomorrow!",
        time: "2:30 PM",
        isMe: false,
      },
    ],
  },
  {
    id: 2,
    name: "Lisa Chen",
    preview: "The yoga class was amazing! See you next week?",
    time: "1:15 PM",
    unread: 0,
    isGroupChat: false,
    avatar: null,
    chatHistory: [
      {
        sender: "Lisa Chen",
        message: "The yoga class was amazing! See you next week?",
        time: "1:15 PM",
        isMe: false,
      },
    ],
  },
  {
    id: 3,
    name: "David Kim",
    preview: "Photography workshop details are finalized",
    time: "11:45 AM",
    unread: 1,
    isGroupChat: false,
    avatar: null,
    chatHistory: [
      {
        sender: "David Kim",
        message: "Photography workshop details are finalized",
        time: "11:45 AM",
        isMe: false,
      },
    ],
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState("explore");
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightMode, setLightMode] = useState(false);
  const [openToConnections, setOpenToConnections] = useState(true);
  const [badgeBounce, setBadgeBounce] = useState(false);
  const [matchBadgeHovered, setMatchBadgeHovered] = useState(false);
  const [matchBadgeBounce, setMatchBadgeBounce] = useState(false);
  const [showAttendeesModal, setShowAttendeesModal] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [savedPageTab, setSavedPageTab] = useState("saved");
  const [formData, setFormData] = useState({
    title: "",
    category: "social",
    date: "",
    time: "",
    location: "",
    cost: "0",
    maxAttendees: "",
    description: "",
  });

  // Filter logic
  const filteredEvents = events.filter((event) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(event.category)
    ) {
      return false;
    }
    return true;
  });

  const savedEvents = events
    .filter((e) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const eventDate = new Date(e.date);
      eventDate.setHours(0, 0, 0, 0);

      if (savedPageTab === "saved") {
        return e.saved; // Show only saved events
      } else if (savedPageTab === "upcoming") {
        return e.registered && eventDate >= today; // Show only registered upcoming events
      } else if (savedPageTab === "past") {
        return e.registered && eventDate < today; // Show only registered past events
      }
      return false;
    })
    .sort((a, b) => {
      if (savedPageTab === "saved") {
        // Sort by registeredAt descending (most recent first)
        // Events without registeredAt go to the end
        if (!a.registeredAt && !b.registeredAt) return 0;
        if (!a.registeredAt) return 1;
        if (!b.registeredAt) return -1;
        return b.registeredAt - a.registeredAt;
      } else if (savedPageTab === "upcoming") {
        // Sort by date ascending (earliest upcoming first)
        return new Date(a.date) - new Date(b.date);
      } else if (savedPageTab === "past") {
        // Sort by date descending (most recent past first)
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  // Trigger badge bounce animation when event modal opens
  useEffect(() => {
    if (activeModal === "eventDetails") {
      setBadgeBounce(true);
      setMatchBadgeHovered(false); // Reset match badge hover state for new event
      const timer = setTimeout(() => {
        setBadgeBounce(false);
      }, 3000); // Stop after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [activeModal]);

  // Handle match badge bounce on first hover (per event page)
  const handleNewFriendsHover = () => {
    if (!matchBadgeHovered) {
      setMatchBadgeBounce(true);
      setMatchBadgeHovered(true);
      setTimeout(() => {
        setMatchBadgeBounce(false);
      }, 3000);
    }
  };

  // Handle event registration
  const handleRegisterEvent = (event) => {
    // Mark event as registered with timestamp (don't auto-save)
    setEvents(
      events.map((ev) =>
        ev.id === event.id
          ? { ...ev, registered: true, registeredAt: Date.now() }
          : ev
      )
    );

    // Check if group chat already exists for this event
    const existingChat = messages.find((msg) => msg.eventId === event.id);

    if (!existingChat) {
      const newGroupChat = {
        id: messages.length + 1,
        name: event.title,
        preview: "You registered for this event",
        time: "Just now",
        unread: 0,
        isGroupChat: true,
        avatar: event.image,
        eventId: event.id,
        chatHistory: [
          {
            sender: "System",
            message: `Welcome to ${event.title}! You've successfully registered for this event.`,
            time: "Just now",
            isMe: false,
            isSystem: true,
          },
        ],
      };

      setMessages([newGroupChat, ...messages]);
    }

    // Close modal and navigate to messages
    setActiveModal(null);
    setCurrentPage("messages");
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedChat) return;

    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const userMessage = {
      sender: "You",
      message: chatInput,
      time: currentTime,
      isMe: true,
    };

    const userInput = chatInput;
    setChatInput("");

    // Add user message immediately
    let updatedMessages = messages.map((msg) => {
      if (msg.id === selectedChat.id) {
        return {
          ...msg,
          chatHistory: [...msg.chatHistory, userMessage],
          preview: userInput,
          time: currentTime,
        };
      }
      return msg;
    });

    setMessages(updatedMessages);

    // Update selectedChat to show user message
    let updatedChat = updatedMessages.find((msg) => msg.id === selectedChat.id);
    if (updatedChat) {
      setSelectedChat(updatedChat);
    }

    // Call OpenAI API for AI response
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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", // Replace with your actual OpenAI API key
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: `You are ${selectedChat.name}, a real person chatting with a friend on EventHub, a social event discovery app. Respond naturally as this person would - be friendly, conversational, and authentic. Talk about events, activities, and social plans. Keep responses casual and brief, like a real text conversation. Use a warm, personable tone.`,
              },
              {
                role: "user",
                content: userInput,
              },
            ],
            max_tokens: 150,
            temperature: 0.7,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        const aiTime = new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const aiMessage = {
          sender: selectedChat.name,
          message: aiResponse,
          time: aiTime,
          isMe: false,
        };

        // Add AI response to chat
        updatedMessages = messages.map((msg) => {
          if (msg.id === selectedChat.id) {
            return {
              ...msg,
              chatHistory: [...msg.chatHistory, userMessage, aiMessage],
              preview: aiResponse,
              time: aiTime,
            };
          }
          return msg;
        });

        setMessages(updatedMessages);

        // Update selectedChat to show AI response
        updatedChat = updatedMessages.find((msg) => msg.id === selectedChat.id);
        if (updatedChat) {
          setSelectedChat(updatedChat);
        }
      } else {
        console.error("OpenAI API error:", response.statusText);
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  // Page components
  const renderExplorePage = () => (
    <div id="exploreFeed" className="explore-feed">
      <div className="filters">
        <button
          className={`filter-btn ${
            selectedCategories.length === 0 ? "active" : ""
          }`}
          onClick={() => setSelectedCategories([])}
        >
          All
        </button>
        {[
          "social",
          "fitness",
          "creative",
          "professional",
          "foodie",
          "adrenaline",
          "wellness",
          "gaming",
          "music",
        ].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              selectedCategories.includes(cat) ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategories((prev) =>
                prev.includes(cat)
                  ? prev.filter((c) => c !== cat)
                  : [...prev, cat]
              );
            }}
          >
            {cat === "social"
              ? "Social Butterfly"
              : cat === "fitness"
              ? "Fitness Freak"
              : cat === "creative"
              ? "Creative Enthusiasts"
              : cat === "professional"
              ? "Professional"
              : cat === "foodie"
              ? "For the Foodies"
              : cat === "adrenaline"
              ? "Adrenaline Junkies"
              : cat === "wellness"
              ? "Wellness Warriors"
              : cat === "gaming"
              ? "Game Night Crew"
              : cat === "music"
              ? "Music Lovers"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
        <button
          className="filter-btn"
          onClick={() => setActiveModal("advancedFilters")}
        >
          Filters
        </button>
      </div>
      <div id="eventsList">
        {filteredEvents.length === 0 ? (
          <div className="empty-state">
            <div className="icon">📭</div>
            <h3>No events found</h3>
            <p>Try adjusting your filters</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => {
                setSelectedEvent(event);
                setActiveModal("eventDetails");
              }}
            >
              <div
                className="event-card-image"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <button
                  className={`save-btn ${event.saved ? "saved" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEvents(
                      events.map((ev) =>
                        ev.id === event.id ? { ...ev, saved: !ev.saved } : ev
                      )
                    );
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <div className="category-badge">
                  {event.category === "social"
                    ? "👥"
                    : event.category === "fitness"
                    ? "💪"
                    : event.category === "creative"
                    ? "🎨"
                    : "💼"}
                </div>
                <div className="event-info-image">
                  <div className="event-title">{event.title}</div>
                  <div className="event-date">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at {event.time}
                  </div>
                  <div className="event-location">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                  <div className="event-host">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {event.host}
                  </div>
                  <div
                    className="event-attendees-bottom"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                      setShowAttendeesModal(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="attendee-avatars-card">
                      {event.attendeesList.slice(0, 3).map((att, idx) => (
                        <div
                          key={idx}
                          className="avatar"
                          style={{
                            backgroundImage: `url(${att.avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="event-attendees-count">
                      {event.attendees} going
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderSavedPage = () => (
    <div className="explore-feed">
      <div className="saved-page-toggle">
        <div className="saved-page-toggle-container">
          <button
            className={`saved-toggle-btn ${
              savedPageTab === "saved" ? "active" : ""
            }`}
            onClick={() => setSavedPageTab("saved")}
          >
            Saved
          </button>
          <button
            className={`saved-toggle-btn ${
              savedPageTab === "upcoming" ? "active" : ""
            }`}
            onClick={() => setSavedPageTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`saved-toggle-btn ${
              savedPageTab === "past" ? "active" : ""
            }`}
            onClick={() => setSavedPageTab("past")}
          >
            Past
          </button>
        </div>
      </div>
      <div id="eventsList">
        {savedEvents.length === 0 ? (
          <div className="empty-state">
            <div className="icon">
              {savedPageTab === "saved"
                ? ""
                : savedPageTab === "upcoming"
                ? ""
                : ""}
            </div>
            <h3>
              {savedPageTab === "saved" && "No Saved Events"}
              {savedPageTab === "upcoming" && "No Upcoming Events"}
              {savedPageTab === "past" && "No Past Events"}
            </h3>
            <p>
              {savedPageTab === "saved" &&
                "Save your favorite events to see them here"}
              {savedPageTab === "upcoming" &&
                "You have no upcoming saved events"}
              {savedPageTab === "past" && "You have no past saved events"}
            </p>
          </div>
        ) : (
          savedEvents.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => {
                setSelectedEvent(event);
                setActiveModal("eventDetails");
              }}
            >
              <div
                className="event-card-image"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <button
                  className={`save-btn ${event.saved ? "saved" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEvents(
                      events.map((ev) =>
                        ev.id === event.id ? { ...ev, saved: !ev.saved } : ev
                      )
                    );
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <div className="event-info-image">
                  <div className="event-title">{event.title}</div>
                  <div className="event-date">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at {event.time}
                  </div>
                  <div className="event-location">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                  <div className="event-host">
                    <svg
                      className="meta-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {event.host}
                  </div>
                  <div
                    className="event-attendees-bottom"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                      setShowAttendeesModal(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="attendee-avatars-card">
                      {event.attendeesList.slice(0, 3).map((att, idx) => (
                        <div
                          key={idx}
                          className="avatar"
                          style={{
                            backgroundImage: `url(${att.avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="event-attendees-count">
                      {event.attendees} going
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderMessagesPage = () => (
    <div id="messagesPage" className="explore-feed">
      {messages.length === 0 ? (
        <div className="empty-state">
          <div className="icon">💬</div>
          <h3>No Messages</h3>
          <p>Start chatting with event hosts and attendees</p>
        </div>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className="message-item"
            onClick={() => {
              setSelectedChat(msg);
              setActiveModal("chat");
            }}
          >
            {msg.isGroupChat && msg.avatar ? (
              <div
                className="message-avatar message-avatar-image"
                style={{
                  backgroundImage: `url(${msg.avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ) : (
              <div className="message-avatar">
                {msg.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div className="message-content">
              <div className="message-header">
                <div className="message-name">{msg.name}</div>
                <div className="message-time">{msg.time}</div>
              </div>
              <div className="message-preview">{msg.preview}</div>
            </div>
            {msg.unread > 0 && (
              <div className="message-unread-badge">{msg.unread}</div>
            )}
          </div>
        ))
      )}
    </div>
  );

  const renderProfilePage = () => (
    <div id="profilePage" className="explore-feed">
      <div className="profile-header">
        <div className="profile-avatar-large">JD</div>
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-username">@johndoe</p>
        <p className="profile-bio">
          Adventure seeker | Coffee lover | Events enthusiast
        </p>
        <div className="profile-stats">
          <div className="stat">
            <div className="stat-value">24</div>
            <div className="stat-label">Events Attended</div>
          </div>
          <div className="stat">
            <div className="stat-value">8</div>
            <div className="stat-label">Events Hosted</div>
          </div>
          <div className="stat">
            <div className="stat-value">4.7</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>
      </div>
      <div className="profile-section">
        <h3 className="section-title"></h3>
        <div className="toggle-section">
          <span className="toggle-label">Open to New Friends</span>
          <button
            className={`toggle-switch ${openToConnections ? "active" : ""}`}
            onClick={() => setOpenToConnections(!openToConnections)}
          ></button>
        </div>
      </div>
 

      <div className="profile-section">
        <h3 className="section-title">Account Settings</h3>
        <div className="settings-list">
          <div className="settings-item">
            <span>Edit Profile</span>
            <span>→</span>
          </div>
          <div className="settings-item">
            <span>Notifications</span>
            <span>→</span>
          </div>
          <div className="settings-item">
            <span>Privacy Settings</span>
            <span>→</span>
          </div>
          <div className="settings-item">
            <span>Help & Support</span>
            <span>→</span>
          </div>
          <div className="settings-item logout">
            <span>Log Out</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`container ${lightMode ? "light-mode" : ""}`}>
      <style>
        {lightMode &&
          `
          :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f9fafb;
            --bg-tertiary: #f3f4f6;
            --text-primary: #111827;
            --text-secondary: #6b7280;
            --border-color: #e5e7eb;
            --card-bg: #ffffff;
            --modal-bg: #ffffff;
            --accent: #6366f1;
          }
        `}
      </style>

      <div className="header">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            className="theme-toggle"
            // onClick={() => setLightMode(!lightMode)}
          >
            {/* {lightMode ? "🌙" : "☀️"} */}
          </button>
        </div>
      </div>

      {/* Pages */}
      {currentPage === "explore" && renderExplorePage()}
      {currentPage === "saved" && renderSavedPage()}
      {currentPage === "messages" && renderMessagesPage()}
      {currentPage === "profile" && renderProfilePage()}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div
          className={`nav-item ${currentPage === "explore" ? "active" : ""}`}
          onClick={() => setCurrentPage("explore")}
        >
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>
        <div
          className={`nav-item ${currentPage === "saved" ? "active" : ""}`}
          onClick={() => setCurrentPage("saved")}
        >
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div
          className={`nav-item ${currentPage === "messages" ? "active" : ""}`}
          onClick={() => setCurrentPage("messages")}
        >
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
        <div
          className="nav-item create-btn"
          onClick={() => setActiveModal("createEvent")}
        >
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        </div>
        <div
          className={`nav-item ${currentPage === "profile" ? "active" : ""}`}
          onClick={() => setCurrentPage("profile")}
        >
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "eventDetails" && selectedEvent && (
        <div
          id="eventModal"
          className="modal active"
          onClick={(e) => {
            if (e.target.id === "eventModal") setActiveModal(null);
          }}
        >
          <div className="modal-content luma-style">
            <div className="modal-body modal-body-scrollable">
              {/* Hero Image with Back Button */}
              <div
                className="luma-hero-image"
                style={{ backgroundImage: `url(${selectedEvent.image})` }}
              >
                <button
                  className="luma-back-btn"
                  onClick={() => setActiveModal(null)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              {/* Event Info Section */}
              <div className="luma-content">
                {/* Location Badge */}
                <div
                  className={`luma-location-badge ${
                    openToConnections ? "open" : "closed"
                  } ${badgeBounce ? "bounce" : ""}`}
                  onClick={() => setOpenToConnections(!openToConnections)}
                  style={{ cursor: "pointer" }}
                >
                  {openToConnections
                    ? "Open to New Friends"
                    : "Closed to New Friends"}
                </div>

                {/* Event Title */}
                <h1 className="luma-title">{selectedEvent.title}</h1>

                {/* Date & Time */}
                <div className="luma-datetime">
                  {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  , {selectedEvent.time}
                </div>

                {/* Action Buttons */}
                {/* <div className="luma-action-buttons">
                  <button
                    className="luma-btn luma-btn-primary"
                    onClick={() => handleRegisterEvent(selectedEvent)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    Register
                  </button>
                  <button className="luma-btn luma-btn-secondary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Contact
                  </button>
                  <button className="luma-btn luma-btn-secondary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    Share
                  </button>
                  <button className="luma-btn luma-btn-secondary">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                    More
                  </button>
                </div> */}
                {/* Location Section */}
                <div className="luma-section">
                  <h3 className="luma-section-title">Location</h3>
                  <div className="luma-location-details">
                    <div className="luma-address">{selectedEvent.location}</div>
                    <div className="luma-map-placeholder">
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "12px" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=33.9850,-118.4695&output=embed"
                        title="Event Location Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
                {/* New Friends Section - Only show if open to connections */}
                {openToConnections && (
                  <div className="luma-section" onMouseEnter={handleNewFriendsHover}>
                    <div className="luma-section-header">
                      <h3 className="luma-match-title">New Friends</h3>
                      <div className={`luma-match ${matchBadgeBounce ? "bounce" : ""}`}>87% Match</div>
                    </div>
                    <div
                      className="luma-attendees-avatars"
                      onClick={() => setShowAttendeesModal(true)}
                      style={{ cursor: "pointer" }}
                    >
                      {selectedEvent.attendeesList.map((att, idx) => (
                        <div
                          key={idx}
                          className="luma-attendee-avatar"
                          style={{
                            backgroundImage: `url(${att.avatar})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      ))}
                      {selectedEvent.attendees > 3 && (
                        <div className="luma-attendee-avatar luma-attendee-more">
                          +{selectedEvent.attendees - 3}
                        </div>
                      )}
                    </div>
                    <div className="luma-attendees-names">
                      {selectedEvent.attendees > 3 && (
                        <span>{selectedEvent.attendees} going </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Attendees Section */}
                <div className="luma-section">
                  <h3 className="luma-section-title">Full List</h3>
                  <div
                    className="luma-attendees-avatars"
                    onClick={() => setShowAttendeesModal(true)}
                    style={{ cursor: "pointer" }}
                  >
                    {selectedEvent.attendeesList.map((att, idx) => (
                      <div
                        key={idx}
                        className="luma-attendee-avatar"
                        style={{
                          backgroundImage: `url(${att.avatar})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    ))}
                    {selectedEvent.attendees > 3 && (
                      <div className="luma-attendee-avatar luma-attendee-more">
                        +{selectedEvent.attendees - 3}
                      </div>
                    )}
                  </div>
                  <div className="luma-attendees-names">
                    {selectedEvent.attendees > 3 && (
                      <span>{selectedEvent.attendees} going </span>
                    )}
                  </div>
                </div>

                {/* Host Section */}
                <div className="luma-section">
                  <div className="luma-section-header">
                    <h3 className="luma-section-title">Host</h3>
                  </div>
                  <div className="luma-host-card">
                    <div
                      className="luma-host-avatar"
                      style={{
                        backgroundImage: selectedEvent.attendeesList[0]
                          ? `url(${selectedEvent.attendeesList[0].avatar})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {!selectedEvent.attendeesList[0] &&
                        selectedEvent.host.charAt(0)}
                    </div>
                    <div className="luma-host-info">
                      <div className="luma-host-name">{selectedEvent.host}</div>
                      <div className="luma-host-bio">
                        Event organizer and community builder
                      </div>
                    </div>
                    <button className="luma-social-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* About Event Section */}
                <div className="luma-section">
                  <h3 className="luma-section-title">About Event</h3>
                  <p className="luma-description">
                    {selectedEvent.description}
                  </p>
                  <p className="luma-description" style={{ marginTop: "16px" }}>
                    Cost:{" "}
                    {selectedEvent.cost === 0
                      ? "Free"
                      : `$${selectedEvent.cost}`}
                  </p>
                  <p className="luma-description">
                    Capacity: {selectedEvent.attendees}/
                    {selectedEvent.maxAttendees} attendees
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Bottom Buttons */}
            <div className="luma-floating-footer">
              <button className="luma-floating-btn luma-floating-share">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </button>
              <button
                className="luma-floating-btn luma-floating-register"
                onClick={() => handleRegisterEvent(selectedEvent)}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === "createEvent" && (
        <div
          id="createEventModal"
          className="modal active"
          onClick={(e) => {
            if (e.target.id === "createEventModal") setActiveModal(null);
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Event</h2>
              <button
                className="close-btn"
                onClick={() => setActiveModal(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newEvent = {
                    id: events.length + 1,
                    ...formData,
                    attendees: 1,
                    maxAttendees: parseInt(formData.maxAttendees) || 20,
                    image:
                      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
                    attendeesList: [],
                    saved: false,
                  };
                  setEvents([...events, newEvent]);
                  setFormData({
                    title: "",
                    category: "social",
                    date: "",
                    time: "",
                    location: "",
                    cost: "0",
                    maxAttendees: "",
                    description: "",
                  });
                  setActiveModal(null);
                }}
              >
                <div className="form-group">
                  <label>Event Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    required
                  >
                    <option value="social">Social</option>
                    <option value="fitness">Fitness</option>
                    <option value="creative">Creative</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Cost ($)</label>
                  <input
                    type="number"
                    value={formData.cost}
                    onChange={(e) =>
                      setFormData({ ...formData, cost: e.target.value })
                    }
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="form-group">
                  <label>Max Attendees</label>
                  <input
                    type="number"
                    value={formData.maxAttendees}
                    onChange={(e) =>
                      setFormData({ ...formData, maxAttendees: e.target.value })
                    }
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setActiveModal(null)}
                  >
                    Save Draft
                  </button>
                  <button type="submit" className="btn-success">
                    Create Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Attendees Modal */}
      {showAttendeesModal && selectedEvent && (
        <div
          className="modal active"
          onClick={(e) => {
            if (e.target.className === "modal active")
              setShowAttendeesModal(false);
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2>All Attendees ({selectedEvent.attendees})</h2>
              <button
                className="close-btn"
                onClick={() => setShowAttendeesModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body modal-body-scrollable">
              <div className="user-list">
                {/* Generate all attendees */}
                {selectedEvent.attendeesList.map((att, idx) => (
                  <div key={idx} className="user-item">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage: `url(${att.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="user-info">
                      <div className="user-name">{att.name}</div>
                      <div className="user-detail">Attending</div>
                    </div>
                  </div>
                ))}
                {/* Generate additional attendees to match total count */}
                {Array.from({
                  length: Math.max(
                    0,
                    selectedEvent.attendees - selectedEvent.attendeesList.length
                  ),
                }).map((_, idx) => (
                  <div key={`extra-${idx}`} className="user-item">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/150?img=${
                          100 + idx
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="user-info">
                      <div className="user-name">
                        Attendee {selectedEvent.attendeesList.length + idx + 1}
                      </div>
                      <div className="user-detail">Attending</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "chat" && selectedChat && (
        <div
          className="modal active"
          onClick={(e) => {
            if (e.target.className === "modal active") setActiveModal(null);
          }}
        >
          <div className="modal-content chat-modal-content">
            <div className="modal-header modal-header-sticky">
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {selectedChat.isGroupChat && selectedChat.avatar ? (
                  <div
                    className="chat-header-avatar"
                    style={{
                      backgroundImage: `url(${selectedChat.avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                ) : null}
                <h2>{selectedChat.name}</h2>
              </div>
              <button
                className="close-btn"
                onClick={() => setActiveModal(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body modal-body-scrollable chat-messages-container">
              {selectedChat.chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chat-message ${msg.isMe ? "me" : ""} ${
                    msg.isSystem ? "system" : ""
                  }`}
                >
                  <div>
                    {!msg.isMe && !msg.isSystem && (
                      <div className="chat-message-sender">{msg.sender}</div>
                    )}
                    <div className="chat-message-bubble">{msg.message}</div>
                    <div className="chat-message-timestamp">{msg.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button
                className="chat-send-btn"
                onClick={handleSendMessage}
                disabled={!chatInput.trim()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
