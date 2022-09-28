
import React from 'react'
import { Link } from 'react-router-dom'
import "./foot.css"
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsSpotify } from 'react-icons/bs';



const Footer = () => {
    return (
        <div style={{ paddingTop:"10px",width: "100%", backgroundColor: "#F5F5F5" }}>
            <div style={{  width: "80%", display: "flex", margin: "auto" }}>
                <div style={{ width: "65%", paddingRight: "30px", paddingLeft: "30px", justifyContent: "space-between", display: "flex" }}>
                    <div>
                        <p className='foot-color'> EXPLORE</p>
                        <ul ><Link className='foot1'>What we do</Link></ul>
                        <ul ><Link className='foot1'>Funding</Link></ul>
                        <ul ><Link className='foot1'>GoFundMe</Link></ul>
                    </div>
                    <div >
                        <p className='foot-color'> ABOUT</p>
                        <ul ><Link className='foot1'>About us</Link></ul>
                        <ul ><Link className='foot1'>Blog</Link></ul>
                        <ul ><Link className='foot1'>Trust Safety</Link></ul>
                        <ul ><Link className='foot1'>Help Support</Link></ul>
                        <ul ><Link className='foot1'>Press</Link></ul>
                        <ul ><Link className='foot1'>Career</Link></ul>
                    </div>
                    <div >
                        <p className='foot-color'> ENTREPRENEURS</p>
                        <ul ><Link className='foot1'>How it Work</Link></ul>
                        <ul ><Link className='foot1'>Indiegogo vs Kickstarter</Link></ul>
                        <ul ><Link className='foot1'>Expert Directory</Link></ul>
                        <ul ><Link className='foot1'>Fee</Link></ul>
                        <ul ><Link className='foot1'>Enterprise</Link></ul>
                        <ul ><Link className='foot1'>China</Link></ul>
                    </div>

                </div>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <div style={{ padding: "10px" }}>
                            <img src="https://previews.123rf.com/images/amin268/amin2681705/amin268170500096/77242460-email-line-icon-envelope-and-website-button-vector-graphics-a-linear-pattern-on-a-white-background-e.jpg" style={{ height: "50px" }} alt="a" />
                        </div>
                        <div>
                            <b>Find it first on Indiegogo</b>
                            <br />
                            <p>Discover new and clever products <br />in the Indiegogo newsletter</p>
                        </div>
                        <div>
                            <input type="text" placeholder='Your email address' />
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        I agree to the Terms of Use and have read and understand the Privacy Policy
                    </div>
                    <button style={{ backgroundColor: "#E51075", padding: "6px 23px" }}>SIGN ME UP</button>

                </div>

            </div>
            <div style={{ paddingLeft: "10%" ,display:"flex" }}>
                <div>
                    <input  type="text" placeholder='  Indian Rupee (INR)' />
                </div>
                <div style={{paddingLeft:"6px"}}>
                    <RiFacebookFill style={{paddingLeft:"6px"}}/>
                    <AiOutlineTwitter style={{paddingLeft:"6px"}}/>
                    <AiFillYoutube style={{paddingLeft:"6px"}}/>
                    <AiOutlineInstagram style={{paddingLeft:"6px"}}/>
                    <GrLinkedinOption style={{paddingLeft:"6px"}}/>
                    <BsSpotify/>
                </div>
            </div>
            <hr />
            <div style={{display:"flex",justifyContent:"space-between", width:"80%"}}>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Do Not Sell My Personal Information</p>
                <p>Do Not Sell My Personal Information</p>
            </div>
        </div>
    )
}

export default Footer