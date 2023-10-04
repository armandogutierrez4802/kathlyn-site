import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className='flex bg-gray-700'>
            <h3>Kathlyn Gutierrez</h3>
            <button>
                <FontAwesomeIcon icon={faBars} className='text-3xl' />
            </button>
        </nav>
    )
}