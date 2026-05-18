"use client";


import Image from 'next/image';

const getTechIcon = (tech: string) => {
  // Use environment variable for base path during build time
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  const icons: { [key: string]: string } = {
    'AWS Lambda': `${basePath}/icons/aws-lambda.svg`,
    'AWS': `${basePath}/icons/aws.svg`,
    'AWS Textract': `${basePath}/icons/aws.svg`,
    'TypeScript': `${basePath}/icons/typescript.svg`,
    'Node.js': `${basePath}/icons/nodejs.svg`,
    'FastAPI': `${basePath}/icons/fastapi.svg`,
    'PostgreSQL': `${basePath}/icons/postgresql.svg`,
    'pgvector': `${basePath}/icons/pgvector.svg`,
    'Kubernetes': `${basePath}/icons/kubernetes.svg`,
    'DynamoDB': `${basePath}/icons/dynamodb.svg`,
    'MongoDB': `${basePath}/icons/mongodb.svg`,
    'SQS': `${basePath}/icons/sqs.svg`,
    'S3': `${basePath}/icons/s3.svg`,
    'Twilio': `${basePath}/icons/twilio.svg`,
    'API Gateway': `${basePath}/icons/api-gateway.svg`,
    'Power Automate': `${basePath}/icons/power-automate.svg`,
    'PowerApps': `${basePath}/icons/powerapps.svg`,
    'Power BI': `${basePath}/icons/power-bi.svg`,
    'PowerShell': `${basePath}/icons/powershell.svg`,
    'AI/ML': `${basePath}/icons/ai-ml.svg`,
    'Java': `${basePath}/icons/java.svg`,
    'Spring MVC': `${basePath}/icons/spring.svg`,
    'Spring Boot': `${basePath}/icons/spring.svg`,
    'Hibernate': `${basePath}/icons/spring.svg`,
    'Kafka': `${basePath}/icons/kafka.svg`,
    'Jenkins': `${basePath}/icons/jenkins.svg`,
    'Box': `${basePath}/icons/box.svg`,
    'Spring WebFlux': `${basePath}/icons/spring.svg`,
    'AWS S3': `${basePath}/icons/s3.svg`,
    'REST APIs': `${basePath}/icons/rest-apis.svg`
  };
  return icons[tech] || `${basePath}/icons/default.svg`;
};

const getCompanyLogo = (company: string) => {
  // Use environment variable for base path during build time
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  const logos: { [key: string]: string } = {
    'Project REMA': `${basePath}/logos/rematriation-project.svg`,
    'Game2Learn Lab, NC State University': `${basePath}/logos/g2l_controller.png`,
    'Tata Consultancy Services': `${basePath}/logos/Tata_Consultancy_Services_old_logo.svg.png`,
    'Rakuten': `${basePath}/logos/rakuten.png`,
    'IBM': `${basePath}/logos/ibm.png`
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
  accentColor?: string;
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
  const pastelColor = work.accentColor ?? pastelColors[colorIndex];

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
        <div className="text-sm opacity-90 line-clamp-4 whitespace-pre-line" style={{ color: '#000000' }}>
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