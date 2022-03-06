import React from 'react';
import './PintrCssApp.css';
import './PintrCssTheme.css';
import logo from './logoPintr.png';

function Card(){
    
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <a className="navbar-brand font-weight-bolder mr-3" href="index.html"><img src={logo}/></a>
    <button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarsDefault">
    	<ul className="navbar-nav mr-auto align-items-center">
    		<form className="bd-search hidden-sm-down">
    			<input type="text" className="form-control bg-graylight border-0 font-weight-bold" id="search-input" placeholder="Search..." autoComplete="off"/>
    			<div className="dropdown-menu bd-search-results" id="search-results">
    			</div>
    		</form>
    	</ul>
    	<ul className="navbar-nav ml-auto align-items-center">
    		<li className="nav-item">
    		<a className="nav-link active" href="index.html">Home</a>
    		</li>
    		<li className="nav-item">
    		<a className="nav-link" href="post.html">Post</a>
    		</li>
    		<li className="nav-item">
    		<a className="nav-link" href="author.html"><img className="rounded-circle mr-2" src="assets/img/av.png" width="30"/><span className="align-middle">Author</span></a>
    		</li>
    		<li className="nav-item dropdown">
    		<a className="nav-link" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    		<svg style={{marginTop:"10px"}} className="_3DJPT" version="1.1" viewBox="0 0 32 32" width="21" height="21" aria-hidden="false" data-reactid="71"><path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" data-reactid="22"></path></svg>
    		</a>
    		<div className="dropdown-menu dropdown-menu-right shadow-lg" aria-labelledby="dropdown02">
    			<h4 className="dropdown-header display-4">Download Pintereso<br/> HTML Bootstrap Template</h4>
    			<div className="dropdown-divider">
    			</div>
    			<span className="dropdown-item"><a href="https://github.com/wowthemesnet/template-pintereso-bootstrap-html/archive/master.zip" className="btn btn-primary d-block"><i className="fa fa-download"></i> Download</a></span>
    		</div>
    		</li>
    	</ul>
    </div>
    </nav>    
    <main role="main">
        
    
    <section className="mt-4 mb-5">
    <div className="container mb-4">
    	<h1 className="font-weight-bold title">Explore New Stuff</h1>
    	<div className="row">
    		<nav className="navbar navbar-expand-lg navbar-light bg-white pl-2 pr-2">
    		<button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExplore" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
    		<span className="navbar-toggler-icon"></span>
    		</button>
    		<div className="collapse navbar-collapse" id="navbarsExplore">
    			<ul className="navbar-nav">
    				<li className="nav-item">
    				<a className="nav-link" href="https://in.pinterest.com/search/pins/?q=lifestyle&rs=typed&term_meta[]=lifestyle%7Ctyped">Lifestyle</a>
    				</li>
    				<li className="nav-item">
    				<a className="nav-link" href="#">Food</a>
    				</li>
    				<li className="nav-item">
    				<a className="nav-link" href="#">Home</a>
    				</li>
    				<li className="nav-item">
    				<a className="nav-link" href="#">Travel</a>
    				</li>
    				<li className="nav-item dropdown">
    				<a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
    				<div className="dropdown-menu shadow-lg" aria-labelledby="dropdown01">
    					<a className="dropdown-item" href="#">Astronomy</a>
    					<a className="dropdown-item" href="#">Nature</a>
    					<a className="dropdown-item" href="#">Cooking</a>
    					<a className="dropdown-item" href="#">Fashion</a>
    					<a className="dropdown-item" href="#">Wellness</a>
    					<a className="dropdown-item" href="#">Dieting</a>
    				</div>
    				</li>
    			</ul>
    		</div>
    		</nav>
    	</div>
    </div>
    <div className="container-fluid">
    	<div className="row">
    		<div className="card-columns">
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d284a2efbca5f89528546307f7e7b87&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1519996521430-02b798c1d881?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79f770fc1a5d8ff9b0eb033d0f09e15d&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1505210512658-3ae58ae08744?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef2e23adda7b89a804cf232f57e3ca3&auto=format&fit=crop&w=333&q=80" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-0.3.5&s=06371203b2e3ad3e241c45f4e149a1b3&auto=format&fit=crop&w=334&q=80" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c88b5f311958f841525fdb01ab3b5deb&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1483190656465-2c49e54d29f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c4d831daffc28f6ce144ae9e44072e2&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1501813531019-338a4182efb0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad934c7483b928cae6b0b9cde5ae3445&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-0.3.5&s=6958cfb3469de1e681bf17587bed53be&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1513028179155-324cfec2566c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32ce1df4016dadc177d6fce1b2df2429&auto=format&fit=crop&w=350&q=80" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1516601255109-506725109807?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce4f3db9818f60686e8e9b62d4920ce5&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1509233631037-deb7efd36207?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75a5d784cdfc8f5ced8a6fe26c6d921e&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-0.3.5&s=c0043ea5aa03f62a294636f93725dd6e&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=976b0db5c3c2b9932bb20e72f98f9b61&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1502550900787-e956c314a221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e90f191de3a03c2002ac82c009490e07&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e3cd6ce6496c9c05cbf1b6cda8be0f9&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1509885903707-b68568db61ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f11503655b51165836c2dcefa51a040&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5bb16fa7eaed1a1ed47614488f7588d&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4891b98f4554cc55eab1e4a923cbdb1&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1506706435692-290e0c5b4505?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb464bb1ceea5155bc079c4f50bc36a&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    			<div className="card card-pin">
    				<img className="card-img" src="https://images.unsplash.com/photo-1512355144108-e94a235b10af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c622d56d975113a08c71c912618b5f83&auto=format&fit=crop&w=500&q=60" alt="Card image"/>
    				<div className="overlay">
    					<h2 className="card-title title">Cool Title</h2>
    					<div className="more">
    						<a href="post.html">
    						<i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    </section>            
    </main>
</> 
);
}

export default Card;