import Image from 'next/image';
import Background from '@/components/background';
import Headline from '@/components/headline';
import ArticleSection from '@/components/article-section';
import TwoColumnLayout from '@/components/two-column-layout';
import InfoCard from '@/components/info-card';
import PullQuote from '@/components/pull-quote';
import { BotIcon as RobotIcon, UserIcon, AlertTriangleIcon, BrainIcon, AtomIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="py-8">
		<Background/>
      {/* Hero Section */}
      <header className="mb-10 text-center">
        <div className="max-w-4xl mx-auto mb-8">
          <p className="uppercase tracking-wider text-accent-red font-medium mb-3">Feature Article</p>
          <Headline 
            title="Rethinking Mars Exploration Through the Lens of AI Progress" 
            subtitle="Why robots should go to Mars before humans"
            accent={true}
          />
          <p className="mt-4 text-lg text-black/70 dark:text-white/70">
            By James Grappe, Ivelina Stefanova, Valerio Costa, Cassandre Melot • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="relative w-full aspect-[21/9] max-w-5xl mx-auto rounded-md overflow-hidden">
          <Image 
            src="https://wallpapercave.com/wp/wp4516010.jpg" 
            alt="Mars rover on the surface of Mars"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-sm">
				Real rover on Mars, trust
            </p>
          </div>
        </div>
      </header>

      {/* Lead paragraph */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="text-column">
          <p className="text-lg">
            As humanity contemplates the next giant leap in space exploration—establishing a presence on Mars—a crucial question emerges: Should humans or robots lead the way? Recent advancements in artificial intelligence and robotics are challenging the traditional narrative that human exploration is the ultimate goal. With AI capabilities expanding exponentially and the harsh realities of long-duration space travel becoming increasingly apparent, there's a compelling case for robotic precursors as not just preparation, but potentially the primary means of Mars exploration.
          </p>
          <p>
            The romance of human footprints on Martian soil has captivated our imagination for decades. However, practical considerations of safety, cost, and scientific output demand a pragmatic reassessment. Advanced AI-powered robots offer advantages that human explorers cannot match in the extreme Martian environment—they don't require life support, can operate continuously in radiation-filled environments, and present no risk of biological contamination to potential Martian ecosystems or of bringing unknown pathogens back to Earth.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <ArticleSection 
          id="humans" 
          title="The Drawbacks of Human Explorers" 
          subtitle="The human body presents significant challenges to Mars exploration"
        >
          <TwoColumnLayout
            leftContent={
              <div className="space-y-5">
                <p>
                  While sending humans to Mars is exciting, major challenges make it much harder and riskier than sending robots. First, the human body is not built for the extreme conditions on Mars. The atmosphere is mostly carbon dioxide, the surface pressure is less than 1% of Earth’s, and temperatures can swing from a high of 20°C (68°F) in the summer to lows of -153°C (-243°F) in the winter. Humans would need constant life support, including oxygen, food, water, and protection from radiation. Even just carrying the necessary water would be incredibly heavy - one person would need about 3,600 liters for a 900-day mission. 
                </p>
                <p>
                Beyond survival needs, there are serious physical risks. Long spaceflights cause muscle and bone loss, weaken the immune system, and even affect vision through conditions like Space-Associated Neuro-Ocular Syndrome. Radiation exposure is also a big problem; astronauts could receive over 1 sievert of radiation on a Mars mission, increasing their risk of cancer and other health issues. 
                </p>
                <p>
                There are also psychological concerns. Isolation, confinement, and long communication delays with Earth (up to 40 minutes each way) could cause mental health issues like depression or anxiety. Equipment failures pose another threat because, without immediate help from Earth, astronauts would have to solve problems on their own. Finally, a human mission would be costly compared to robotic missions because everything -from food systems to return vehicles - must be designed to keep people alive for years. All of these risks make it important to ask whether robots, not humans, should be the ones paving the way first. 
                </p>
              </div>
            }
            rightContent={
              <InfoCard 
                title="Human Limitations" 
                icon={<UserIcon className="w-6 h-6" />}
              >
                <ul>
                  <li>Require extensive life support systems (oxygen, water, food, waste management)</li>
                  <li>Vulnerable to radiation exposure during transit and on Martian surface</li>
                  <li>Susceptible to physical deterioration in microgravity</li>
                  <li>Limited operational time due to biological needs (sleep, rest)</li>
                  <li>Psychological challenges from isolation and confinement</li>
                  <li>Risk of biological contamination in both directions</li>
                  <li>Limited mission duration due to consumable supplies</li>
                </ul>
              </InfoCard>
            }
          />
          
          <PullQuote 
            quote="All space exploration is risky. As an astronaut, I had to decide each and every time I went to space whether or not to risk my life for the mission." 
            attribution="Astronaut John M. Grunsfeld"
          />
          
          <p>
            Furthermore, the economic cost of sending humans to Mars dwarfs robotic missions by orders of magnitude. The necessity of return-journey capability alone multiplies the complexity and expense of human missions. These resources might be better allocated to developing sophisticated AI systems capable of conducting more extensive exploration without the constraints of human physiology.
          </p>
        </ArticleSection>

        <ArticleSection 
          id="robots" 
          title="Current Robots on Mars: Limitations and Potential" 
          subtitle="Existing Mars rovers demonstrate both the promise and constraints of robotic exploration"
        >
          <div className="relative w-full aspect-video mb-6 rounded-md overflow-hidden">
            <Image 
              src="https://wallpapercave.com/wp/wp4515991.jpg" 
              alt="Current Mars rover"
              fill
              className="object-cover"
            />
          </div>
          
          <TwoColumnLayout
            leftContent={
              <InfoCard 
                title="Current Limitations" 
                icon={<AlertTriangleIcon className="w-6 h-6" />}
              >
                <ul>
                  <li>Limited mobility and speed (Perseverance rover travels ~0.1 mph)</li>
                  <li>Restrictive communication delays (4-24 minutes one-way)</li>
                  <li>Heavy reliance on Earth-based controllers for decision-making</li>
                  <li>Limited autonomy and adaptability to unexpected situations</li>
                  <li>Constrained energy due to dependence on solar power</li>
                  <li>Minimal onboard data processing capabilities</li>
                  <li>Inability to perform complex sample collection and analysis</li>
                </ul>
              </InfoCard>
            }
            rightContent={
              <div className="space-y-5">
                <p>
                  Current Mars rovers like Perseverance and Curiosity have made remarkable discoveries, but they operate with significant constraints. These rovers move at a glacial pace—Perseverance's top speed is just 0.1 mph—and must frequently pause operations during dust storms or low-light conditions that affect their solar panels. Most significantly, they lack the sophisticated AI systems needed for true autonomy.
                </p>
                <p>
                  The communication delay between Earth and Mars, ranging from 4 to 24 minutes one-way, means rovers must often wait for instructions rather than making real-time decisions. A simple action like moving around an unexpected obstacle can take an entire Martian day as commands are sent from Earth and executed remotely. This operational model severely limits exploration efficiency and scientific output.
                </p>
              </div>
            }
            reversed={true}
          />


          <p>
            Despite these limitations, current rovers have demonstrated extraordinary resilience. Opportunity, designed for a 90-day mission, operated for nearly 15 years. Curiosity continues to function a decade after landing. These achievements highlight the potential longevity advantage of robotic explorers when compared to human missions, which would likely be limited to much shorter durations due to resource constraints and human health considerations.
          </p>
        </ArticleSection>

        <ArticleSection 
          id="improvements" 
          title="Necessary Improvements for Future Robotic Explorers" 
          subtitle="Advanced AI and robotics technologies will transform Mars exploration capabilities"
          accent={true}
        >
        <div className="columns-1 md:columns-2 gap-8 space-y-4">
          <p>
            Future Mars robots could revolutionize planetary exploration simply by virtue of better, more versatile mobility systems specifically designed for Mars’s punishing terrain. While traditional wheeled rovers struggle immensely on Mars’s shifting sands and rocky inclines, advanced robots utilizing articulated multi-limbed systems could drastically enhance their ability to traverse rough terrain. For instance, inspired by animals like spiders or mountain goats, these robots would carefully distribute their weight across multiple agile limbs, each equipped with independent intelligent actuators and sophisticated balance algorithms that adapt in real time to Mars’s unpredictable surface. Such a design would enable them to scale steep cliffs, effortlessly climb out of sandy depressions, and maintain stability on loose soil that currently poses significant navigational challenges.
          </p>
          <p>
            Additionally, future robotic explorers could incorporate hybrid mobility systems, seamlessly transitioning between rolling on rugged wheels and stepping or climbing modes depending on the terrain. This hybrid design would optimize energy efficiency by reserving power intensive climbing or stepping motions for obstacles that cannot be tackled through wheeled navigation alone. Another intriguing concept involves shape shifting wheels made from flexible metallic mesh, able to dynamically adjust their shape and stiffness, effectively flowing around obstacles instead of being immobilized by them.
          </p>
          <p>
            Advanced aerial mobility could also significantly expand our robotic toolkit. Future Mars drones, significantly more robust than today’s small experimental helicopters, would use larger rotors and substantially improved propulsion systems to cover extensive distances, scouting optimal paths for ground based robots. Such aerial scouts would feed precise topographical maps and obstacle data directly back to surface robots, dramatically increasing their navigational efficiency.
          </p>
          <p>
            Ultimately, investing concurrently in developing sophisticated, specialized robotic mobility systems alongside crewed mission plans seems like the practical choice, maximizing our ability to comprehensively explore and understand the Martian landscape before any human boot ever sinks into Martian dust.
          </p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard 
              title="Enhanced Autonomy" 
              icon={<BrainIcon className="w-6 h-6" />}
            >
              <p>Future Mars robots will need sophisticated decision-making capabilities powered by advanced neural networks. These systems would analyze environmental data, identify scientific opportunities, and dynamically prioritize exploration tasks without waiting for Earth-based commands.</p>
            </InfoCard>
            
            <InfoCard 
              title="Physical Capabilities" 
              icon={<RobotIcon className="w-6 h-6" />}
            >
              <p>Next-generation rovers would feature advanced mobility systems for navigating varied Martian terrain, sophisticated manipulators for sample collection and handling, and enhanced sensory systems for detecting subtle environmental features relevant to scientific inquiry.</p>
            </InfoCard>
            
            <InfoCard 
              title="Multi-Agent Systems" 
              icon={<UserIcon className="w-6 h-6" />}
            >
              <p>Rather than single rovers, future exploration could deploy interconnected robot teams with specialized functions—flying drones for aerial surveys, tunneling robots for subsurface exploration, and stationary units for long-term monitoring—all coordinating through distributed AI networks.</p>
            </InfoCard>

            <InfoCard 
              title="Nuclear Power Systems" 
              icon={<AtomIcon className="w-6 h-6" />}
            >
              <p> Energy systems represent another critical area for improvement. Nuclear power sources, like the radioisotope thermoelectric generators used in some current rovers, could be scaled up to provide continuous power regardless of environmental conditions. This would enable 24/7 operations and support the increased computing requirements of advanced AI systems.</p>
            </InfoCard>
          </div>
          
          <PullQuote 
            quote="The ideal Mars explorer wouldn't be a better human or a better robot, but a new synthesis—AI systems with human-level cognition combined with robotic bodies perfectly adapted to the Martian environment." 
            attribution="Professor Yuki Tanaka, AI and Robotics Institute"
          />
        </ArticleSection>

        <ArticleSection 
          id="future" 
          title="The Future of Mars Exploration" 
          subtitle="Why robots should lead the way to the Red Planet"
        >
          <TwoColumnLayout
            leftContent={
              <div className="space-y-5">
                <p>
                  The case for prioritizing robotic exploration of Mars becomes even stronger when considering the comprehensive advantages. AI-powered robots can operate continuously in the harsh Martian environment without the need for life support systems, shelter, or return transportation. They can be designed specifically for Mars conditions rather than adapting human biology to an alien world.
                </p>
                <p>
                  From a scientific perspective, robots can be deployed in greater numbers and to more diverse and dangerous locations than would be possible for human explorers. They can conduct long-term experiments spanning decades—timeframes beyond practical human missions. Most importantly, they eliminate the risk of biological contamination in either direction, preserving both potential Martian ecosystems and Earth's biosphere.
                </p>
              </div>
            }
            rightContent={
              <div className="relative w-full aspect-square rounded-md overflow-hidden">
                <Image 
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fai-art-illustration-science-fiction-astronaut-Mars-2226364.jpg&f=1&nofb=1&ipt=20f359d1b8d977657cba5cba66069a12e6433e750f102ad6d20a148c0734c0f7" 
                  alt="Future of Mars exploration"
                  fill
                  className="object-cover"
                />
              </div>
            }
          />
          
          <div className="my-8 p-6 bg-accent-red/5 dark:bg-accent-red/10 rounded-md border border-accent-red/20">
            <h3 className="font-playfair font-bold text-xl mb-4">Key Advantages of Robotic Exploration</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>No life support requirements or biological risks</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Can operate continuously in extreme radiation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Mission duration limited only by mechanical durability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Lower cost and resource requirements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Can access extreme terrain too dangerous for humans</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Eliminates ethical concerns about human safety</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>No return journey infrastructure required</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-red font-bold">•</span>
                <span>Prevents biological contamination in both directions</span>
              </li>
            </ul>
          </div>
          
          <p>
            This is not to suggest that humans will never set foot on Mars. Rather, by prioritizing the development of sophisticated AI-powered robotic explorers, we create a pathway where robots thoroughly explore and prepare Mars before any human arrival. These robotic precursors could build habitats, generate resources, and establish infrastructure that would make eventual human missions safer and more productive.
          </p>
          
          <p>
            The future of Mars exploration may best be served by embracing a new paradigm: instead of viewing robots as mere precursors to human exploration, we might recognize them as the primary explorers of Mars, with humans serving as their designers, remote collaborators, and beneficiaries of their discoveries. In this model, both human ingenuity and robotic resilience contribute to unveiling the secrets of the Red Planet.
          </p>
        </ArticleSection>
      </div>
    </div>
  );
}
