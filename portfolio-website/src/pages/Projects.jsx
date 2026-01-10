import { motion } from 'framer-motion';
import cacheMeImage from '../assets/fantasy.png';
import smashGolfImage from '../assets/golf.png';
import nbaImage from '../assets/nbamatch.png';
import clinicImage from '../assets/hospital.png';
import pokedexImage from '../assets/pokemon.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cache Me Fantasy",
      description: "A full-stack fantasy basketball web application with real-time player stats, team management, and league functionality. Built with React, FastAPI, and PostgreSQL.",
      tech: ["React", "FastAPI", "PostgreSQL", "Render", "Vercel"],
      image: cacheMeImage,
      github: "https://github.com/mikacelik11/cache-me-fantasy",
      live: "https://your-app.vercel.app"
    },
    {
      id: 2,
      title: "Smash Golf",
      description: "A golf game project with interactive gameplay mechanics.",
      tech: ["JavaScript", "React"],
      image: smashGolfImage,
      github: "https://github.com/mikacelik11/smash-golf",
      live: null
    },
    {
      id: 3,
      title: "NBA Match Predictor",
      description: "Machine learning model that predicts NBA game outcomes with 63% accuracy using historical game data and player statistics.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      image: nbaImage,
      github: "https://github.com/mikacelik11/nba-predictor",
      live: null
    },
    {
      id: 4,
      title: "Clinic Management System",
      description: "A comprehensive clinic management system for scheduling appointments, managing patient records, and tracking medical history.",
      tech: ["Java", "SQL", "JavaFX"],
      image: clinicImage,
      github: "https://github.com/mikacelik11/clinic-management",
      live: null
    },
    {
      id: 5,
      title: "PokeDex Application",
      description: "Interactive Pokémon encyclopedia with search functionality, detailed stats, and type effectiveness information.",
      tech: ["JavaScript", "React", "PokeAPI"],
      image: pokedexImage,
      github: "https://github.com/mikacelik11/pokedex",
      live: null
    }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, machine learning, and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <a 
                href={project.live || project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative overflow-hidden h-48"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {project.live ? 'View Live Demo' : 'View on GitHub'}
                  </span>
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4"
                  
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    //className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;