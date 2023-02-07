import {FaPhone, FaEnvelope} from 'react-icons/fa'
import './ContactStyle.css'

const Contact = () => {
  return (
		<div className="contact">
			<div className="container">
				<div className="col-1">
					<div className="content">
						<div>
							<h2>Get in touch</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
                        <div className='address'>
                            <p> 742 Evergreen Terrace</p>
                            <p> Springfield, OR 12345</p>
                        </div>

                        <div className="icons">
                            <FaPhone style={{marginRight: '1rem'}}/>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="icons">
                            <FaEnvelope style={{marginRight: '1rem'}}/>
                            <p>support@example.com</p>
                        </div>
                        <div className='careers'>
                            <p>Looking for careers? <span>View all job openings.</span></p>
                        </div>
					</div>
				</div>

                <div className='col-2'>
                    <form action=''>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea name="Message" placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox'>
                            <input type='checkbox'/>
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and <span>Cookie Policy</span>.</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
			</div>
		</div>
	);
}

export default Contact