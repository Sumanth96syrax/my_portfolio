import React from 'react'
import { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import { Link , useNavigate} from "react-router-dom";
import "./blog.css"
import { ListGroupItem } from 'react-bootstrap';
function Blog() {
    const navigate = useNavigate();
    const blogList = [{
        "id": 1,
        "title": "Front-End Development: Building Engaging User Experiences",
        "image": "https://www.mindstask.com/en/wp-content/uploads/2022/03/frontendSmallBanner.jpg",
        "tag" : "Front-End",
        "description": "Front-end development is the art of creating visually appealing and interactive web pages that enhance user experience. It involves using technologies like HTML, CSS, and JavaScript to structure, style, and add interactivity to web applications.Modern front-end frameworks like ReactJS, Angular, and Vue.js have revolutionized development by making it more efficient and scalable. Responsive design, accessibility, and performance optimization are key aspects of front-end development, ensuring a seamless experience across devices. Mastering front-end development requires a blend of creativity and technical skills, making it an exciting field for developers who love crafting intuitive and engaging interfaces."
      }, {
        "id": 2,
        "title": "Backend Development: The Power Behind the Scenes",
        "image": "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg?t=st=1742550252~exp=1742553852~hmac=d6b424045e795994aab471102d38afe05245727477c28257c3e97b4793993f85&w=1480",
        "tag" : "Back-End",
        "description": "Backend development is the backbone of any web application, handling the logic, database interactions, and server-side operations that power the front-end. It ensures that data is processed, stored securely, and delivered efficiently.Technologies like Node.js, Python (Django/Flask), Java (Spring Boot), and PHP (Laravel) are widely used for backend development. Databases such as MySQL, PostgreSQL, and MongoDB help manage and store data effectively.Key aspects of backend development include API creation, authentication, security, scalability, and performance optimization. A well-structured backend ensures smooth communication between the server, database, and front-end, making applications dynamic and functional.Understanding backend development allows developers to create full-stack applications and build powerful, data-driven solutions."
      }, {
        "id": 3,
        "title": "UI/UX Design: Crafting Seamless and Engaging User Experiences",
        "image": "https://wallpapercave.com/wp/wp9775570.jpg",
        "tag" : "UI-UX",
        "description": "UI/UX design plays a crucial role in shaping how users interact with digital products. User Interface (UI) focuses on the visual elements—buttons, typography, colors, and layouts—while User Experience (UX) ensures usability, accessibility, and a seamless flow across the application. Key principles of UI/UX design include simplicity, consistency, user-centric design, and responsiveness. Tools like Figma, Adobe XD, Sketch, and Balsamiq help designers prototype and bring ideas to life.A great UI/UX design improves user engagement, boosts conversions, and enhances overall satisfaction. By understanding user behavior and applying design thinking, developers and designers can create intuitive and enjoyable experiences."
      }, {
        "id": 4,
        "title": "Artificial Intelligence: Revolutionizing the Future of Technology",
        "image": "https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?t=st=1742550411~exp=1742554011~hmac=708e79e6590592345e63fa8c5940bb38c4490c1f3bb14da79eab1597833fa965&w=1380",
        "tag" : "Aritficial Intelligence",
        "description": "Artificial Intelligence (AI) is transforming industries by enabling machines to learn, reason, and make decisions like humans. From chatbots and virtual assistants to self-driving cars and predictive analytics, AI is reshaping the way we interact with technology. Key AI technologies include Machine Learning (ML), Deep Learning, Natural Language Processing (NLP), and Computer Vision. Frameworks like TensorFlow, PyTorch, and scikit-learn help developers build AI-powered applications. AI is widely used in healthcare, finance, e-commerce, cybersecurity, and automation, improving efficiency and decision-making. As AI continues to evolve, ethical concerns like bias, transparency, and privacy remain crucial topics of discussion. The future of AI promises even more innovations, making it one of the most exciting and impactful fields in technology today."
      }, {
        "id": 5,
        "title": "Machine Learning: The Science of Teaching Machines to Think",
        "image": "https://ik.imagekit.io/edtechdigit/usdsi/content/images/articles/unlock-the-power-of-machine-learning-in-data-science.jpg",
        "tag" : "Machine Learning",
        "description": "Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to learn from data and improve their performance without being explicitly programmed. It powers applications like spam filters, recommendation systems, fraud detection, and self-driving cars. ML is categorized into three main types: Supervised Learning: The model learns from labeled data (e.g., spam detection). Unsupervised Learning: The model identifies patterns in unlabeled data (e.g., customer segmentation). Reinforcement Learning: The model learns by interacting with an environment and receiving rewards (e.g., game-playing AI). Popular ML frameworks include TensorFlow, PyTorch, and Scikit-learn, which help in building and deploying intelligent models.As ML continues to evolve, it is transforming industries such as healthcare, finance, and automation, making it one of the most sought-after fields in technology today."
      },{
        "id": 6,
        "title": "Cybersecurity: Safeguarding the Digital World",
        "image": "https://img.freepik.com/free-vector/data-protection-laptop-landing-page_52683-38370.jpg?t=st=1742550882~exp=1742554482~hmac=2eefcdcb1da9351e83366bbfa613ed03901d8cdb5e4dc03c9289bcb2fd61715c&w=1380",
        "tag" : "Cyber Security",
        "description": "In today’s digital era, cybersecurity is essential to protect sensitive data from cyber threats like hacking, phishing, and malware. With the rise of online transactions and cloud storage, the risk of data breaches has increased, making strong security measures crucial. Hackers exploit vulnerabilities through deceptive emails, malicious links, and ransomware attacks, causing financial and data losses. To combat these threats, businesses and individuals use encryption, firewalls, and multi-factor authentication while staying updated with security patches. As cyber threats evolve, the demand for cybersecurity professionals grows. Staying informed and adopting best security practices is key to ensuring a safer online world."
      }];
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        let b = blogList.find((blog) => blog.id === parseInt(id));
        setBlog(b);
    }, []);
    return (
        <>
      <button className='blog-btn' onClick={() => navigate(-1)}>
        <span> &#8592;</span> <span>Go Back</span>
      </button>
      {
        <div className='blog-wrap'>
          <header>
            <h1 className='blog-title'>{blog.title}</h1>
          </header>
          <img className='blog-img' src={blog.image} alt='cover' />
          <div className='blog-subCategory'>
              {blog.tag}
            </div>
          <p className='blog-desc'>{blog.description}</p>
        </div>
      }
    </>
    )
}

export default Blog