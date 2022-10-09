import React from "react";
import Counter from '../components/Counter.js';
import Modal from '../components/Modal.js';
import JavaTest from '../components/Java-test.js';

function Header () {
    const [open, setOpen] = React.useState('');
    let window = open;
    
    function renderWindow () {
        if (window === 'counter') {
            return <Counter />
        }

        if (window === 'modal') {
            return <Modal />
        }

        if (window === 'test') {
            return <JavaTest />
        }

    }

    return (
        <div className="container">
            <div className="header">
                <button onClick={() => setOpen('counter')} className="open-modal-btn">Счётчик</button>
                <button onClick={() => setOpen('modal')} className="open-modal-btn">Модальное окно</button>
                <button onClick={() => setOpen('test')} className="open-modal-btn">Тестирование</button>
            </div>
            {renderWindow()}
        </div>
    );
}

export default Header;