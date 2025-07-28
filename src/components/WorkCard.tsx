"use client";


import Image from 'next/image';

const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    'AWS Lambda': '/icons/aws-lambda.svg',
    'TypeScript': '/icons/typescript.svg',
    'Node.js': '/icons/nodejs.svg',
    'DynamoDB': '/icons/dynamodb.svg',
    'MongoDB': '/icons/mongodb.svg',
    'SQS': '/icons/sqs.svg',
    'S3': '/icons/s3.svg',
    'Twilio': '/icons/twilio.svg',
    'API Gateway': '/icons/api-gateway.svg',
    'Power Automate': '/icons/power-automate.svg',
    'PowerApps': '/icons/powerapps.svg',
    'Power BI': '/icons/power-bi.svg',
    'PowerShell': '/icons/powershell.svg',
    'AI/ML': '/icons/ai-ml.svg',
    'Java': '/icons/java.svg',
    'Spring MVC': '/icons/spring.svg',
    'Kafka': '/icons/kafka.svg',
    'Jenkins': '/icons/jenkins.svg',
    'Box': '/icons/box.svg',
    'Spring WebFlux': '/icons/spring.svg',
    'AWS S3': '/icons/s3.svg',
    'REST APIs': '/icons/rest-apis.svg'
  };
  return icons[tech] || '/icons/default.svg';
};

const getCompanyLogo = (company: string) => {
  const logos: { [key: string]: string } = {
    'PROJECT REMA': '/logos/rematriation-project.svg',
    'Eli Lilly & Company': '/logos/eli-lilly.png',
    'RAKUTEN': '/logos/rakuten.png',
    'IBM INDIA': '/logos/ibm.png'
  };
  return logos[company] || null;
};

interface Work {
  _id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  logo?: string;
  technologies?: string[];
}

interface WorkCardProps {
  work: Work;
  onWorkClick: (work: Work) => void;
}

export default function WorkCard({ work, onWorkClick }: WorkCardProps) {
  // Pastel color palette
  const pastelColors = [
    '#FFB3BA', // soft light pink/coral
    '#FFD4B3', // muted golden yellow
    '#FFFFFF', // pure white
    '#B3E5FC', // vibrant teal/turquoise
    '#E1BEE7'  // soft muted purple/lavender
  ];
  
  // Better color cycling - use the entire ID for more variety
  let hash = 0;
  for (let i = 0; i < work._id.length; i++) {
    hash = work._id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % pastelColors.length;
  const pastelColor = pastelColors[colorIndex];

  const companyLogo = getCompanyLogo(work.company);

  const handleClick = () => {
    onWorkClick(work);
  };

    return (
                <div
              className="relative cursor-pointer group hover:-translate-y-2 transition-transform duration-300 border-0 rounded-xl overflow-hidden flex-shrink-0"
              style={{ aspectRatio: '3/4', width: '280px' }}
              onClick={handleClick}
            >
      {/* Card Background */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{ backgroundColor: pastelColor }}
      />
      
      {/* Card Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Company Info */}
        <div style={{ color: '#000000' }}>
          {companyLogo && (
            <div className="mb-3">
              <Image
                src={companyLogo}
                alt={`${work.company} logo`}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-bold mb-2">{work.company}</h3>
          <p className="text-lg font-medium mb-1">{work.role}</p>
          <p className="text-sm opacity-80">{work.duration}</p>
        </div>
        
        {/* Description */}
        <div className="text-sm opacity-90 line-clamp-4" style={{ color: '#000000' }}>
          {work.description}
        </div>
        
        {/* Technologies */}
        {work.technologies && work.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {work.technologies.slice(0, 4).map((tech, index) => (
                                      <span
                          key={index}
                          className="flex items-center px-2 py-1 text-xs rounded-xl font-medium"
                          style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                          title={tech}
                        >
                <Image
                  src={getTechIcon(tech)}
                  alt={tech}
                  width={12}
                  height={12}
                  className="w-3 h-3 mr-1"
                />
                <span>{tech}</span>
              </span>
            ))}
            {work.technologies.length > 4 && (
                                    <span className="px-2 py-1 text-xs rounded-xl font-medium" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                        +{work.technologies.length - 4}
                      </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 