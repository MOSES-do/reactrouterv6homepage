import React from 'react'
import {FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="content">
                <div className="col-1">
                    <h1>Data to enrich your</h1>
                    <h1><span className="primary-color">online business</span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <div className='used-by'>
                        <p>USED BY</p>
                        <div className="icons">
                            <i><FaDatabase/> Staxx</i>
                            <i><FaAsterisk/> Star AI</i>
                            <i><FaAccusoft /> Accusoft</i>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                            <p className="sign-in-txt">Sign in with</p>
                            <div className="social-login">
                                <i><FaFacebook size={20}/></i>
                                <i><FaTwitter size={20}/></i>
                                <i><FaGithub size={20}/></i>
                            </div>
                            <div className="divider">
                                <p><span>Or</span></p>
                            </div>

                            <form action=''>
                                <input type='text' placeholder='Name'/>
                                <input type='emlai' placeholder='Email'/>
                                <input type='password' placeholder='Password'/>
                                <button>Create your account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p> By sigining up, you agree to our
                                <span className="primary-color">Terms, Data Policy</span> and
                                <span className="primary-color">Cookies Policy</span>. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero