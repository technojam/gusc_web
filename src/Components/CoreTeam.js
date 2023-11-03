import {useState} from 'react'

export default function Core() {
    const [cards]=useState([
        {
            title: "General Secretary",
            name: "NIKUNJ BIHARI",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/IMG_20230910_021448%20-%20Nikunj%201.png?updatedAt=1698762702071"
        },
        {
            title: "VICE PRESIDENT",
            name: "TAPISH RAWAT",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/DSC_4523%20-%20TAPISH%20RAWAT%201.png?updatedAt=1698762701793"
        },
        {
            title:"VICE PRESIDENT",
            name: "AVANINDRA VIKRAM PRATAP SINGH",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/IMG_3302%20-%20Avanindra%20Vikram%20Pratap%20Singh%201.png?updatedAt=1698762702085"
        },
        {
            title: "Vice Secretary",
            name: "UMAD SOFI",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/IMG20230706095539%20-%20ummad%20sofi%201.png?updatedAt=1698762701797"
        },
        
        {
            title: "VICE PRESIDENT",
            name: "DEVANSH KAUSHIK",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/6A0E87BB-97B6-45AC-BE01-16327BE215CC%20-%20Devansh%20kaushik%201.png?updatedAt=1698762701496"
        },
        
        {
            title: "Deputy Regent Secretary",
            name: "RAHUL BHOGAL",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/_DSC0057%20-%20Rahul%20Bhogal%201.png?updatedAt=1698762702077"
        },
        {
            title: "Deputy Regent Secretary",
            name: "SAUMYA PATHAK",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/1691066068478%201.png?updatedAt=1698762700169"
        },
        {
            title: "Deputy Regent Secretary",
            name: "MELODY TSISTI MUCHAFA",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/WhatsApp%20Image%202023-08-03%20at%2018.04%201.png?updatedAt=1698762701797"
        },
        {
            title: "Deputy Regent Secretary",
            name: "Shruti Saxena",
            img: "https://ik.imagekit.io/qnbmvykj4/New%20folder/IMG_20230803_174412%20-%20Shruti%20Saxena%201.png?updatedAt=1698762701156"
        }
        
    ]);
  return (
    <div >  
      <section className='section' style={section}>
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

const section={
    backgroundColor:"white",
    width:"100vw"
}
const container={
    backgroundColor:"white",
    maxWidth: "1150px",
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
//    backgroundColor: "lightgrey",
   cursor: "pointer",
   margin: "0px auto 60px auto",
   textAlign: "center",
   border:"none",
   borderRadius: "100px 100px 0px 0px",
   height: "260px",
   width: "200px"
}

const info={
    textAlign: "center",
    color:'black',
    lineHeight: "1.8",
    fontSize: "15px",
    fontFamily: "Arial, Helvetica, sans-serif ",   
    marginTop: "10px"
}
 const image1={
    width: "200px",
    height: "250px",
    borderRadius: "100px 100px 0px 0px",
   
 }



