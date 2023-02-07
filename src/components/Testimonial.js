import React from 'react'
import {FaDatabase} from 'react-icons/fa'
import './TestimonialStyles.css'

const Testimonial = () => {
  return (
		<div className="testimonial">
			<div className="container">
				<div className="outline">
					<div className="content">
						<i>
							<FaDatabase />
							Staxx
						</i>
						<p className="body">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
                        <div className='name'>
                            <p>Marie Chilvers</p>
                            <p>CEO, Staxx</p>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial