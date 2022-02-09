import pb from './dog.jpg';
import './ramon.css';

function Ramon() {
    return (
        <div className='Ramon'>
            <img src={pb} className='Ramon-pb' alt='pb'/>
            <header className='Ramon-Header'>
                <h1>Name: Ramon Werner</h1>
                <h2>Year: 2nd Year</h2>
                <dl>
                    <dt>Likes:</dt>
                    <dd>JDM cars</dd>
                    <dd>traveling</dd>
                    <dd>animals</dd>
                </dl>
            </header>
        </div>
    );
}

export default Ramon;