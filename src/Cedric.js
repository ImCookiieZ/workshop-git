import kumo from './kumo.gif';

function Cedric() {
    return (
        <div>
            <h1>Cedric Cadet</h1>
            <img src={kumo} alt="loading..." />
            <h3>Skills:</h3>
            <ul>
                <li>C</li>
                <li>C++</li>
                <li>Javascript</li>
                <li>Haskell</li>
                <li>Assembly</li>
                <li>Python</li>
                <li>Java</li>
                <li>Being Asian</li>
            </ul>
            <h3>Hobbies:</h3>
            <ul>
                <li>Music (plz subscribe to my youtube channel)</li>
                <li>Cubing</li>
                <li>Auto Racing</li>
            </ul>
        </div>
    );
}

export default Cedric;