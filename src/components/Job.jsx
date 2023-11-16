import React from "react";
import Vcard from "./Vacancies";
function Job() {
    return (
        <section id="section10">
          <div className='vacancies'>
          <h1 style={{textAlign:'left',marginLeft:'30px',fontWeight:'700'}}>Open vacancies</h1>
            <div className='v-card-container'>
              <Vcard title="Senior Full-Stack Engineer" jobdesc="Full time position" loc='Berlin or remote' salary="35k" />
              <Vcard title="Senior Designer" jobdesc="Full time position" loc='Berlin or remote' salary="35k" />
              <Vcard title="Superstar Intern" jobdesc="Full time position" loc='Berlin or remote' salary="35k" />
            </div>     
          </div>
        </section>
    );
}
export default Job;