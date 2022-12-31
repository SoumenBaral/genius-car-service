import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        { id: 1, name: 'John Dev', img: expert1 },
        { id: 2, name: 'David Mk', img: expert2 },
        { id: 3, name: 'Joynal', img: expert3 },
        { id: 4, name: 'Gopal', img: expert4 },
        { id: 5, name: 'Biral', img: expert5 },
        { id: 6, name: 'Tiger', img: expert6 },
    ]
    return (
        <div className='container' id='experts'>
            <h1 className='text-danger text-center'>Expert</h1>
            <div className='row'>
                {
                    experts.map(ex => <Expert
                        key={ex.id}
                        expert={ex}
                    ></Expert>)}
            </div>
        </div>
    );
};

export default Experts;