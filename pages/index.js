
// import Image from "next/image";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>Home Page</div>
      <FontAwesomeIcon icon={faCode} />


    </div>
  )
}

