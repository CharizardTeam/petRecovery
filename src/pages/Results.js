/*
  This example requires Tailwind CSS v2.0+ 
  This example requires some changes to your config:
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/

const files = [
  {
    name: 'Tom',
    type: 'Dog',
    breed: 'Unknown',
    color: 'Black, White',
    details: '',
    lastSeen: '10009',
    contactInfo: {
      preferredContact: 'phone',
      phone: '555-555-5555'
    },
    source:
      "https://placedog.net/360/300?id=58",
  },
  {
    name: 'Fido',
    type: 'Dog',
    breed: 'Husky',
    color: 'Black, White',
    details: 'Dirty',
    lastSeen: '10007',
    contactInfo: {
      preferredContact: 'email',
      phone: '555-555-5555',
      email: 'fakeemail@gmail.com'
    },
    source:
      "https://placedog.net/359/300?id=16",
  },
  {
    name: 'Unknown',
    type: 'Dog',
    breed: 'Unknown',
    color: 'Black, White',
    details: 'Has silly glasses on',
    lastSeen: '10009',
    contactInfo: {
      preferredContact: 'phone',
      phone: '555-555-5555',
      email: 'anotherfakeemail@gmail.com'
    },
    source:
      "https://placedog.net/358/300?id=23",
  }

  // More files...
];

export default function Results() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img
              src={file.source}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {file.name}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            Breed: {file.breed}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            Color: {file.color}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            Last seen: {file.lastSeen}
          </p>          
          {file.details ? 
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              Other details: {file.details} 
            </p> : <div></div>}
          {file.contactInfo.phone || file.contactInfo.email ?
            <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {`${file.contactInfo.preferredContact[0].toUpperCase() + file.contactInfo.preferredContact.slice(1)}: ${file.contactInfo[file.contactInfo.preferredContact]}`}
            </p> : <div></div>}
        </li>
      ))}
    </ul>
    // </div>
  );
}