import React, {Component} from 'react';
import PropTypes from 'prop-types';
import httpRequest from './XHR';

class Carousel3D extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			id: this.props.params.id,
			data: this.props.params.carousel3D.data
		};
	}

	componentWillMount (){
		this.get_props();
		console.log('componentWillMount');
	}

	get_props (){
		let params = this.props.params;
		if(params.carousel3D.data.length < 0){
			httpRequest("get", params.carousel3D.url, null, true, (result)=> {
				this.setState({
					data: result.data,
				});
			});
		}
	}

	render(){
		return (
			<div className="sdm-carousel3D" id = {this.state.id} >
            <ul>{
            	this.state.data.map((item, idx)=> {
            		let _className = idx === 0 ? 'sdm-carousel3d-active' : '';
            		return (
	            		<li className = { _className } data-idx = {idx} key = {idx}>
		                    <a href = { item.href } >
		                        <img src = {item.img} alt = {item.alt} />
		                    </a>
		                </li>
            		)
            	})              
            }</ul>
            <ol className = "sdm-carousel3D-btn">
                <li className="pull-left">
                    <a href="#" className = "btn btn-default btn-sm" data-toggle="prev" data-id = {'#'+this.state.id}>PREV</a>
                </li>
                <li className="pull-right">
                    <a href="#" className = "btn btn-default btn-sm" data-toggle="next" data-id = {'#'+this.state.id}>NEXT</a>
                </li>
            </ol>
        </div>

		);
	}	
}

Carousel3D.propTypes = {
	params: PropTypes.shape({
		id: PropTypes.string.isRequired,
		carousel3D: PropTypes.shape({
			data: PropTypes.arrayOf(PropTypes.shape({
				img: PropTypes.string.isRequired,
				alt: PropTypes.string.isRequired,
				href: PropTypes.string.isRequired
			})),
			url: PropTypes.string
		})
	})
}

Carousel3D.defaultProps = {
	params: {
		id: 'carousel3D_id',
		carousel3D: {
			data: [
				{
					img: require('../../img/aoa_1.jpg'),
					alt: 'img1',
					href: '#'
				},
				{
					img: require('../../img/aoa_2.jpg'),
					alt: 'img2',
					href: '#'
				},
				{
					img: require('../../img/aoa_3.jpg'),
					alt: 'img3',
					href: '#'
				},
				{
					img: require('../../img/aoa_4.jpg'),
					alt: 'img4',
					href: '#'
				},
				{
					img: require('../../img/aoa_5.jpg'),
					alt: 'img5',
					href: '#'
				},
				{
					img: require('../../img/aoa_6.jpg'),
					alt: 'img6',
					href: '#'
				},
				{
					img: require('../../img/aoa_7.jpg'),
					alt: 'img7',
					href: '#'
				},
			],
			url: ''
		}
	}
}

export default Carousel3D