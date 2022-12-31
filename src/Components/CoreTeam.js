import {useState} from 'react'

export default function Core() {
    const [cards]=useState([
        {
            title: "Genera Secretary",
            name: "Akshat Aggarwal",
            img: "./images/image.jpg"
        },
        {
            title: "Chief Secretary",
            name: "Vishnu Tandon",
            img: "./images/image.jpg"
        },
        {
            title:"Joint Secretary",
            name: "Gulshan Kumar Mehta",
            img: "./images/image.jpg"
        },
        {
            title: "Vice Secretary",
            name: "Sneha Mehta",
            img: "./images/image.jpg"
        },
        
        {
            title: "Regent Secretary",
            name: "Kunwar Prarup Yash",
            img: "./images/image.jpg"
        },
        
        {
            title: "Deputy Regent Secretary",
            name: "Shubhangi Pandey",
            img: "./images/image.jpg"
        },
        {
            title: "Deputy Regent Secretary",
            name: "Shubham Satyam Dubey",
            img: "./images/image.jpg"
        }
        
    ]);
  return (
    <div >  
      <section>
        <div className="container" style={container}>
            <h1 style={heading}>CORE TEAM</h1>
            <div className="cards" style={card1}>
                {
                    cards.map((card,i)=>(
                        <div key={i} className="card" style={card2} >
                            <img src={card.img} alt="images" style={image1}/>
                            <div className='info' style={info}>
                                <h3><b>{card.name}</b></h3>
                                <p>{card.title}</p>
                            </div>
                            
                        </div>
                    ))
                }    
            </div>
        </div>
      </section>
    </div>
    
  )
}

const container={
    maxWidth: "960px",
    margin: "0px auto 20px auto",
    //display: "block",
   
}

const heading={
   fontSize: "40px",
   textAlign: "center",
   padding: "15px",
   color: "red"
}
const card1={
   display: "flex",
   flexWrap: "wrap",
   objectFit: "fill",
   justifyContent: "spacearound"

}

const card2={
   backgroundColor: "lightgrey",
   cursor: "pointer",
   margin: "0px auto 60px auto",
   textAlign: "center",
   borderRadius: "100px 100px 0px 0px",
   height: "250px",
   width: "200px"
}

const info={
    textAlign: "center",
    lineHeight: "1.8",
    fontSize: "15px",
    fontFamily: "Arial, Helvetica, sans-serif ",
    
    
}
 const image1={
    width: "200px",
    height: "250px",
    borderRadius: "100px 100px 0px 0px",
   
 }



