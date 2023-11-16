// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Job from "../components/Job";
import Eq from "../components/eqbeatsiq";
import Best from "../components/bebest";
import Wondered from "../components/EverWondered";
import Test from "../components/test";
import About from "../components/Workwithus";
import Meet from "../components/meetahead";
import Familiar from "../components/familiar";
import Master from "../components/master";
import Self from "../components/selfimprovement";
export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Master />
          <Eq />
          <Familiar />
          <Meet />
          <Self />
          <Best />
          <Wondered />
          <Test />
          <About />
          <Job />

        </main>
        <Footer />
      </div>
    </>
  );
}
