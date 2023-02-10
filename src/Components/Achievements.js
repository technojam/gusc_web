import React from 'react'

function Achievements() {
  return (
    <>
      <h1 className='A-Text text-white'>Our Achievements</h1>
      <div style={{ marginTop: "55px" }}>
        <div class="container mx-5 my-8" >
          <div class="row">
            <div class="col-sm">
              <div class="card" style={{ width: "13rem", height: "13rem", backgroundColor: "#A51828" }}>
                <div class="card-body">
                  <h1>30+</h1>
                  <h2>CLUBS</h2>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" style={{ width: "13rem", height: "13rem", backgroundColor: "#A51828" }}>
                <div class="card-body">
                  <h1>250+</h1>
                  <h2>EVENTS</h2>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" style={{ width: "13rem", height: "13rem", backgroundColor: "#A51828" }}>
                <div class="card-body">
                  <h1>1000+</h1>
                  <h2>VOLUNTEERS</h2>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" style={{ width: "13rem", height: "13rem", backgroundColor: "#A51828" }}>
                <div class="card-body">
                  <h1>3000+</h1>
                  <h2>MEMBERS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}

export default Achievements