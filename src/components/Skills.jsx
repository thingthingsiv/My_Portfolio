
import SkillCard from "./SkillCard";

const skillItems = [
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework',
      },
    
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface',
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction',
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server',
    },
    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: '',
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database',
    },
    
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface',
    },
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool',
      },
  ];
  
  const Skills = () => {
    return (
      <section id="skill" className="section" >
        <div className="container">
          <h2 className="headline-2">Essential Tools I Use</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Here are the tools and languages that I currently use in my daily work
            and projects.
          </p>
  
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItems.map(({imgSrc, label, desc}, key) =>(
                    <SkillCard 
                    
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}/>
                ))
            }
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  