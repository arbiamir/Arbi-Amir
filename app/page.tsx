'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight, Gamepad2, Mail, MapPin, Phone, Code2, Briefcase, BookOpen, Trophy, Cpu, Swords, Rocket, MonitorPlay, Github, Linkedin, X, Facebook, Menu, FileText, ChevronRight, GraduationCap, Download, Zap } from 'lucide-react'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BubbleBackground } from '@/components/bubble-background'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function Portfolio() {
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  const navItems = ['Work', 'Experience', 'Skills', 'Contact']

  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl font-bold tracking-tight text-accent"
          >
            Arbi Amir
          </motion.div>
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent hover:shadow-[0_0_10px_currentColor] cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="/M. Arbi Amir - Unity Game Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navItems.length }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent hover:shadow-[0_0_10px_currentColor] cursor-pointer flex items-center gap-1.5"
            >
              <FileText size={16} />
              Resume
            </motion.a>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Menu size={24} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px] bg-background border-l border-border/50 p-0 [&>button]:hidden">
              <div className="flex flex-col h-full">
                {/* Header with name and close button */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/50">
                  <h3 className="text-2xl font-bold text-foreground">Arbi Amir</h3>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full cursor-pointer">
                      <X size={20} />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col flex-1 px-6 py-6 overflow-y-auto">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-base font-medium text-foreground transition-colors hover:text-accent cursor-pointer py-4 border-b border-border/30"
                    >
                      <span>{item}</span>
                      <ChevronRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                  <a
                    href="/M. Arbi Amir - Unity Game Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-base font-medium text-foreground transition-colors hover:text-accent cursor-pointer py-4 border-b border-border/30"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={18} />
                      Resume
                    </span>
                    <ChevronRight size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </nav>

                {/* CTA Buttons */}
                <div className="px-6 pb-6 pt-4 border-t border-border/50 space-y-3">
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.location.href = '#work'
                    }}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-medium cursor-pointer"
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.location.href = '#contact'
                    }}
                    variant="outline"
                    className="w-full border-2 border-foreground/20 bg-background hover:bg-accent/10 hover:border-accent/50 h-12 text-base font-medium cursor-pointer"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 md:min-h-screen md:pt-20 lg:pt-24 pt-32 pb-20 md:pb-0"
      >
        <BubbleBackground />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background/50 to-background" />

        <div className="relative z-10 max-w-5xl w-full text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="space-y-6 md:space-y-8"
          >
            {/* Professional Badge */}
            <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
                <GraduationCap size={16} className="md:w-[18px] md:h-[18px] text-accent" />
                <span className="text-xs md:text-sm font-semibold text-foreground">Professional Unity Game Developer</span>
              </div>
            </motion.div>

            {/* Name Section */}
            <motion.div variants={itemVariants} className="space-y-3 md:space-y-5">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[1.1] md:leading-[1.05] text-foreground tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="whitespace-nowrap block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-500">MUHAMMAD ARBI</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">AMIR</span>
                </span>
              </motion.h1>
              <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">
                Unity Game Developer <span className="text-accent mx-2">•</span> C# Programmer
              </motion.p>
            </motion.div>

            {/* Description with highlighted text */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-foreground/70 leading-relaxed mt-6 md:mt-4"
            >
              Building immersive mobile gaming experiences with high-performance code.
              Specialized in <span className="text-accent font-semibold">gameplay programming</span>, <span className="text-accent font-semibold">AI systems</span>, and <span className="text-accent font-semibold">ad monetization optimization</span>.
            </motion.p>

            {/* Buttons - Horizontal on all screens */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-3 md:gap-4 justify-center items-center flex-wrap mt-8 md:mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 border-0 shadow-[0_0_20px_rgba(var(--accent),0.5)] cursor-pointer text-sm md:text-base h-11 md:h-12 font-medium px-5 md:px-6"
                  onClick={() => window.location.href = '/M. Arbi Amir - Unity Game Developer.pdf'}
                >
                  <Download size={16} className="md:w-[18px] md:h-[18px]" />
                  Download CV
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 border-2 border-foreground/30 bg-background hover:bg-accent/10 hover:border-accent/50 text-foreground cursor-pointer text-sm md:text-base h-11 md:h-12 font-medium px-5 md:px-6"
                  onClick={() => window.location.href = '#contact'}
                >
                  <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Cards - Vertical on mobile, horizontal on desktop */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 max-w-2xl mx-auto"
            >
              {[
                { icon: Briefcase, value: '1+', label: 'Years Experience', color: 'text-orange-400' },
                { icon: GraduationCap, value: '10+', label: 'Projects Completed', color: 'text-orange-400' },
                { icon: Zap, value: '15+', label: 'Technologies', color: 'text-yellow-400' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-row md:flex-col items-center md:items-center justify-center md:justify-center gap-4 md:gap-0 p-4 md:p-6 rounded-xl bg-card/40 border border-border/50 backdrop-blur-sm hover:border-accent/50 transition-all w-full md:w-auto"
                >
                  <stat.icon size={24} className={`md:w-6 md:h-6 ${stat.color} mb-0 md:mb-2`} />
                  <div className="flex flex-col md:flex-col items-center md:items-center">
                    <span className={`text-2xl md:text-3xl font-bold ${stat.color} mb-0.5 md:mb-1`}>{stat.value}</span>
                    <span className="text-xs md:text-sm text-foreground/70 text-center leading-tight">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator - hidden on mobile, shown on desktop */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card/10 border-y border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Cpu size={18} className="text-accent" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-wider">SKILL TREE</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 px-2">Technical Expertise</h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              Mastering the tools of the trade to deliver AAA-quality performance and mechanics
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                title: 'Game Engine & Core',
                icon: <Gamepad2 className="w-10 h-10 text-accent" />,
                skills: ['Unity 3D/2D', 'Mobile Development', 'Scene Management', 'C#', 'Python', 'OOP'],
              },
              {
                title: 'Gameplay Programming',
                icon: <Swords className="w-10 h-10 text-accent" />,
                skills: ['Physics-Based Controls', 'Character Mechanics', 'Vehicle Systems', 'Input Systems', 'Game Logic'],
              },
              {
                title: 'AI & Simulation',
                icon: <Cpu className="w-10 h-10 text-accent" />,
                skills: ['Traffic Systems', 'Pedestrian Logic', 'Enemy Behavior', 'Pathfinding', 'State Machines'],
              },
              {
                title: 'Performance & Tools',
                icon: <Rocket className="w-10 h-10 text-accent" />,
                skills: ['Mobile Optimization', 'Profiling', 'Debugging', 'Memory Management', 'Git'],
              },
              {
                title: 'Monetization',
                icon: <Trophy className="w-10 h-10 text-accent" />,
                skills: ['Google AdMob', 'Unity Ads', 'Rewarded Ads', 'Interstitial Ads', 'Banner Ads'],
              },
              {
                title: 'UI & Front-End',
                icon: <MonitorPlay className="w-10 h-10 text-accent" />,
                skills: ['Unity UI', 'UX Implementation', 'Responsive Layouts', 'Screen Transitions', 'HUD Design'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <Card className="h-full relative border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl transition-all duration-300 group-hover:border-accent/50 group-hover:bg-card">
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-background/50 w-fit border border-border/50 group-hover:border-accent/30 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 group-hover:text-accent transition-colors">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Briefcase size={18} className="text-accent" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-wider">CAREER QUESTS</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 px-2">Experience Points</h2>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                title: 'Unity Game Developer',
                company: 'Logic Rack Inc',
                location: 'Bahawalpur, Pakistan',
                period: 'December 2024 – Present',
                description: [
                  'Designed and coded full physics-based vehicle control systems and character mechanics.',
                  'Implemented complex animation systems including in-engine cut scenes and synced dialogue.',
                  'Developed AI-driven traffic and pedestrian systems to enhance game world realism.',
                  'Integrated and managed monetization stacks (Google AdMob, Unity Ads) to maximize revenue.',
                  'Transformed UI wireframes into fully functional, interactive, and user-friendly game interfaces.',
                ],
              },
              {
                title: 'Python Developer Internship',
                company: 'Enigmatix',
                location: 'Bahawalpur, Pakistan',
                period: '3 Months',
                description: [
                  'Assisted in designing and developing backend modules using Python and Django.',
                  'Implemented automated testing scripts to improve software reliability and performance.',
                  'Collaborated on backend logic and database optimization for internal software tools.',
                  'Gained technical expertise in data structures and algorithm optimization.',
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={job.company}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Card className="h-full border border-border/50 bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(var(--accent),0.1)] cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{job.company}</h3>
                        <p className="text-accent font-medium text-sm sm:text-base">{job.location}</p>
                      </div>
                      <div className="px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-bold rounded whitespace-nowrap">
                        {job.period}
                      </div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">{job.title}</h4>
                    <ul className="space-y-2 sm:space-y-3 flex-1">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex gap-2 sm:gap-3 text-foreground/80 text-xs sm:text-sm leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_5px_currentColor]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="work"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card/10 border-y border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <Gamepad2 size={18} className="text-accent" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-wider">GAME LIBRARY</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 px-2">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
              A collection of mobile games and simulations developed with Unity
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {[
              {
                title: 'Military Truck Driving Games',
                category: 'Simulation / Vehicle',
                description: 'A military truck driving simulation game featuring heavy vehicles with realistic physics-based controls across challenging offroad terrains, including snow and night environments. Complete mission-based objectives while experiencing army-style training in camps with cinematic sequences that enhance realism and immersion.',
                tech: ['Unity 3D', 'Vehicle Physics', 'C# Scripting', 'AI Traffic System', 'Level Design'],
                link: 'https://play.google.com/store/apps/details?id=com.gnc.military.truck.simulator.games',
                image: '/projects/military-truck-game.jpg',
              },
              {
                title: 'Car Racing and Stunt Games',
                category: 'Racing / Arcade',
                description: 'A racing and stunt-based car game featuring two modes where you can compete against AI cars or perform thrilling stunts. Experience high-speed driving with cinematic stunt sequences, multiple cars, and a reward system that lets you earn coins through races and skill-based challenges.',
                tech: ['Unity 3D', 'Arcade Physics', 'Stunt Mechanics', 'Level Design', 'VFX Systems'],
                link: 'https://play.google.com/store/apps/details?id=com.fg.car.racing.stuntgames',
                image: '/projects/car-racing-stunt-games.jpg',
              },
              {
                title: 'Bus Simulation Game',
                category: 'Simulation',
                description: 'An offroad bus driving game where you travel through mountains, forests, and muddy tracks while picking up and dropping off passengers safely. The game features dynamic weather conditions and 10 mission-based levels that test your driving control and timing in challenging environments.',
                tech: ['Unity 3D', 'AI Traffic', 'C# Scripting', 'Mobile Optimization', 'UI/UX'],
                link: 'https://play.google.com/store/apps/details?id=com.sg.bus.simulator.offroad.bus.sim',
                image: '/projects/bus-simulation-game.jpg',
              },
              {
                title: 'Car Sim Driving Game',
                category: 'Open World Simulation',
                description: 'An open-world car driving game set in a lively city with traffic, pedestrians, and detailed environments. Explore freely while completing boss-based missions with engaging cutscenes, realistic driving controls, and multiple cars to unlock and use.',
                tech: ['Unity 3D', 'C# Programming', 'Object Pooling', 'Open World Logic', 'Optimization'],
                link: 'https://play.google.com/store/apps/details?id=com.fg.open.world.car.game',
                image: '/projects/open-world-car_driving.jpg',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Card className="h-full border border-border/50 bg-card/40 hover:bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:border-accent/50 hover:shadow-[0_0_30px_rgba(var(--accent),0.1)] cursor-pointer">
                  <div className="aspect-video relative overflow-hidden border-b border-border/50">
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent to-transparent" />
                        <Gamepad2 className="w-12 h-12 sm:w-16 sm:h-16 text-foreground/20 group-hover:text-accent/80 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-medium mt-1 uppercase tracking-wide">{project.category}</p>
                      </div>
                    </div>

                    <p className="text-foreground/70 leading-relaxed mb-4 sm:mb-6 flex-1 text-xs sm:text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-background/50 border-border/50 text-xs">{tech}</Badge>
                      ))}
                    </div>

                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto cursor-pointer">
                        <Button className="w-full gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors cursor-pointer" variant="secondary">
                          View on Store <ArrowUpRight size={16} />
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <motion.div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <BookOpen size={18} className="text-accent" />
              <span className="text-xs sm:text-sm font-bold text-accent tracking-wider">KNOWLEDGE BASE</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6 px-2">Education</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              {
                degree: 'Bachelor of Science in Artificial Intelligence',
                institution: 'The Islamia University of Bahawalpur',
                period: '2020 - 2024',
                description: 'Final Year Project: Developed "JARVIS", a Python-based AI virtual assistant for desktop automation and speech recognition.',
              },
              {
                degree: 'Intermediate (ICS)',
                institution: 'Punjab Group of Colleges',
                period: '2019 - 2020',
                description: 'Focus on Computer Science, Physics, and Mathematics.',
              },
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border border-border/50 bg-card/30 hover:bg-card/50 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-accent/30 cursor-pointer">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                      <BookOpen size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-accent font-medium mt-1 text-sm sm:text-base">{edu.institution}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-2 mb-3 sm:mb-4 font-mono">{edu.period}</p>
                      <p className="text-foreground/70 leading-relaxed text-xs sm:text-sm">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card/10 border-t border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground px-2">
                Ready to Start the Game?
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 px-4">
                I'm available for new opportunities. Let's build something player-centric together.
              </p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {[
                { icon: Mail, label: 'arbiamir01@gmail.com', href: 'mailto:arbiamir01@gmail.com' },
                { icon: Phone, label: '+92 304 7829199', href: 'tel:+923047829199' },
                { icon: MapPin, label: 'Bahawalpur, Pakistan', href: '#' },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-card border border-border/50 hover:border-accent/50 text-foreground hover:text-accent transition-all shadow-lg hover:shadow-accent/20 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <contact.icon size={18} className="sm:w-5 sm:h-5 text-accent" />
                  <span className="font-medium text-sm sm:text-base">{contact.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-border/30 py-8 sm:py-12 px-4 sm:px-6 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
            <div className="flex gap-4 sm:gap-6">
              {[
                { icon: Github, href: 'https://github.com/arbiamir', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-arbi-amir-74890b262', label: 'LinkedIn' },
                { icon: X, href: 'https://x.com/arbiamir01?s=21', label: 'X' },
                { icon: Facebook, href: 'https://www.facebook.com/arbi.malik.180', label: 'Facebook' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 sm:p-3 rounded-full bg-card border border-border/50 text-foreground hover:text-accent hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/20 cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                </motion.a>
              ))}
            </div>
            <div className="text-center px-4">
              <p className="text-foreground/40 text-xs sm:text-sm">
                © {new Date().getFullYear()} Muhammad Arbi Amir. All rights reserved.
              </p>
              <p className="text-foreground/30 text-[10px] sm:text-xs mt-2 font-mono uppercase tracking-widest">
                Mastering the Art of Game Development
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
