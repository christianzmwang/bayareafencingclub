const fs = require('fs');
const path = require('path');
const https = require('https');

// Gallery images from the original website
const galleryImages = [
  {
    id: 1,
    title: "Beginning Class",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/7d95b5b8-aa05-4b95-a6ff-f2c7897406d5/6DEF3A98-C1A5-4ABF-9DA4-405A4CDDB786/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "beginning-class.jpg"
  },
  {
    id: 2,
    title: "Teammates",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/53871749-8777-4daa-a1c2-de9ddc05a5ca/Screen_Shot_2023-03-06_at_4.27.44_PM/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "teammates-1.jpg"
  },
  {
    id: 3,
    title: "Competition Peptalk",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/09a16462-a9fb-4cca-be7b-7519f169d9ff/380289032_319657480572436_6974002833779103630_n/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "competition-peptalk.jpg"
  },
  {
    id: 4,
    title: "I'm watching you!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5b7d9db4-eaa9-4cf8-a0f1-6781a7bf88db/387064439_331008056104045_1178360441242988806_n/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "watching-you.jpg"
  },
  {
    id: 5,
    title: "Go Stanford!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f6173e99-4918-4ed6-a9c0-0e40d83136f5/Screen_Shot_2021-12-16_at_11.08_edited/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "go-stanford.jpg"
  },
  {
    id: 6,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/bd1206e8-3d8d-4414-9659-b3f52096ce1f/IMG_9367/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-1.jpg"
  },
  {
    id: 7,
    title: "Boyz",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4c694cd8-3ed7-4569-8be9-52566b6d8417/IMG_9103/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "boyz.jpg"
  },
  {
    id: 8,
    title: "Target Practice",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a779f746-39c2-4418-8125-9057535ee12e/IMG-8202/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "target-practice.jpg"
  },
  {
    id: 9,
    title: "Men's Team",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0c02d64f-c8f3-4d5c-b731-ce3a135dc323/IMG-9168_edited/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "mens-team.jpg"
  },
  {
    id: 10,
    title: "Oh Yeah!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/88a37adf-cb22-47bc-929e-98611db4a5c7/IMG_9778/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "oh-yeah.jpg"
  },
  {
    id: 11,
    title: "Coach Sergei",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a26afc37-0595-424d-ac9c-28349037a337/IMG-7002/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "coach-sergei.jpg"
  },
  {
    id: 12,
    title: "Brothers",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/ed776a58-73d9-4388-8bdc-b799eb6be616/IMG_7497/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "brothers.jpg"
  },
  {
    id: 13,
    title: "Lil' Pirate Rocks!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d9b98a24-6231-4b2a-ad47-3c7485c973e7/IMG_8250/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "lil-pirate-rocks.jpg"
  },
  {
    id: 14,
    title: "The Gang!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/957e12cc-b12f-40c6-acc0-b1eedfd76958/IMG_7689/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "the-gang.jpg"
  },
  {
    id: 15,
    title: "BAFC Boyz at Junior Olympics",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f0c012f7-23f9-45de-817a-5cc2a89edebb/IMG_9010_edited/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "junior-olympics.jpg"
  },
  {
    id: 16,
    title: "Class Drills",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/806b6dd0-7480-4a03-b551-9165e7379bd1/IMG_8682/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "class-drills.jpg"
  },
  {
    id: 17,
    title: "Paris!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/54028267-0dd7-4e7d-84d8-44f6f04bb766/IMG_7500/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "paris.jpg"
  },
  {
    id: 18,
    title: "Podium at Paris",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/42bfab0a-9c5a-4089-8549-877bef23e305/IMG_7496/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-paris.jpg"
  },
  {
    id: 19,
    title: "Strip Coaching",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/87eac5e6-fca5-4c14-ada6-dfe6838c04d0/IMG_6933/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "strip-coaching-1.jpg"
  },
  {
    id: 20,
    title: "Me and My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/eaf76013-f68b-4dd0-a05a-05cadd79642f/IMG_7344/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "me-and-coach.jpg"
  },
  {
    id: 20,
    title: "Me and My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/eaf76013-f68b-4dd0-a05a-05cadd79642f/IMG_7344/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "me-and-coach.jpg"
  },
  {
    id: 21,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cb2f091e-d27e-4db3-8c48-6c35e5fc549d/IMG_6882/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-2.jpg"
  },
  {
    id: 22,
    title: "Top Finishers at New Jersey",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/db864cf2-b0d4-49c2-b511-b21328cd6dcc/IMG_6871/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "new-jersey-finishers.jpg"
  },
  {
    id: 23,
    title: "Like Our Necklaces?",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3950bd5c-f366-4bb3-83a9-9e29abb4f939/IMG_6494/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "necklaces.jpg"
  },
  {
    id: 24,
    title: "Twin Sisters",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cfbe8a53-97ec-43a0-bd21-4b28ca9690c2/IMG_6495/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "twin-sisters.jpg"
  },
  {
    id: 25,
    title: "Gold!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/daf68901-a778-4a7c-b324-7a680fdbb0f1/IMG_6607/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "gold.jpg"
  },
  {
    id: 26,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4c03ce8d-3016-473c-a121-0734b4cb77bf/IMG_6606/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-3.jpg"
  },
  {
    id: 27,
    title: "Sisters, Gold & Silver",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a7391106-ead4-40f5-86db-ca9cbf62081d/IMG_6576/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "sisters-gold-silver.jpg"
  },
  {
    id: 28,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/178169eb-e968-4f9d-9126-fe09ed3456bb/IMG_6535/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-4.jpg"
  },
  {
    id: 29,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a61f01e5-b07b-4eaa-9d18-d33bb4577a33/IMG_6497/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-5.jpg"
  },
  {
    id: 30,
    title: "After a Bout",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6c5306ec-7dc0-416c-b695-b6c7a8d43cff/IMG_6492/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "after-bout.jpg"
  },
  {
    id: 31,
    title: "Joy of Competition",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/04511d78-2fc1-4566-a41d-3178c8cb01a4/IMG_6489/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "joy-competition.jpg"
  },
  {
    id: 32,
    title: "Lunge",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e6cb0d2e-d124-4cc7-b373-b5dcfb691336/IMG_4316/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "lunge.jpg"
  },
  {
    id: 33,
    title: "Ready for Competition",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/497fe76a-d270-4ab5-b824-41c68dbda6ef/IMG_4299/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "ready-competition.jpg"
  },
  {
    id: 34,
    title: "Team Picture",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/950b2509-97fb-4c23-bfe4-631ceab5e3ac/img_2193_720/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "team-picture.jpg"
  },
  {
    id: 35,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/fb95d5e6-325b-4cd1-ae90-5181a09f5e6a/391758762_334391665765684_3098217972093215334_n/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-6.jpg"
  },
  {
    id: 36,
    title: "Teammates",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a1a530d-4b76-47a7-9c0c-d29e74ea9bce/img_3501_720/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "teammates-2.jpg"
  },
  {
    id: 37,
    title: "Let's Go!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d264d6c7-e5e0-4d52-97b2-8e649ef40aba/423481238_392138796657637_3490051174660208061_n/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "lets-go.jpg"
  },
  {
    id: 38,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/05389f6f-0c8f-47c0-8890-33abed898587/IMG_1768/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-7.jpg"
  },
  {
    id: 39,
    title: "Podium with My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/1ec80e09-3c51-4fbe-bf51-716d6b99f55b/img_1801_720/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "podium-coach-1.jpg"
  },
  {
    id: 40,
    title: "Nationals Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5315afd4-3e15-4916-8780-efd5573fc430/img_1428_720/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "nationals-podium.jpg"
  },
  {
    id: 41,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9182ff8d-1ec5-4f5c-bee8-dd69612bc8db/IMG_0559/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-8.jpg"
  },
  {
    id: 42,
    title: "Podium with My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/38bdabe2-86fb-48bd-b037-37c1b3dad7bb/B28BCA2D-7936-4DE6-AAD2-00037EDA68102023-02-05_14-14-28_065/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "podium-coach-2.jpg"
  },
  {
    id: 43,
    title: "Podium with My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c78775f7-b229-4cdb-bcba-0ab3af3432a1/423538042_391517573386426_7680556219061742722_n/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "podium-coach-3.jpg"
  },
  {
    id: 44,
    title: "Podium with My Coach",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/196b6dd5-9b4d-4ae8-af81-05cfa5f591d9/429486605_407551731783010_3419632934754159977_n/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "podium-coach-4.jpg"
  },
  {
    id: 45,
    title: "Strip Coaching",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/b1b6ccc8-3315-4600-936b-5065cdbf7691/A454DBB4-8CC0-416F-AAC5-3D2A3D9C3BD4/w=1920,quality=90,fit=scale-down",
    category: "coaches",
    filename: "strip-coaching-2.jpg"
  },
  {
    id: 46,
    title: "Competition",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2f8ad759-55fa-4f26-9e26-178c78387fdb/421251896_387374583800725_2422682524227476910_n/w=1920,quality=90,fit=scale-down",
    category: "competitions",
    filename: "competition.jpg"
  },
  {
    id: 47,
    title: "Sweep!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/ba91cf1e-b8c6-451e-a8d6-becd998fb4ef/422898467_392134389991411_1655892125645446301_n/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "sweep.jpg"
  },
  {
    id: 48,
    title: "Suited Up",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/bb47a790-d172-4faa-9da1-c033449b8322/420750079_388031640401686_8923332985793945968_n/w=1920,quality=90,fit=scale-down",
    category: "classes",
    filename: "suited-up.jpg"
  },
  {
    id: 49,
    title: "Smiles!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/69727e37-42df-4fb7-9a12-212f76bce221/420734624_388031643735019_8532363706279977314_n/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "smiles.jpg"
  },
  {
    id: 50,
    title: "Farmer's Market",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e072aa17-e036-4799-91af-9d4015df0113/406480085_360186379852879_468385810573504659_n/w=1920,quality=90,fit=scale-down",
    category: "community",
    filename: "farmers-market.jpg"
  },
  {
    id: 51,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4b163445-c0c7-494a-9bf6-d65a4e436b6e/395453495_342324501639067_8569665581688188770_n/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-9.jpg"
  },
  {
    id: 52,
    title: "Podium",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0fb0a8bc-9180-4fe0-aa7f-52fc61e6316d/392938728_334961362375381_5028590785379623575_n/w=1920,quality=90,fit=scale-down",
    category: "achievements",
    filename: "podium-10.jpg"
  },
  {
    id: 53,
    title: "Club Pride!",
    url: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/19cbb18d-eebb-4f48-85db-86b3243c6a75/387724207_330045436200307_1331302829030551132_n_edited/w=1920,quality=90,fit=scale-down",
    category: "team",
    filename: "club-pride.jpg"
  }
];

// Create directory if it doesn't exist
const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(galleryDir, filename);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${filename} already exists`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting to download gallery images...');
  
  for (let i = 0; i < galleryImages.length; i++) { // Download all images
    const image = galleryImages[i];
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`✗ Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('Download process completed!');
}

// Run the download
downloadAllImages();
