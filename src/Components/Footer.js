import React from 'react';

export default function Footer() {
  return (
        <footer>
            <div className="main p-0 m-0 box-border w-[100vw]">
                <div className="foot-row flex justify-around items-center p-10 flex-wrap bg-black">
                    <div className="col w-[30%] flex flex-col justify-center items-center p-2">
                        <div className="gu-logo w-[50%]">
                            <img src="./images/guLogo.jpg" alt="" />
                        </div>
                        <div className="social pt-1 text-white">
                            <a href=''><i className="fa-brands fa-2x fa-instagram px-2"></i></a>
                            <a href=''><i className="fa-brands fa-2x fa-twitter px-2"></i></a>
                            <a href=''><i className="fa-brands fa-2x fa-linkedin px-2"></i></a>
                            <a href=''><i className="fa-brands fa-2x fa-facebook px-2"></i></a>
                        </div>
                    </div>
                    <div className="col text-white p-2 flex flex-col justify-center items-center">
                        <h4 className='text-2xl'>EXPLORE</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Events</a></li>
                            <li><a href="">Clubs</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div className="col text-white p-2 flex flex-col justify-center items-center">
                        <h4 className='text-2xl'>Useful Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Event Registration</a></li>
                            <li><a href="">Club Registration</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col text-white p-2 mb-5 flex flex-col justify-center items-center">
                        <h4 className='text-2xl'>Contact Info</h4>
                        <ul className="list-unstyled">
                            <li><a href="">C-148, Galgotias University,Greater Noida</a></li>
                            <li><a href="">studentcouncil@galgotiasuniversity.edu.in</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        <div className="row bg-black" >
            <p className='col-sm text-center p-2 text-white'>
                Designed by <b>Graphex</b>, Made by <b>Team Technojam</b>. All rights reserved
            </p>
        </div>
        </footer>
      
  )
  
}


