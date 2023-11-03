import React from 'react'


const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

const Gallery = () => {
  return (<>
    <div className="bg-red-700 p-12 text-center text-white">
        <p className="text-4xl">Galgotias University Student Clubs</p>
        <p className="text-7xl font-bold mt-2">GALLERY</p>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img src={image} alt={`Image ${index}`} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold">Image {index + 1}</p>
                <p className="text-gray-600">Description of Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div></>
  )
}

export default Gallery;
