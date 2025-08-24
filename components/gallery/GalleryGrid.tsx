'use client'

import { useState, useEffect, useRef } from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import GalleryImage from './GalleryImage'
import { X } from 'lucide-react'

// Gallery data with local image paths and external URLs as fallbacks
const galleryImages = [
  {
    id: 1,
    title: "Beginning Class",
    localSrc: "/images/gallery/beginning-class.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7d95b5b8-aa05-4b95-a6ff-f2c7897406d5/6DEF3A98-C1A5-4ABF-9DA4-405A4CDDB786/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 2,
    title: "Teammates",
    localSrc: "/images/gallery/teammates-1.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/53871749-8777-4daa-a1c2-de9ddc05a5ca/Screen_Shot_2023-03-06_at_4.27.44_PM/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 3,
    title: "Competition Peptalk",
    localSrc: "/images/gallery/competition-peptalk.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/09a16462-a9fb-4cca-be7b-7519f169d9ff/380289032_319657480572436_6974002833779103630_n/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 4,
    title: "I'm watching you!",
    localSrc: "/images/gallery/watching-you.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5b7d9db4-eaa9-4cf8-a0f1-6781a7bf88db/387064439_331008056104045_1178360441242988806_n/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 5,
    title: "Go Stanford!",
    localSrc: "/images/gallery/go-stanford.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f6173e99-4918-4ed6-a9c0-0e40d83136f5/Screen_Shot_2021-12-16_at_11.08_edited/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 6,
    title: "Podium",
    localSrc: "/images/gallery/podium-1.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/bd1206e8-3d8d-4414-9659-b3f52096ce1f/IMG_9367/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 7,
    title: "Boyz",
    localSrc: "/images/gallery/boyz.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4c694cd8-3ed7-4569-8be9-52566b6d8417/IMG_9103/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 8,
    title: "Target Practice",
    localSrc: "/images/gallery/target-practice.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a779f746-39c2-4418-8125-9057535ee12e/IMG-8202/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 9,
    title: "Men's Team",
    localSrc: "/images/gallery/mens-team.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0c02d64f-c8f3-4d5c-b731-ce3a135dc323/IMG-9168_edited/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 10,
    title: "Oh Yeah!",
    localSrc: "/images/gallery/oh-yeah.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/88a37adf-cb22-47bc-929e-98611db4a5c7/IMG_9778/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 11,
    title: "Coach Sergei",
    localSrc: "/images/gallery/coach-sergei.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a26afc37-0595-424d-ac9c-28349037a337/IMG-7002/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 12,
    title: "Brothers",
    localSrc: "/images/gallery/brothers.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/ed776a58-73d9-4388-8bdc-b799eb6be616/IMG_7497/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 13,
    title: "Lil' Pirate Rocks!",
    localSrc: "/images/gallery/lil-pirate-rocks.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d9b98a24-6231-4b2a-ad47-3c7485c973e7/IMG_8250/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 14,
    title: "The Gang!",
    localSrc: "/images/gallery/the-gang.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/957e12cc-b12f-40c6-acc0-b1eedfd76958/IMG_7689/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 15,
    title: "BAFC Boyz at Junior Olympics",
    localSrc: "/images/gallery/junior-olympics.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f0c012f7-23f9-45de-817a-5cc2a89edebb/IMG_9010_edited/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 16,
    title: "Class Drills",
    localSrc: "/images/gallery/class-drills.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/806b6dd0-7480-4a03-b551-9165e7379bd1/IMG_8682/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 17,
    title: "Paris!",
    localSrc: "/images/gallery/paris.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/54028267-0dd7-4e7d-84d8-44f6f04bb766/IMG_7500/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 18,
    title: "Podium at Paris",
    localSrc: "/images/gallery/podium-paris.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/42bfab0a-9c5a-4089-8549-877bef23e305/IMG_7496/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 19,
    title: "Strip Coaching",
    localSrc: "/images/gallery/strip-coaching-1.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/87eac5e6-fca5-4c14-ada6-dfe6838c04d0/IMG_6933/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 20,
    title: "Me and My Coach",
    localSrc: "/images/gallery/me-and-coach.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/eaf76013-f68b-4dd0-a05a-05cadd79642f/IMG_7344/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 21,
    title: "Podium",
    localSrc: "/images/gallery/podium-2.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cb2f091e-d27e-4db3-8c48-6c35e5fc549d/IMG_6882/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 22,
    title: "Top Finishers at New Jersey",
    localSrc: "/images/gallery/new-jersey-finishers.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/db864cf2-b0d4-49c2-b511-b21328cd6dcc/IMG_6871/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 23,
    title: "Like Our Necklaces?",
    localSrc: "/images/gallery/necklaces.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3950bd5c-f366-4bb3-83a9-9e29abb4f939/IMG_6494/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 24,
    title: "Twin Sisters",
    localSrc: "/images/gallery/twin-sisters.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cfbe8a53-97ec-43a0-bd21-4b28ca9690c2/IMG_6495/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 25,
    title: "Gold!",
    localSrc: "/images/gallery/gold.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/daf68901-a778-4a7c-b324-7a680fdbb0f1/IMG_6607/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 26,
    title: "Podium",
    localSrc: "/images/gallery/podium-3.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4c03ce8d-3016-473c-a121-0734b4cb77bf/IMG_6606/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 27,
    title: "Sisters, Gold & Silver",
    localSrc: "/images/gallery/sisters-gold-silver.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a7391106-ead4-40f5-86db-ca9cbf62081d/IMG_6576/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 28,
    title: "Podium",
    localSrc: "/images/gallery/podium-4.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/178169eb-e968-4f9d-9126-fe09ed3456bb/IMG_6535/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 29,
    title: "Podium",
    localSrc: "/images/gallery/podium-5.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a61f01e5-b07b-4eaa-9d18-d33bb4577a33/IMG_6497/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 30,
    title: "After a Bout",
    localSrc: "/images/gallery/after-bout.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6c5306ec-7dc0-416c-b695-b6c7a8d43cff/IMG_6492/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 31,
    title: "Joy of Competition",
    localSrc: "/images/gallery/joy-competition.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/04511d78-2fc1-4566-a41d-3178c8cb01a4/IMG_6489/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 32,
    title: "Lunge",
    localSrc: "/images/gallery/lunge.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e6cb0d2e-d124-4cc7-b373-b5dcfb691336/IMG_4316/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 33,
    title: "Ready for Competition",
    localSrc: "/images/gallery/ready-competition.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/497fe76a-d270-4ab5-b824-41c68dbda6ef/IMG_4299/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 34,
    title: "Team Picture",
    localSrc: "/images/gallery/team-picture.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/950b2509-97fb-4c23-bfe4-631ceab5e3ac/img_2193_720/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 35,
    title: "Podium",
    localSrc: "/images/gallery/podium-6.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fb95d5e6-325b-4cd1-ae90-5181a09f5e6a/391758762_334391665765684_3098217972093215334_n/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 36,
    title: "Teammates",
    localSrc: "/images/gallery/teammates-2.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a1a530d-4b76-47a7-9c0c-d29e74ea9bce/img_3501_720/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 37,
    title: "Let's Go!",
    localSrc: "/images/gallery/lets-go.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d264d6c7-e5e0-4d52-97b2-8e649ef40aba/423481238_392138796657637_3490051174660208061_n/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 38,
    title: "Podium",
    localSrc: "/images/gallery/podium-7.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/05389f6f-0c8f-47c0-8890-33abed898587/IMG_1768/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 39,
    title: "Podium with My Coach",
    localSrc: "/images/gallery/podium-coach-1.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1ec80e09-3c51-4fbe-bf51-716d6b99f55b/img_1801_720/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 40,
    title: "Nationals Podium",
    localSrc: "/images/gallery/nationals-podium.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5315afd4-3e15-4916-8780-efd5573fc430/img_1428_720/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 41,
    title: "Podium",
    localSrc: "/images/gallery/podium-8.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9182ff8d-1ec5-4f5c-bee8-dd69612bc8db/IMG_0559/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 42,
    title: "Podium with My Coach",
    localSrc: "/images/gallery/podium-coach-2.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/38bdabe2-86fb-48bd-b037-37c1b3dad7bb/B28BCA2D-7936-4DE6-AAD2-00037EDA68102023-02-05_14-14-28_065/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 43,
    title: "Podium with My Coach",
    localSrc: "/images/gallery/podium-coach-3.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c78775f7-b229-4cdb-bcba-0ab3af3432a1/423538042_391517573386426_7680556219061742722_n/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 44,
    title: "Podium with My Coach",
    localSrc: "/images/gallery/podium-coach-4.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/196b6dd5-9b4d-4ae8-af81-05cfa5f591d9/429486605_407551731783010_3419632934754159977_n/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 45,
    title: "Strip Coaching",
    localSrc: "/images/gallery/strip-coaching-2.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b1b6ccc8-3315-4600-936b-5065cdbf7691/A454DBB4-8CC0-416F-AAC5-3D2A3D9C3BD4/w=1920,quality=90,fit=scale-down",
    category: "coaches"
  },
  {
    id: 46,
    title: "Competition",
    localSrc: "/images/gallery/competition.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2f8ad759-55fa-4f26-9e26-178c78387fdb/421251896_387374583800725_2422682524227476910_n/w=1920,quality=90,fit=scale-down",
    category: "competitions"
  },
  {
    id: 47,
    title: "Sweep!",
    localSrc: "/images/gallery/sweep.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/ba91cf1e-b8c6-451e-a8d6-becd998fb4ef/422898467_392134389991411_1655892125645446301_n/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 48,
    title: "Suited Up",
    localSrc: "/images/gallery/suited-up.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/bb47a790-d172-4faa-9da1-c033449b8322/420750079_388031640401686_8923332985793945968_n/w=1920,quality=90,fit=scale-down",
    category: "classes"
  },
  {
    id: 49,
    title: "Smiles!",
    localSrc: "/images/gallery/smiles.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/69727e37-42df-4fb7-9a12-212f76bce221/420734624_388031643735019_8532363706279977314_n/w=1920,quality=90,fit=scale-down",
    category: "team"
  },
  {
    id: 50,
    title: "Farmer's Market",
    localSrc: "/images/gallery/farmers-market.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e072aa17-e036-4799-91af-9d4015df0113/406480085_360186379852879_468385810573504659_n/w=1920,quality=90,fit=scale-down",
    category: "community"
  },
  {
    id: 51,
    title: "Podium",
    localSrc: "/images/gallery/podium-9.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4b163445-c0c7-494a-9bf6-d65a4e436b6e/395453495_342324501639067_8569665581688188770_n/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 52,
    title: "Podium",
    localSrc: "/images/gallery/podium-10.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0fb0a8bc-9180-4fe0-aa7f-52fc61e6316d/392938728_334961362375381_5028590785379623575_n/w=1920,quality=90,fit=scale-down",
    category: "achievements"
  },
  {
    id: 53,
    title: "Club Pride!",
    localSrc: "/images/gallery/club-pride.jpg",
    externalSrc: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/19cbb18d-eebb-4f48-85db-86b3243c6a75/387724207_330045436200307_1331302829030551132_n_edited/w=1920,quality=90,fit=scale-down",
    category: "team"
  }
]

const categories = [
  { id: 'all', label: 'All Photos', count: galleryImages.length },
  { id: 'achievements', label: 'Achievements', count: galleryImages.filter(img => img.category === 'achievements').length },
  { id: 'competitions', label: 'Competitions', count: galleryImages.filter(img => img.category === 'competitions').length },
  { id: 'team', label: 'Team', count: galleryImages.filter(img => img.category === 'team').length },
  { id: 'classes', label: 'Classes', count: galleryImages.filter(img => img.category === 'classes').length },
  { id: 'coaches', label: 'Coaches', count: galleryImages.filter(img => img.category === 'coaches').length },
  { id: 'community', label: 'Community', count: galleryImages.filter(img => img.category === 'community').length }
]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageLoadStates, setImageLoadStates] = useState<{[key: number]: {width: number, height: number, loaded: boolean}}>({})
  const [columns, setColumns] = useState(4)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Handle responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setColumns(2)
        } else if (window.innerWidth < 1024) {
          setColumns(3)
        } else if (window.innerWidth < 1280) {
          setColumns(4)
        } else {
          setColumns(5)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return

      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
      
      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          event.preventDefault()
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
          setSelectedImage(filteredImages[prevIndex].id)
          break
        case 'ArrowRight':
          event.preventDefault()
          const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
          setSelectedImage(filteredImages[nextIndex].id)
          break
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, filteredImages])

  // Calculate image dimensions for dynamic sizing
  const getImageHeight = (imageId: number, baseWidth: number) => {
    const imageState = imageLoadStates[imageId]
    if (!imageState || !imageState.loaded) {
      return 200 // Default height while loading
    }

    const aspectRatio = imageState.width / imageState.height
    return Math.round(baseWidth / aspectRatio)
  }

  // Get column width based on container and number of columns
  const getColumnWidth = () => {
    if (!gridRef.current) return 300
    const containerWidth = gridRef.current.offsetWidth
    const gap = 12 // 3 * 4px gap
    return Math.floor((containerWidth - (gap * (columns - 1))) / columns)
  }

  // Handle image load to capture dimensions
  const handleImageLoad = (imageId: number, width: number, height: number) => {
    setImageLoadStates(prev => ({
      ...prev,
      [imageId]: { width, height, loaded: true }
    }))
  }

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const currentImage = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div 
          ref={gridRef}
          className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3"
        >
          {filteredImages.map((image) => {
            const columnWidth = getColumnWidth()
            const imageHeight = getImageHeight(image.id, columnWidth)
            
            return (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:z-10 break-inside-avoid mb-3"
                style={{ 
                  width: '100%',
                  height: imageHeight
                }}
                onClick={() => openLightbox(image.id)}
              >
                <GalleryImage
                  localSrc={image.localSrc}
                  externalSrc={image.externalSrc}
                  alt={image.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  onLoad={(w, h) => handleImageLoad(image.id, w, h)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs opacity-80 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show message if no images in category */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxWidth: 'calc(100vw - 120px)', // Account for navigation arrows
                maxHeight: 'calc(100vh - 32px)' // Account for padding
              }}
            >
              <img
                src={currentImage.localSrc}
                alt={currentImage.title}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.src = currentImage.externalSrc
                }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pointer-events-none">
                <h3 className="text-white text-xl font-semibold mb-1">{currentImage.title}</h3>
                <p className="text-white/80 capitalize">{currentImage.category}</p>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
                setSelectedImage(filteredImages[prevIndex].id)
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 rounded-full z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
                const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
                setSelectedImage(filteredImages[nextIndex].id)
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 rounded-full z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
