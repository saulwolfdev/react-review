import React, { Component } from 'react';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts:[]
		  };
	}
	async componentDidMount(){
		const res=await fetch("https://jsonplaceholder.typicode.com/posts")
		const data=await res.json()
		console.log(data)
		this.setState({posts:data})
	}
	render() {
		return(
			<div>
				{
					this.state.posts.map(post=>{
						return(
							<ul key={post.id}>
								<li>
									<h4>{post.title}</h4>
							    	<p>{post.body}</p>
								</li>
							</ul>
						)
					})
				}
			</div>
		);
	}
}

export default Post;