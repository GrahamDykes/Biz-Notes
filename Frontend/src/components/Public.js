import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">bizNotes - A protype Small Business Solution by Cryptic llc (aka Graham Dykes)</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the desert of Arizona, Graham Dykes will code your ideas into reality!!</p>
                <address className="public__addr">
                    Crypit llc<br />
                    5555 W. Cielo Grande<br />
                    Peoria, AZ 85383<br />
                    <a href="tel:+16025968903">(602) 596-8903</a>
                </address>
                <br />
                <p>Owner: Your Name Here!!!</p>
                <br></br>
                <br></br>
                <p>Please Login Yourself To Check It Out:</p>
                <p>Username: <span className='bigbold'>Guest</span></p>
                <p>Password: <span className='bigbold'>!G12345</span></p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public