
import Image from "next/image";
import Link from "next/link";



// Font Awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      src: '/images/Emily_1.jpg',
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
  ];




  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/*------------------------------*/}
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to my art site :)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I have loved drawing and coloring ever since I was little. I would love to draw something for you or a loved one!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/order"
                className="rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Request FREE Quote
              </Link>
              <Link href="/faq" className="text-sm font-semibold leading-6 text-gray-900">
                FAQs <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          {/* <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div> */}
        </div>
      </div>


      {/*------------------------------*/}


      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[0].src}
            width={175}
            height={175}
            alt={images[0].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[1].src}
            width={175}
            height={175}
            alt={images[1].title}
          />
        </div>

        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[2].src}
            width={175}
            height={175}
            alt={images[2].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[3].src}
            width={175}
            height={175}
            alt={images[3].title}
          />
        </div>

        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[4].src}
            width={175}
            height={175}
            alt={images[4].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[5].src}
            width={175}
            height={175}
            alt={images[5].title}
          />
        </div>

        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[6].src}
            width={175}
            height={175}
            alt={images[6].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[7].src}
            width={175}
            height={175}
            alt={images[7].title}
          />
        </div>

        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[8].src}
            width={175}
            height={175}
            alt={images[8].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[9].src}
            width={175}
            height={175}
            alt={images[9].title}
          />
        </div>

        <div className="flex justify-center gap-1 m-auto sm:gap-24">
          <Image
            style={{ objectFit: "contain" }}
            src={images[10].src}
            width={175}
            height={175}
            alt={images[10].title}
          />
          <Image
            style={{ objectFit: "contain" }}
            src={images[11].src}
            width={175}
            height={175}
            alt={images[11].title}
          />
        </div>
      </div>



    </div>
  )
}

