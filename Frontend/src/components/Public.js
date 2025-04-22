import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span>bizNotes - A Small Prototype</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in the desert heart of Arizona, Graham Dykes will code your
          ideas into reality!!
        </p>
        <address className="public__addr">
          Cryptic llc
          <br />
          5555 W. Cielo Grande
          <br />
          Peoria, AZ 85383
          <br />
          <a href="tel:+16025968903">(602) 596-8903</a>
          <br></br>
          <a
            href="mailto:grahamdykes@gmail.com?subject=Recruitment%20Response"
            className="emailLink"
          >
            grahamdykes@gmail.com
          </a>
        </address>
        <br />
        {/* <p>Owner: Your Name Here!!!</p> */}
        <br></br>
        <ol className="welcomeList">
          <p className="largerFont">Meant to showcase my full set of skills,</p>
          <p>this project is a fully fleshed out app :</p>
          <li>deployed on AWS</li>
          <li>
            uses a MongoDB cloud connection, can easily be switched to a locally
            run database for more security
          </li>
          <li>Uses JWT for modern security</li>
          <li>
            protected URL routes, redirecting unauthorized sessions to login
            page
          </li>
          <li>different roles with elevated permissions</li>
          <li>everything real-deal developers need to be able to do</li>
        </ol>

        <br></br>
        <p>Please Login Yourself To Check It Out:</p>
        {/* <p>
          Username: <span className="bigbold">Guest</span>
        </p>
        <p>
          Password: <span className="bigbold">!G12345</span>
        </p> */}
      </main>
      <Link className="footerboot" to="/login" id="footerboot">
        Employee Login
      </Link>
      <footer>
        <br></br>
      </footer>
    </section>
  );
  return content;
};
export default Public;
