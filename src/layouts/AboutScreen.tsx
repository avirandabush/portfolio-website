import "./About.css"

const AboutScreen = () => {
    return (
        <div className="about-container">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div className="terminal-button close"></div>
                        <div className="terminal-button minimize"></div>
                        <div className="terminal-button maximize"></div>
                    </div>
                    <div className="terminal-title">About Me</div>
                </div>
                <div className="terminal-content">
                    <p>Hi, my name is Aviran Dabush.</p>
                    <p>I'm an iOS developer with 3 years of experience in mobile development.</p>
                    <p>I also practice Android and web development in my free time.</p>
                    <p>I'm passionate about learning new technologies, improving my skills, and growing professionally.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen
