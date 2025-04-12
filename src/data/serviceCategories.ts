import { 
  Code, 
  Database, 
  Rocket, 
  Palette, 
  Layers, 
  Server, 
  Shield, 
  Cpu, 
  Cloud, 
  LineChart, 
  Network, 
  Smartphone,
  Gamepad,
  Globe,
  MonitorSmartphone,
  WifiIcon
} from 'lucide-react';
import { ServiceCategory } from '@/components/services/ServiceCategorySection';

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'AI Development',
    description: 'Harness the power of artificial intelligence with our custom AI solutions designed to automate processes and provide valuable insights.',
    icon: Code,
    services: [
      {
        title: 'Machine Learning',
        description: 'Custom machine learning models that improve over time and deliver increasing value to your business.',
        icon: Cpu,
      },
      {
        title: 'Natural Language Processing',
        description: 'Text analysis solutions that understand, interpret, and respond to human language with remarkable accuracy.',
        icon: Server,
      },
      {
        title: 'Predictive Analytics',
        description: 'Forecast trends and behaviors using historical data to make data-driven business decisions.',
        icon: LineChart,
      },
    ]
  },
  {
    category: 'AR/VR Solutions',
    description: 'Create immersive experiences that transform how users interact with your brand, products, or services.',
    icon: Rocket,
    services: [
      {
        title: 'Virtual Reality Applications',
        description: 'Immersive VR experiences that transport users to new environments for training, entertainment, or product visualization.',
        icon: Cloud,
      },
      {
        title: 'Augmented Reality Apps',
        description: 'AR applications that enhance the real world with digital information and media, creating interactive user experiences.',
        icon: Smartphone,
      },
      {
        title: '3D Visualization',
        description: 'Realistic 3D models and visualizations that bring concepts and products to life before they are built.',
        icon: Layers,
      },
    ]
  },
  {
    category: 'Blockchain Development',
    description: 'Build secure, transparent, and decentralized applications with our blockchain development services.',
    icon: Database,
    services: [
      {
        title: 'Smart Contracts',
        description: 'Self-executing contracts with the terms directly written into code, ensuring transparency and security.',
        icon: Shield,
      },
      {
        title: 'Decentralized Applications',
        description: 'Build dApps that run on a P2P network of computers rather than a single computer, eliminating central points of failure.',
        icon: Network,
      },
      {
        title: 'Tokenization',
        description: 'Create digital tokens that represent real-world assets, enabling fractional ownership and increasing liquidity.',
        icon: Server,
      },
    ]
  },
  {
    category: 'UI/UX Design',
    description: 'Elevate your digital presence with intuitive, beautiful interfaces that enhance user experience and drive engagement.',
    icon: Palette,
    services: [
      {
        title: 'User Interface Design',
        description: 'Visually stunning interfaces that reflect your brand and delight your users.',
        icon: Layers,
      },
      {
        title: 'User Experience Design',
        description: 'Thoughtful experiences that guide users through your product, making complex tasks feel simple.',
        icon: LineChart,
      },
      {
        title: 'Interaction Design',
        description: 'Engaging animations and interactions that make your product feel responsive and alive.',
        icon: Smartphone,
      },
    ]
  },
  {
    category: 'Cloud Solutions',
    description: 'Scalable, secure cloud infrastructure and migration services to optimize your business operations.',
    icon: Cloud,
    services: [
      {
        title: 'Cloud Migration',
        description: 'Seamlessly transition your existing infrastructure and applications to the cloud with minimal disruption.',
        icon: Server,
      },
      {
        title: 'Infrastructure as a Service',
        description: 'Flexible, scalable cloud infrastructure that grows with your business needs.',
        icon: Network,
      },
      {
        title: 'DevOps Automation',
        description: 'Streamline your development and operations with automated CI/CD pipelines and infrastructure as code.',
        icon: Code,
      },
      {
        title: 'Cloud Security',
        description: 'Protect your cloud-based assets with comprehensive security protocols and monitoring.',
        icon: Shield,
      },
    ]
  },
  {
    category: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms.',
    icon: Smartphone,
    services: [
      {
        title: 'iOS Development',
        description: 'Native iOS applications that leverage the full capabilities of Apple\'s ecosystem.',
        icon: Layers,
      },
      {
        title: 'Android Development',
        description: 'Powerful Android applications optimized for the diverse range of Android devices.',
        icon: Cpu,
      },
      {
        title: 'Cross-Platform Development',
        description: 'Efficient development across multiple platforms using React Native, Flutter, or other frameworks.',
        icon: Code,
      },
      {
        title: 'App Maintenance',
        description: 'Ongoing support and updates to keep your app running smoothly and securely.',
        icon: Shield,
      },
    ]
  },
  {
    category: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics solutions.',
    icon: LineChart,
    services: [
      {
        title: 'Business Intelligence',
        description: 'Comprehensive dashboards and reporting tools that provide clear visibility into your business metrics.',
        icon: Layers,
      },
      {
        title: 'Big Data Processing',
        description: 'Scalable solutions for managing and analyzing large volumes of structured and unstructured data.',
        icon: Database,
      },
      {
        title: 'Predictive Analytics',
        description: 'Use historical data to forecast trends and anticipate future business needs.',
        icon: LineChart,
      },
      {
        title: 'Data Visualization',
        description: 'Transform complex data into clear, actionable visualizations that drive business decisions.',
        icon: Palette,
      },
    ]
  },
  {
    category: '.NET Development',
    description: 'Build robust, scalable enterprise applications with our expert .NET development services.',
    icon: Code,
    services: [
      {
        title: 'Web Applications',
        description: 'Powerful, secure web applications using ASP.NET Core and related technologies.',
        icon: Server,
      },
      {
        title: 'Desktop Applications',
        description: 'Robust desktop solutions using WPF, Windows Forms, or .NET MAUI.',
        icon: Layers,
      },
      {
        title: 'Microservices',
        description: 'Scalable, maintainable microservice architectures built on .NET Core.',
        icon: Network,
      },
      {
        title: 'API Development',
        description: 'Well-designed RESTful or GraphQL APIs that enable seamless integration with other systems.',
        icon: Code,
      },
    ]
  },
  {
    category: 'Game Development',
    description: 'Create engaging, immersive gaming experiences across multiple platforms with our expert game development services.',
    icon: Gamepad,
    services: [
      {
        title: '2D/3D Game Design',
        description: 'Custom game design with captivating visuals, storylines, and gameplay mechanics tailored to your audience.',
        icon: Layers,
      },
      {
        title: 'Unity Development',
        description: 'Cross-platform game development using Unity, enabling deployment across mobile, desktop, console, and web.',
        icon: Code,
      },
      {
        title: 'Game Backend Systems',
        description: 'Robust, scalable backend infrastructure for multiplayer games, leaderboards, and user accounts.',
        icon: Server,
      },
      {
        title: 'Game Optimization',
        description: 'Performance optimization to ensure smooth gameplay across various devices and platforms.',
        icon: Cpu,
      },
    ]
  },
  {
    category: 'Metaverse Development',
    description: 'Build immersive digital worlds and experiences that connect users in virtual spaces with cutting-edge metaverse technologies.',
    icon: Globe,
    services: [
      {
        title: 'Virtual Worlds',
        description: 'Design and development of interactive 3D virtual environments for social interaction, commerce, and entertainment.',
        icon: Rocket,
      },
      {
        title: 'Digital Twin Creation',
        description: 'Virtual replicas of physical spaces and objects with real-time data synchronization for training and simulation.',
        icon: Layers,
      },
      {
        title: 'NFT Marketplaces',
        description: 'Custom marketplaces for trading digital assets and virtual real estate within metaverse environments.',
        icon: Database,
      },
      {
        title: 'Cross-Platform Integration',
        description: 'Seamless integration between different metaverse platforms, enabling unified virtual experiences.',
        icon: Network,
      },
    ]
  },
  {
    category: 'Web Development',
    description: 'Create powerful, responsive web applications with modern frameworks and technologies tailored to your business needs.',
    icon: MonitorSmartphone,
    services: [
      {
        title: 'Frontend Development',
        description: 'Responsive, interactive user interfaces built with modern frameworks like React, Vue, and Angular.',
        icon: Palette,
      },
      {
        title: 'Backend Development',
        description: 'Robust server-side architecture using Node.js, Python, Java, or PHP with scalable database solutions.',
        icon: Server,
      },
      {
        title: 'E-commerce Solutions',
        description: 'Custom online shopping experiences with secure payment processing and inventory management systems.',
        icon: LineChart,
      },
      {
        title: 'Progressive Web Apps',
        description: 'Web applications that offer native app-like experiences with offline capabilities and fast performance.',
        icon: Smartphone,
      },
    ]
  },
  {
    category: 'IoT Development',
    description: 'Connect the physical and digital worlds with custom Internet of Things solutions for smart homes, cities, and industries.',
    icon: WifiIcon,
    services: [
      {
        title: 'Smart Device Integration',
        description: 'Connect and control physical devices through custom applications and centralized management systems.',
        icon: Smartphone,
      },
      {
        title: 'IoT Data Analytics',
        description: 'Collect, process, and analyze data from IoT devices to derive actionable business insights.',
        icon: LineChart,
      },
      {
        title: 'Industrial IoT Solutions',
        description: 'Optimize manufacturing and industrial processes with connected sensors and automated monitoring systems.',
        icon: Cpu,
      },
      {
        title: 'IoT Security',
        description: 'Implement robust security protocols to protect IoT ecosystems from vulnerabilities and threats.',
        icon: Shield,
      },
    ]
  },
];
