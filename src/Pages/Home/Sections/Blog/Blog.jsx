import "./Blog.css";

import data from "../../../../Data/Posts.json";
import imgFirst from "../../../../Assets/Blog/BlogFirst.svg";
import img1 from "../../../../Assets/Blog/BlogImg1.svg";
import img2 from "../../../../Assets/Blog/BlogImg2.svg";
import img3 from "../../../../Assets/Blog/BlogImg3.svg";

import { openInNewTab } from "../../../../Helpers/openNewTab";

function Blog() {
	return (
		<div className='blog' id='blog'>
			{data.map((post, index) =>
				index === 0 ? (
					<div className='firstPostContainer' key={index}>
						<div className='firstPost'>
							<img
								className='firstPost--image'
								src={imgFirst}
								alt='postImage'
							/>
							<div className='firstPost--content'>
								<div className='firstPost--content--header'>
									{post.date} | Publicado por {post.author}
								</div>
								<div className='firstPost--content--title'>
									{post.title}
								</div>
								<div className='firstPost--content--text'>
									{post.content}
								</div>
							</div>
							<div
								className='firstPost--readMore'
								onClick={() => openInNewTab(`${post.url}`)}
							>
								Leer más
							</div>
						</div>
					</div>
				) : (
					<div className='post' key={index}>
						{index === 1 ? (
							<img
								className='post--image'
								src={img1}
								alt='postImage'
							/>
						) : index === 2 ? (
							<img
								className='post--image'
								src={img2}
								alt='postImage'
							/>
						) : (
							<img
								className='post--image'
								src={img3}
								alt='postImage'
							/>
						)}
						<div className='post--content'>
							<div className='post--content--header'>
								{post.date} | Publicado por {post.author}
							</div>
							<div className='post--content--text'>
								{post.content}
							</div>
							<div
								className='post--readMore'
								onClick={() => openInNewTab(`${post.url}`)}
							>
								Leer más
							</div>
						</div>
					</div>
				)
			)}

			<button className='buttonMore'>Más artículos</button>
		</div>
	);
}

export default Blog;
