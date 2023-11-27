import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Boma National Park",
    city: "Boma, South Sudan",
    distance: 300,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 10,
    desc: "Environmentalists and naturalists have been arguing for years over whether Boma National Park is the home of the largest or the second-largest annual land mammal migration on the planet. Some say it’s the Serengeti and the movement of the countless wildebeest there, others – most notably the South Sudanese themselves! – claim the honor for this vast swathe of wilderness that clings to the edge of the Ethiopian border in the east. But whether you come to see the great peregrinations of the white-eared kob or not, you can rest assured the park will be one to remember. Zebras and gazelles, oryx, cheetah and gliding vultures are all visible, hiding amidst the rolling savannah and occasional bluffs of rock.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Nimule National Park",
    city: "Nimule, South Sudan",
    distance: 400,
    address: "Eastern Equatoria State",
    price: 99,
    maxGroupSize: 8,
    desc: "Nimule National Park is a national park in South Sudan. It is located approximately 192 kilometres (119 mi), by road, southeast of Juba, the capital and largest city in that country. This location lies approximately 64 kilometres (40 mi), by road, northwest of Nimule, the nearest large town. The coordinates of Nimule National Park are: 3°30′00″N 32°00′00″E. The park is named after the nearby town of Nimule, in Nimule County, Eastern Equatoria State, in southeastern South Sudan, near the International border with the Republic of Uganda. The park is located on the eastern bank of the White Nile River, immediately north of the International border with the Republic of Uganda. The park is approximately 40 kilometres (25 mi), by road, northwest of the town of Nimule, where the headquarters of Nimule National Park are located. The park is approximately 192 kilometres (119 mi), by road, southeast of Juba, the capital and largest city in South Sudan.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Shambe Nature Reserve",
    city: "Shambe, South Sudan",
    distance: 500,
    address: "Lake State",
    price: 99,
    maxGroupSize: 8,
    desc: "First gazetted way back in the mid-1980s, the Shambe National Park can be seen as the southern extension of the aforementioned Ez Zeraf Reserve. That makes it home to an important part of the White Nile River ecosystem; a place of curious oxbow lakes and pop-up flood plains. Animal wise, you’ll get all of the biodiversity of the larger park to the north, along with lions and hippos, wild foxes and swinging primates of different kinds, not to mention elephants by the hundred! Shambe Nature Reserve is also a designated birding area, made popular thanks to countless migratory species that pass this way throughout the year.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Bandingilo National Park",
    city: "Bandingilo, South Sudan",
    distance: 500,
    address: "Central Equatoria State",
    price: 99,
    maxGroupSize: 8,
    desc: "Another great place to come and witness the breathtaking phenomenon of the annual migration of the white-eared kob, Bandingilo National Park is the natural jewel of the Equatoria region. Spread out over the riparian grass plains that stretch eastwards from the White Nile River, it’s a surprisingly accessible place – thanks largely to that proximity to the capital at Juba; and surprising because stats show that still hardly anyone comes here! If you do decide to take the trip after the current Sudanese troubles reside, you can expect the likes of Nubian giraffes and elephants to pepper the vistas at Bandingilo!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Historical Town, Bor",
    city: "Bor, South Sudan",
    distance: 500,
    address: "Jonglei State",
    price: 99,
    maxGroupSize: 8,
    desc: "Bor is a town in South Sudan. It also serves as the capital of Jonglei State, and since 2016 capital of the defunct Boma State. The town is located in Bor County, in eastern South Sudan, approximately 197 kilometres (122 mi), by road, northwest of Juba, the capital and largest city in that country. The coordinates of Bor are: 6°12′36″N 31°33′36″E. Bor is located on the east bank of the White Nile, neighboring the city of Bor is the town of Malakal, located approximately 190 kilometres (120 mi), by road, to the northeast of Bor. The town of Bor is located approximately 197 kilometres (122 mi), by road, northwest of Juba, the capital and largest city in South Sudan. The coordinates of Bor are: 6°12′36″N 31°33′36″E. The town sits at an average elevation of 400 metres (1,300 ft), above sea level. The terrain surrounding the town is flat, with scattered trees and shrubs. The White Nile passes through the town, from south to north.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Beatiful City, Malakal",
    city: "Malakal, South Sudan",
    distance: 500,
    address: "Upper Nile State",
    price: 99,
    maxGroupSize: 8,
    desc: "Malakal is a city in South Sudan and second largest city after the country's capital Juba. It is the capital of Malakal State, one of the 32 states of South Sudan. It is located on the banks of the White Nile and functions as the gateway to the historic Nubian region of Tong. The city is also the capital of Malakal County. The city of Malakal is situated 650 kilometres (400 mi), by road, northeast of Juba, the capital and largest city in the country. The coordinates of Malakal are: 9°32′48″N 31°39′36″E. The city sits at an average elevation of 358 metres (1,175 ft), above sea level. The terrain surrounding the city is flat, with seasonal swamps and flood plains. The White Nile passes through the city, from south to north.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Lake Shambe",
    city: "Shambe, South Sudan",
    distance: 500,
    address: "Lake State",
    price: 99,
    maxGroupSize: 8,
    desc: "Lake Shambe is a lake in South Sudan. It is located in the southern part of the country, in the state of Lakes. The lake is located approximately 50 kilometres (31 mi), by road, northwest of the town of Yirol, the location of the state headquarters. This location lies approximately 300 kilometres (190 mi), by road, northwest of Juba, the capital and largest city in South Sudan. The coordinates of Lake Shambe are: 6°58′00″N 30°20′24″E. Lake Shambe is a shallow, freshwater lake, with an average depth of 1.5 metres (4 ft 11 in). The lake is fed by the waters of the Bahr el Ghazal River, which flows from the north, through the town of Yirol, before emptying into the lake. The lake is approximately 25 kilometres (16 mi), by road, south of the town of Yirol, the location of the state headquarters. This location lies approximately 300 kilometres (190 mi), by road, northwest of Juba, the capital and largest city in South Sudan. The coordinates of Lake Shambe are: 6°58′00″N 30°20′24″E.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Mountain Imatong",
    city: "Kapoeta, South Sudan",
    distance: 500,
    address: "Eastern Equatoria State",
    price: 99,
    maxGroupSize: 8,
    desc: "Mount Imatong is a mountain in South Sudan. It is located in the Imatong Central Forest Reserve, in Eastern Equatoria State, in the southeastern part of South Sudan, near the International border with the Republic of Uganda. The mountain is located approximately 200 kilometres (120 mi), by road, southeast of Juba, the capital and largest city in South Sudan. The coordinates of Mount Imatong are: 4°59′00″N 32°00′00″E. Mount Imatong is the highest mountain in South Sudan. It is also the highest mountain in the Imatong Central Forest Reserve. The mountain is located approximately 200 kilometres (120 mi), by road, southeast of Juba, the capital and largest city in South Sudan. The coordinates of Mount Imatong are: 4°59′00″N 32°00′00″E. The mountain rises to an elevation of 3,187 metres (10,456 ft), above sea level. The terrain surrounding the mountain is hilly, with scattered trees and shrubs. The mountain is located in the Imatong Central Forest Reserve, a protected area in South Sudan.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
