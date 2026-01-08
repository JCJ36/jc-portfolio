import './container.css';

function Skills(){
    const Contain = ({ title, desc }) => (
        <div className="border border-gray-400 rounded-xl p-2">
            <h2>{title}</h2>
            <p class="wrap-break-word">{desc}</p>
        </div>
    );
    const skills = [
        {id:1,title: "HTML5",desc:"Working with raw HTML5 development"},
        {id:1,title: "CSS3",desc:"As a way to style HTML5 files"},
        {id:1,title: "Javascript",desc:"As a way to add script and to work on ReactJS"},
        {id:1,title: "TailWindCSS 4.1",desc:"A different way to style ReactJS projects and HTML5 files"},
        {id:1,title: "Bootstrap 5",desc:"Creating layouts that make HTML5 development faster"},
        {id:1,title: "ReactJS",desc:"Creating web development projects through Javascript"},
        {id:1,title: "Python",desc:"General development and a few experiences in doing data analysis with different analytical libraries"},
        {id:1,title: "Java",desc:"General application creation"},
        {id:1,title: "Canva",desc:"Presentation creation and design planning"},
        {id:1,title: "Scrum",desc:"Method of project planning and testing for an optimal output"},
    ];
    return(<>
        <h1>Skills:</h1>
        <div class="grid grid-cols-2 gap-5 max-h-100 overflow-y-auto">
            {skills.map((skill) => (
                <Contain 
                key={skill.id} 
                title={skill.title} 
                desc={skill.desc} 
                />
            ))}
        </div>
    </>);
}

export default Skills;