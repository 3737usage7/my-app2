'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { MessageCircle, Globe, Database, Atom, ArrowUpRight, Star, Check, X } from "lucide-react"
import { useState } from "react"
import { text } from "stream/consumers"

// Add this interface above your Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  projecttext: string;
  tags: string[];
  images: string[];
}

// Modal component
const Modal = ({ isOpen, onClose, title, projecttext, tags, images }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-gray-600">{projecttext}</div>
          <div className="space-y-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this interface for ContactModal props
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Update the ContactModal component with type annotations
const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-1xl font-bold">联系方式</h2>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center">
            <Image src="/images/WX.png" alt="WeChat" width={24} height={24} className="mr-2" />
            <span>cmy15181912324</span>
          </div>
          <div className="flex items-center">
            <Image src="/images/电话.png" alt="Phone" width={24} height={24} className="mr-2" />
            <span>15181912324</span>
          </div>
          <div className="flex items-center">
            <Image src="/images/EMAIL.png" alt="Email" width={24} height={24} className="mr-2" />
            <span>15181912324@163.com</span>
          </div>
          <div className="flex items-center">
            <Image src="/images/QQ.png" alt="QQ" width={24} height={24} className="mr-2" />
            <span>2994150286</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this interface to define the Project type
interface Project {
  title: string;
  image: string;
  projecttext: string;
  tags: string[];
  images: string[];
}

export function PersonalWebsite() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const projects = [
    {
      title: "智慧校园管理系统（2023.11-2024.8) ",
      image: "/images/智慧校园.png?height=300&width=500",
      projecttext:"介绍：对传统校园进行数字化、网络化、智能化的全面升级，以构建一个集教学、科研、管理、服务于一体的智能化生态系统的管理平台。内容：主要负责项目的功能方案制定、实地调研、需求分析、原型设计、项目开发管理、兼顾UI及售前职能。成绩：优化了原设计方案的操作流程设计，以及UI设计，客户评价有效提升。",
      tags: ["OA", "HRM", "进销存"],
      images: [
        "/images/智慧校园功能设计集1.1.png?height=300&width=500",
      ],
      
    },
    {
      title: "书唐千校可视系统（2024.9-2024.10)",
      image: "/images/千校可视-展示图.png?height=300&width=500",
      projecttext:"介绍：运用数字孪生、物联网等核心技术，构建一个与现实校园地貌环境一致、信息内容高度融合的数字孪生虚	拟校园，并且跟高校的招生信息进行结合展示的云端平台。内容：负责产品零代码开发、非格式化转格式化数据录入的方案设计，竞品分析，需求分析等工作。",
      tags: ["CMS", "BtoC"],
      images: [
        "/images/千校可视-展示图.png?height=300&width=500",
        "/images/千校可视-1.png?height=300&width=500",
      ],
      
    },
    {
      title: "物资采购及物资管理系统（2024.1-2024.8) ",
      image: "/images/学校三包及营养改善项目产品2(1).png?height=300&width=500",
      projecttext:"介绍：一种专为局校设计，旨在加强教育“三包”政策实施过程中的资金、采购、食品营养与安全以及供应商与物资管理的软件系统。内容：负责项目的需求调研、需求分析、方案制定、功能定义、原型设计、PRD的撰写、项目开发管理、系统测试、系统落地实施试用、局校现场培训、现阶段正处于运维运营阶段。成绩：2个月内完成MVP版本，6个月内正式上线西藏昌都市试用运行，并且与当地干系人打好关系。",
      tags: ["SRM", "ERP", "BtoG"],
      images: [
        "/images/学校三包及营养改善项目产品2.png?height=300&width=500",
      ],
    },
    {
      title: "西藏米优科技官网（2023.12-2024.1) ",
      image: "/images/首页(1)(1).png?height=300&width=500",
      projecttext:"介绍：企业在web及微信公众号上建立的官方信息展示和交互平台。内容：快速熟悉公司业务，编辑文本内容，使用AXure进行高保真UI/UX设计，SEO优化，落地开发。成绩：提升了公司的企业形象，提高了企业官网的被搜索的流量80%",
      tags: ["CMS", "UI/UX"],
      images: [
        "/images/首页(1).png?height=300&width=500",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#ECF0F3] relative">
      {/* ... (previous code remains unchanged) ... */}
<div className="min-h-screen bg-[#ECF0F3] relative">
      <header className="fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="bg-gradient-to-b from-[#ECF0F3] to-[#FDFDFD] rounded-[10px] shadow-lg max-w-6xl mx-auto">
            <div className="flex items-center justify-between px-6 py-3">
              <div className="flex items-center">
                <Image
                  src="/images/logo1(1).png"
                  alt="FINGERTIP Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-1xl font-bold text-black" style={{ fontFamily: 'Gravedigger, serif' }}>FINGERTIP</span>
              </div>
              <ul className="flex space-x-6">
                {[
                  { label: "HOME", href: "#home" },
                  { label: "教育经历", href: "#education" },
                  { label: "职业技能", href: "#skills" },
                  { label: "工作经历", href: "#work-experience" },
                  { label: "项目经验", href: "#projects" },
                  { label: "校园经历", href: "#campus-experience" },
                  { label: "行业圈子", href: "#Industry-circles" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className="bg-white text-black hover:bg-gray-100 border border-gray-300 flex items-center rounded-full"
                onClick={openContactModal}
              >
                <MessageCircle className="w-4 h-4 mr-2 text-black" />
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main id="home" className="max-w-7xl mx-auto px-8 pt-32 flex flex-col justify-center">
        <div  className="flex justify-between items-center mb-16">
          <div className="w-1/2 pr-8 mb-8">
            <h1 className="text-6xl font-bold mb-4">
              I <span className="text-yellow-400">👋</span> am 陈茂源
            </h1>
            <h2 className="text-4xl font-semibold text-blue-600 mb-4" style={{ fontFamily: 'Sanji, serif' }}>数据型/功能型 产品经理</h2>
            <p className="text-gray-600 mb-6 text-lg">
              专注于产品设计与用户体验优化，擅长运用人类行为学与
              游戏化策略提升产品吸引力，深入理解用户心理与行为模
              式和同理心以确保产品能够真正满足他(们)的需求与期望。
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] hover:bg-blue-700 text-white px-6 py-3 text-lg" onClick={openContactModal}>
                Hire Me Now
                <span className="ml-2">➜</span>
              </Button>
              {[
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WX-pVG7pOxaqnPdLXQ7swrywhk5OSBQ0a.png", alt: "WeChat" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QQ-dE3xwyLZ61CSVFeBm9B6WxVVxr29J6.png", alt: "QQ" },
                { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EMAIL-mQzcIS1goO8L0bb91XnEiZZZevpK7h.png", alt: "Email" },
              ].map((icon, index) => (
                <button key={index} className="w-12 h-12 bg-[#F5F7F9] rounded-full flex items-center justify-center">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </button>
              ))}
            </div>
          </div>
          <div className="w-1/2 relative h-[600px]">
            <div className="absolute top-4 right-8 w-[80%] h-[95%] bg-blue-500 rounded-3xl"></div>
            <div className="absolute top-4 right-8 w-8 h-8 bg-teal-400 transform rotate-45"></div>
            <Image
              src="/images/头像(1).png?height=400&width=400"
              alt="Profile Picture"
              width={500}
              height={500}
              className="absolute top-0 right-8 z-0 rounded-2xl"
            />
          </div>
        </div>

        {/* Education Section */}
        <section id="education" className="bg-[#ECF0F3] py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex justify-between">
                  <div className="flex-1 text-center">
                    <h2 className="text-8xl font-bold text-blue-600">1+</h2>
                    <p className="text-gray-600 mt-2">工作年限</p>
                  </div>
                  <div className="flex-1 text-center">
                    <h2 className="text-8xl font-bold text-blue-600">17+</h2>
                    <p className="text-gray-600 mt-2">工作累计月数</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/touxiang1.webp?height=40&width=40"
                      alt={`Client ${i + 1}`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ))}
                  <span className="text-gray-600 ml-2">20+ Outstanding alumni</span>
                </div>
                <Image
                  src="/images/CUIT.jpg"
                  alt="University Building"
                  width={550}
                  height={370}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div>
                <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">成都信息工程大学</h3>
                        <p className="text-gray-600 mt-2">Chengdu University of Information Technology</p>
                      </div>
                      <Image
                        src="/images/CUITLOGO.jpeg?height=80&width=80"
                        alt="University Logo"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-gray-700">数据科学与大数据技术</span>
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-gray-700">本科</span>
                      </div>
                    </div>
                    <h4 className="text-4xl font-bold text-gray-800 mb-8">2020-2024</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { icon: Globe, title: "Web开发技术", description: "Web开发技术融合前端与后端技术，实现互联网应用程序的高效开发。" },
                        { icon: Database, title: "大数据开发", description: "通过ETL、数据仓库等技术，处理海量数据，以及高效的BI工具以挖掘数据的价值并支持决策。" },
                        { icon: Atom, title: "数据科学", description: "从结构化与非结构化数据中提取洞察，以优化决策和创新产品服务。" },
                      ].map((skill, index) => (
                        <div key={index} className="text-center">
                          <skill.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                          <h5 className="font-semibold text-lg mb-2 text-gray-800">{skill.title}</h5>
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-8 w-full bg-gradient-to-r from-[#002DB0] to-[#3082FF] text-white text-lg py-3">
                      <a href="https://rjgcxy.cuit.edu.cn/info/1017/2422.htm">
                      Read More
                      <span className="ml-2">➜</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-600 transform rotate-45"></div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-blue-600 transform rotate-45"></div>
        </section>

        {/* Professional Skills Section */}
        <section id="skills" className="bg-[#ECF0F3] py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#40E0D0] mb-2">职业技能</h2>
            <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">See my expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {[
                { name: "Axure PR", description: "本地原型设计工具", icon: "/images/Axure.png?height=40&width=40" },
                { name: "墨刀", description: "协同原型设计", icon: "/images/墨刀.png?height=40&width=40" },
                { name: "VS Code", description: "Web全栈开发", icon: "/images/vscode.png?height=40&width=40" },
                { name: "Python", description: "数据科学", icon: "/images/Python.png?height=40&width=40" },
                { name: "Mysql", description: "数据库技术", icon: "/images/MySQL.png?height=40&width=40" },
                { name: "AIGC", description: "AI生成文本、图片、程序、工具", icon: "/images/aigc.png?height=40&width=40" },
              ].map((skill, index) => (
                <Card key={index} className="bg-[#F6F8F9] shadow-[0_0_30px_rgba(170,170,170,0.5)] rounded-3xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
                    <p className="text-sm text-gray-600 text-center">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="bg-[#E0F8F7] py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#40E0D0] mb-2">工作经历</h2>
            <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">
              Previously worked in <span className="text-blue-600">four</span> internet companies
            </h3>
            <div className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
              <div className="flex flex-wrap justify-center items-center gap-8 relative z-10">
              {[  { 
                    name: "SHEER夏尔", 
                    logo: "/images/SHEER.png?height=60&width=120",
                    url: "http://www.sheeren.com/" // Replace with actual URLs
                  },
                  { 
                    name: "Dowell 德威", 
                    logo: "/images/图片1.png?height=60&width=120",
                    url: "http://www.dowellsoft.com/"
                  },
                  { 
                    name: "当下", 
                    logo: "/images/当下.jpg?height=60&width=120",
                    url: "https://www.showtimer.cn/"
                  },
                  { 
                    name: "缘定指尖 FINGERTIP", 
                    logo: "/images/logo1.png?height=60&width=120",
                    url: "https://example.com/fingertip"
                  },
                ].map((company, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <a 
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-105"
                      aria-label={`Visit ${company.name} website`}
                    >
                      <Card className="bg-[#F6F8F9] shadow-[0_0_30px_rgba(170,170,170,0.5)] rounded-3xl overflow-hidden h-40 rounded-full cursor-pointer">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E0F8F7] rounded-full transform translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>
        </section>
      {/* Project Experience Section */}
      <section id="projects" className="bg-[#ECF0F3] py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-[#40E0D0] mb-2">项目经验</h2>
          <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">The projects I'm involved in</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-[#F6F8F9] shadow-[0_0_25px_rgba(215,215,215,0.35)]"
              >
                <CardContent className="p-6">
                  <div className="aspect-video mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <Button 
                      className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full"
                      onClick={() => openModal(project)}
                    >
                      Read More
                      <span className="ml-2">➜</span>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ... (rest of the code remains unchanged) ... */}
<section id="campus-experience" className="bg-[#ECF0F3] py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#40E0D0] mb-2">校园经历</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-3xl text-center font-bold mb-6">project</h3>
                <div className="space-y-8">
                  <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">新型地铁人防门安全状态智能监测系统</h4>
                        <span className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] text-white px-3 py-1 rounded-full text-sm">2021.6-2023.3</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">数据助理</p>
                      <p className="text-sm text-gray-600 mb-2">介绍：一种集软件信息技术、物联网技术和智能分析技术于一体的综合性系统，旨在实现对地铁站内人防门安全状态的智能监测、预警和风险控制。</p>
                      <p className="text-sm text-gray-600 mb-2">内容：负责项目方案的制定，项目售前与实施工作。包括市场中竞品的调研、市场行业发展分析、确定未来发展目标、和客户以及开发人员共同参与技术架构与分析、现场测试与维护、参与期刊产品在线发布。18个月。</p>
                      <p className="text-sm text-gray-600">成果：申请4专利，西安地铁五号线人防门"智能战神"省级大创比赛省级银奖和金奖，2023届优秀获得省级团队奖。</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">科创课程公共服务平台的设计与运营管理</h4>
                        <span className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] text-white px-3 py-1 rounded-full text-sm">2021.6-至今</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">总负责人</p>
                      <p className="text-sm text-gray-600 mb-2">介绍：一款针对中小学生进行科创编程教学的在线公共服务平台；主要针对课题教学。</p>
                      <p className="text-sm text-gray-600 mb-2">内容：负责平台的架构设计以及运营管理的管理，包括：项目管理、项目的具体实施、包括4个教师、7个助教的管理与培训、人员调配与储备；5个课程的设计和运行；招生宣传；电脑基础教程、图形化编程、图像化编程。</p>
                      <p className="text-sm text-gray-600">成果：目前在天府新区锦江小学，南湖小学，新华路小学进行项目合作与运行。</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-3xl text-center font-bold mb-6">organization</h3>
                <div className="space-y-8">
                  <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">机器视觉与智能计算国际联合实验室</h4>
                        <span className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] text-white px-3 py-1 rounded-full text-sm">2021.9-2024.5</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">数据助理</p>
                      <p className="text-sm text-gray-600 mb-2">介绍：主要研究机器人、软件开发、编程机器人的研究实验室。</p>
                      <p className="text-sm text-gray-600">内容：主要负责协助研究课题的调研、编程机器人的研究与开发项目设计与实现、KI编程机器人的需求分析和设计、大学生创新创业的课题项目开发和实现。科研项目的调研与分析、项目的开发与实现、科研论文的撰写。</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">自主创业-网站开发团队</h4>
                        <span className="bg-gradient-to-r from-[#002DB0] to-[#3082FF] text-white px-3 py-1 rounded-full text-sm">2022.4-2023.6</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">总负责人</p>
                      <p className="text-sm text-gray-600 mb-2">介绍：组建包含技术经理CTO、产品、UI、运营、前端、后端开发团队，实现开发一款针对大学生职业规划学习与同行交流的社区平台。</p>
                      <p className="text-sm text-gray-600">内容：担任团队PM，负责项目的需求分析、产品设计、团队管理，以及后台的开发、后端开发、运营、UI等十几个成员的培养，带领成员参加各种大学生创新创业大赛，并且获得奖项。</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Circle Section */}
        <section id="Industry-circles" className="bg-[#ECF0F3] py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-[#40E0D0] mb-2">行业圈子</h2>
            <h3 className="text-center text-4xl font-bold text-gray-800 mb-12">行业技术关系伙伴</h3>
            <div className="flex justify-center">
              <Card className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Image
                      src="/images/zjh.jpg?height=120&width=120"
                      alt="Profile Picture"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="text-2xl font-bold mr-2">朱建豪</h4>
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-sm text-gray-600 mr-2">recommend</span>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        擅长Python数据分析与Web开发、精通大数据框架如Hadoop、Spark，并具备机器学习及深度学习算法设计与实现能力。尤其在Pytorch框架下的大模型算法与AIGC应用上有深厚造诣。负责过从零到一构建AI训练与生产环境，优化业务效率，并拥有卓越的大数据运维能力。
                      </p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h5 className="text-xl font-semibold mb-1">AIGC算法工程师</h5>
                        <p className="text-sm text-gray-600">大模型/AIGC/大数据</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-blue-500 to-teal-400 py-8">  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
    <div className="flex flex-col items-center justify-center">  
      <div className="w-full h-10 md:w-auto">  
        <Image  
          src="/images/logo1.png?height=50&width=150"  
          alt="FINGERTIP Logo"  
          width={150}  
          height={50}  
          className="mb-4 md:mb-0 mx-auto"  
        />  
      </div>  
      <div className="w-full md:w-auto">  
        <nav>  
          <ul className="flex flex-wrap justify-center space-x-6">  
            {["HOME", "教育经历", "职业技能", "工作经历", "项目经验", "校园经历", "证书认证"].map((item) => (  
              <li key={item}>  
                <a href="#" className="text-white hover:text-gray-200">  
                  {item}  
                </a>  
              </li>  
            ))}  
          </ul>  
        </nav>  
      </div>  
    </div>  
  </div>  
</footer>
      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-600 transform rotate-45"></div>
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-600 transform rotate-45"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-blue-600 transform rotate-45"></div>
    </div>
      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          tags={selectedProject.tags}
          images={selectedProject.images}
          projecttext={selectedProject.projecttext}
        />
      )}
      <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
    </div>
  )
}