import Image from 'next/image'
import profileImage from '../../../public/angelyn.jpg'
import profileImageSquare from '../../../public/angelyn_square.png'

export default function Profile() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center px-4 py-6 sm:p-8 lg:p-16">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 fade-in fade-in-delay-5">
            <div className="relative mx-auto lg:mx-0">
            <Image
                src={profileImage}
                alt="Profile"
                width={320}
                height={320}
                className="hidden sm:block w-48 sm:w-80 rounded-2xl object-cover shadow-2xl border-4 border-slate-700 transition-all duration-700 ease-in-out"
                priority
            />
            <Image
                src={profileImageSquare}
                alt="Profile"
                width={192}
                height={192}
                className="block sm:hidden w-60 rounded-2xl object-cover shadow-2xl border-4 border-slate-700 transition-all duration-700 ease-in-out"
                priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left px-2 py-4 sm:p-6 lg:p-8 w-full overflow-hidden">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 typing-animation break-words">
            Angelyn Domingo
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-slate-400 mb-6 font-light fade-in-float fade-in-delay-2" style={{ fontFamily: 'Monocraft, monospace' }}>
            💻 coder • 🎹 organist • 📚 learner
            </p>
            
            <hr className="border-slate-400 border-t-2 mb-5 fade-in-float fade-in-delay-3" />
            
            <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-4 fade-in-float fade-in-delay-4">
                I am a passionate developer and a first-generation college student.
            </p>
            
            <p className="text-slate-300 leading-relaxed mb-4 fade-in-float fade-in-delay-5">
                I am currently a senior majoring in computer science at George Mason University 
                with an interest in web development, DevOps, software engineering, and human-computer 
                interaction. I also enjoy learning about new languages and styles like 
                functional programming that make development fun!
            </p>
            
            <p className="text-slate-300 leading-relaxed fade-in-float fade-in-delay-6">
                Besides computing, I also have a passion for music and enjoy playing the piano/organ 
                for my church. When I am not coding or studying, I am usually playing games, 
                reading, or spending time with my family and friends.
            </p>
            </div>

            {/* Contacts */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 justify-center lg:justify-start">
            <a 
                href="mailto:angelyn.domingo122@gmail.com"
                className="border border-slate-600 rounded-lg hover:border-blue-500 transition-colors duration-300 font-medium flex items-center overflow-hidden fade-in-float fade-in-delay-6"
            >
                <div className="px-4 py-3 bg-blue-600 text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Contact Me
                </div>
                <div className="px-3 sm:px-4 py-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                    angelyn.domingo122@gmail.com
                </div>
            </a>
            <a 
                href="https://github.com/AngelynDisguise"
                className="border border-slate-600 rounded-lg hover:border-blue-500 transition-colors duration-300 font-medium flex items-center overflow-hidden fade-in-float fade-in-delay-7"
            >
                <div className="px-4 py-3 bg-blue-600 text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </div>
                <div className="px-3 sm:px-4 py-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                    @AngelynDisguise
                </div>
            </a>
            <a 
                href="https://linkedin.com/in/angelynd"
                className="border border-slate-600 rounded-lg hover:border-blue-500 transition-colors duration-300 font-medium flex items-center overflow-hidden fade-in-float fade-in-delay-8"
            >
                <div className="px-4 py-3 bg-blue-600 text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                </div>
                <div className="px-3 sm:px-4 py-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                    Angelyn Domingo
                </div>
            </a>
            </div>
        </div>
        </div>
    )
}