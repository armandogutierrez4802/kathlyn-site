
import Image from "next/image";



// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
// import { faCode } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faCode} />

export default function Home() {
  const images = [
    {
      title: 'Photo of dog',
      src: '/images/Elly_1.jpg'
    },
    {
      title: 'Sketch of dog',
      src: '/images/Elly_2.jpg'
    },
    {
      title: 'Photo of girl',
      src: '/images/Creeah_1.jpg'
    },
    {
      title: 'Sketch of girl',
      src: '/images/Creeah_2.jpg'
    },
    {
      title: 'Photo of second girl',
      src: '/images/Emily_1.jpg'
    },
    {
      title: 'Sketch of second girl',
      src: '/images/Emily_2.jpg'
    },
    {
      title: 'Photo of women',
      src: '/images/Harlene_1.jpg'
    },
    {
      title: 'Sketch of women',
      src: '/images/Harlene_2.jpg'
    },
    {
      title: 'Photo of man',
      src: '/images/Byron_1.jpg'
    },
    {
      title: 'Sketch of man',
      src: '/images/Byron_2.jpg'
    },
    {
      title: 'Photo of car',
      src: '/images/Car_1.jpg'
    },
    {
      title: 'Sketch of car',
      src: '/images/Car_2.jpg'
    }
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        {images.map(image => (
          <Image
            src={image.src}
            width={500}
            height={500}
            alt={image.title}
          />
        ))}
      </div>
    </div>
  )
}

