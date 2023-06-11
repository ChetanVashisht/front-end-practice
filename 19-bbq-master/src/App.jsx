function App() {
    return (
        <main>
            <section className="splash-section">
                <div>
                    <div className="splash-header-hr"></div>
                    <div className="splash-header-text">mouthwateringly delicious</div>
                </div>
                <div>
                    <p className="splash-main-text"> Learn how to make <b>the best BBQ ribs</b> in town</p>
                    <p className="splash-join-text"> Join us for this webinar </p>
                </div>
            </section>
            <section className="sign-up-section">
                <h1> Become a BBQ master! </h1>
                <span className="sign-up-c2a-text"> Register Today </span>
                <p className="signup-para">BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>
                <form className="signup-form">
                    <label></label>
                    <input placeholder="first name"/>
                    <input placeholder="email"/>
                    <button>Register</button>
                </form>
                <p className="signup-disclaimer">We'll never share your information without your permission</p>
            </section>
        </main>
    )

}

export default App
