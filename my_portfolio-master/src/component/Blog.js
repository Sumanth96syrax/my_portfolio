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
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
        "tag" : "front-end",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
      }, {
        "id": 2,
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1080335/retina_1708x683_cover-0325-LearnCandC__Languages_Dan_Newsletter-743100f051077054fa1cc613ff4523a2.png",
        "tag" : "back-end",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
      }, {
        "id": 3,
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Introduction-To-C.jpg",
        "tag" : "ui-ux",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
      }, {
        "id": 4,
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
        "tag" : "others",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
      }, {
        "id": 5,
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/tree_traversal.jpg",
        "tag" : "front-end",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
      },{
        "id": 6,
        "title": "Packing of Left Finger using Packing Material",
        "image": "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Introduction-To-C.jpg",
        "tag" : "back-end",
        "description": "Vijayadashami is observed for different reasons and celebrated differently, majorly in the countries of India and Nepal.[9][1][10][6] In the southern, eastern, northeastern, and some northern states of India, Vijayadashami marks the end of Durga Puja, remembering goddess Durga's victory over the buffalo demon Mahishasura to restore and protect dharma.[6][11][12] In the northern, central and western states, the festival is synonymously called Dasara (also spelled Dussehra, Dashahara). In these regions, it marks the end of Ramlila and remembers god Rama's victory over Ravana. Alternatively, it marks a reverence for one of the aspects of goddess Devi, such as Durga or Saraswati.[1][7][8] Vijayadashami celebrations include processions to a river or ocean front that involve carrying clay statues of Durga,[13] Lakshmi, Saraswati, Ganesha and Kartikeya, accompanied by music and chants, after which the images are immersed in the water for dissolution and farewell. Elsewhere, on Dasara, towering effigies of Ravana, symbolising evil, are burnt with fireworks, marking evil's destruction. The festival also starts the preparations for Diwali, the important festival of lights, which is celebrated twenty days after Vijayadashami."
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