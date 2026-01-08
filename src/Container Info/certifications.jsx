import './container.css';
import Agile from '../assets/agile-explorer.png'
import Emerge from '../assets/explore-emerging-tech.png'
import Lifelong from '../assets/lifelong-learning.png'
import Networking from '../assets/networking-basics.png'
import Management from '../assets/project-management-fundamentals.png'
import Scrum from '../assets/scrum-foundation-professional-certification-sfpc.png'
import UExp from '../assets/user-experience-design-fundamentals.png'
import Digital from '../assets/working-in-a-digital-world-professional-skills.png'
function Certification(){
    const GalleryItem = ({ src, alt }) => (
        <div className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow p-0.5">
            <img 
            src={src}
            alt={alt} 
            className="w-50 h-40 object-cover transition-transform duration-300"
            />
        </div>
    );
    const images = [
        { id: 1, src: Agile, alt: "Agile Explorer - IBM SKillsBuild" },
        { id: 2, src: Emerge, alt: "Explore Emerging Tech - IBM SkillsBuild" },
        { id: 3, src: Lifelong, alt: "Lifelong Learning - Certiprof" },
        { id: 4, src: Networking, alt: "Networking Basics - Cisco" },
        { id: 5, src: Management, alt: "Project Management Fundamentals - IBM SkillsBuild" },
        { id: 6, src: Scrum, alt: "Scrum Foundation Professional Certification - Certiprof" },
        { id: 7, src: UExp, alt: "User Design Experience Fundamentals - IBM SkillsBuild" },
        { id: 8, src: Digital, alt: "Working in a Digital World: Professional Skills - IBM SkillsBuild" },
    ];
    return(<>
        <h1 class="mb-2">Certifications:</h1>
        <div className="grid grid-cols-4 gap-4 max-h-100 overflow-y-auto">
            {images.map((img) => (
                <GalleryItem 
                key={img.id} 
                src={img.src} 
                alt={img.alt} 
                />
            ))}           
        </div>
    </>);
}

export default Certification;