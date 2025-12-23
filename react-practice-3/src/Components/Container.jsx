import React from 'react'
import Cards from './Cards';

const Container = () => {
    const members = [
  {
    id: 1,
    name: "Arjun Kumar",
    role: "Full Stack Developer and Tech Enthusiast",
    avatar: "https://i.pravatar.cc/150?u=arjunkumar",
    cover: "https://picsum.photos/seed/cover1/400/200",
    likes: "85.4K",
    posts: "912",
    views: "460.2K"
  },
  {
    id: 2,
    name: "Maya Singh",
    role: "UI/UX Designer passionate about minimal design",
    avatar: "https://i.pravatar.cc/150?u=mayasingh",
    cover: "https://picsum.photos/seed/cover2/400/200",
    likes: "67.1K",
    posts: "780",
    views: "310.8K"
  },
  {
    id: 3,
    name: "David Lee",
    role: "Product Manager with love for user-centric products",
    avatar: "https://i.pravatar.cc/150?u=davidlee",
    cover: "https://picsum.photos/seed/cover3/400/200",
    likes: "102.8K",
    posts: "1020",
    views: "590.4K"
  },
  {
    id: 4,
    name: "Fatima Zahra",
    role: "Front End Developer and React Lover",
    avatar: "https://i.pravatar.cc/150?u=fatimazahra",
    cover: "https://picsum.photos/seed/cover4/400/200",
    likes: "58.6K",
    posts: "640",
    views: "245.7K"
  },
  {
    id: 5,
    name: "Liam Johnson",
    role: "Backend Developer building scalable APIs",
    avatar: "https://i.pravatar.cc/150?u=liamjohnson",
    cover: "https://picsum.photos/seed/cover5/400/200",
    likes: "73.9K",
    posts: "803",
    views: "398.1K"
  },
  {
    id: 6,
    name: "Priya Reddy",
    role: "Data Scientist and AI Explorer",
    avatar: "https://i.pravatar.cc/150?u=priyareddy",
    cover: "https://picsum.photos/seed/cover6/400/200",
    likes: "49.2K",
    posts: "532",
    views: "210.3K"
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Mobile Developer (iOS & Android)",
    avatar: "https://i.pravatar.cc/150?u=sophiamartinez",
    cover: "https://picsum.photos/seed/cover7/400/200",
    likes: "88.7K",
    posts: "978",
    views: "501.9K"
  },
  {
    id: 8,
    name: "Rahul Desai",
    role: "DevOps Engineer automating everything",
    avatar: "https://i.pravatar.cc/150?u=rahuldesai",
    cover: "https://picsum.photos/seed/cover8/400/200",
    likes: "62.4K",
    posts: "720",
    views: "295.6K"
  },
  {
    id: 9,
    name: "Emma Brown",
    role: "Graphic Designer crafting visuals",
    avatar: "https://i.pravatar.cc/150?u=emmabrown",
    cover: "https://picsum.photos/seed/cover9/400/200",
    likes: "79.5K",
    posts: "850",
    views: "412.8K"
  },
  {
    id: 10,
    name: "Anjali Mehta",
    role: "Cloud Architect and Kubernetes Expert",
    avatar: "https://i.pravatar.cc/150?u=anjalimehta",
    cover: "https://picsum.photos/seed/cover10/400/200",
    likes: "91.2K",
    posts: "1045",
    views: "537.4K"
  }
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member) => (
        <Cards
          key={member.id}
          name={member.name}
          role={member.role}
          avatar={member.avatar}
          cover={member.cover}
          likes={member.likes}
          posts={member.posts}
          views={member.views}
        />
      ))}
    </div>
  )
}

export default Container
