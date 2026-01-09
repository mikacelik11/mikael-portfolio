import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      title: "Basketball",
      description: "Playing pickup basketball and following the NBA. Big fan of fantasy basketball leagues.",
      icon: "🏀",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Gaming",
      description: "Enjoying video games, strategy games, and competitive gaming in my free time.",
      icon: "🎮",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Technology",
      description: "Exploring new tech, building side projects, and staying updated with the latest in software development.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Music",
      description: "Listening to music while coding and discovering new artists and genres.",
      icon: "🎵",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            My Hobbies & Interests
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beyond coding, here's what I enjoy doing in my free time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative bg-gray-800 rounded-xl p-8 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${hobby.color}`}></div>
              
              <div className="text-6xl mb-4">{hobby.icon}</div>
              
              <h3 className="text-3xl font-bold mb-3">{hobby.title}</h3>
              
              <p className="text-gray-300 text-lg">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400">
            Always looking to explore new interests and connect with like-minded people!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;