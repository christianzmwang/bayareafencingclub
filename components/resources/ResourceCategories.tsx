export default function ResourceCategories() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Essential Information for Parents
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Although much effort goes into educating young fencers, their parents often have
              to figure things out on their own. We hope that the resources provided below
              can answer some of the questions about navigating this wonderful sport!
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Getting Started
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* USA Fencing Membership */}
            <div className="bg-red-50 dark:bg-red-900/20 p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                USA Fencing Membership Required
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                USA Fencing Membership is required to fence at BAFC. Once you have a membership, inform the front desk of your membership number.
              </p>
              <a 
                href="https://member.usafencing.org/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Sign Up for USA Fencing
              </a>
            </div>

            {/* Equipment Guide */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Equipment Purchase Guide
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Download our comprehensive guide to purchasing fencing equipment, including recommended brands, sizing, and where to buy.
              </p>
              <a 
                href="https://drive.google.com/file/d/1zB3DVa6xoG4pPfM7zu6f-jHrtdIkEHdV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Equipment Guide
              </a>
            </div>
          </div>
        </div>

        {/* Video Guides Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Step-by-Step Video Guides
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* USA Fencing Registration Video */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to Obtain a USA Fencing Membership
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this video guide to learn how to register for your USA Fencing membership, which is required for all competitive fencing activities.
              </p>
              
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1LFVJUlZO6Nf3VZeJK5STfKVk50QJcWjG/preview"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title="USA Fencing Membership Registration Guide"
                  ></iframe>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Visit{' '}
                <a 
                  href="https://member.usafencing.org/signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold underline"
                >
                  USA Fencing registration
                </a>
                {' '}to get started.
              </p>
            </div>

            {/* Tournament Registration Video */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to Register for Local Tournaments
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this video guide to learn how to register for local fencing tournaments and navigate the registration process.
              </p>
              
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1cLCZLWhlP6-IcJbSRUEFjzY8dz7Ar2zn/preview"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title="Local Tournament Registration Guide"
                  ></iframe>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Additional tournament registration information and procedures will be provided through club communications.
              </p>
            </div>

            {/* Booking System Video */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to Use Our{' '}
                <a 
                  href="https://bayareafencing.pike13.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  Booking Website
                </a>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Watch this video guide to learn how to navigate our Pike13 booking system to schedule lessons, view class schedules, and manage your account.
              </p>
              
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1f1k3VewVwHIOXerioXZnJeJNcNHSfhIF/preview"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    title="Pike13 Booking System Guide"
                  ></iframe>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Visit{' '}
                <a 
                  href="https://bayareafencing.pike13.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold underline"
                >
                  bayareafencing.pike13.com
                </a>
                {' '}to access the booking system.
              </p>
            </div>
          </div>
        </div>

        {/* Tournament Checklist Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Fencing Tournament Checklist
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Documentation & Equipment */}
            <div className="flex flex-col gap-8">
              
              {/* Documentation */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Required Documentation
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Proof of USA Fencing Membership
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Proof of Age (USA Fencing has verification program but having proof is recommended)
                  </li>
                </ul>
              </div>

              {/* Equipment Maintenance */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 flex-1">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Equipment Maintenance Kit
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Screwdriver
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Wrench alley (if your athlete uses pistol grip)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    Foil tape for foil
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    First-Aid kit: Ibuprofen, band-aid, ice pack, etc.
                  </li>
                </ul>
              </div>
            </div>

            {/* Required Equipment */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Required Equipment
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Equipment in <strong>bold</strong> must pass equipment check at regional and national events
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>2 working weapons</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>2 working body cords</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>2 working mask cord</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Mask</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Lame (foil or saber)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Glove (saber must be FIE saber glove)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Chest protector (Mandatory for females) (Mandatory FIE for Foil)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Underarm protector</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Fencing jacket (must overlay knickers by 10 inches)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Fencing pants (knickers)</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <strong>Socks (knee-high, must cover leg completely, up to the fencing knickers)</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            {/* Food & Hydration */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Food & Hydration
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Water bottle or energy drink</li>
                <li>• Snacks: Fruit, trail mix, veggies</li>
                <li>• Energy bars</li>
              </ul>
            </div>

            {/* Extra Clothing */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Extra Clothing
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Change of clothes</li>
                <li>• Extra T-shirt</li>
                <li>• BAFC Warm-up jacket</li>
                <li>• Face towel</li>
              </ul>
            </div>

            {/* Extras */}
            <div className="bg-white dark:bg-gray-800 shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Extras
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Money for snacks/lunch</li>
                <li>• Portable chair (parent)</li>
                <li>• Entertainment for breaks</li>
              </ul>
            </div>
          </div>

          {/* Policy Note */}
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 p-6 border-l-4 border-yellow-400">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              <strong>Important:</strong> Please familiarize yourself with all club competition policies on our website.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 dark:bg-gray-800 p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Experience what we're all about with a free trial class
          </p>
          <a
            href="https://calendly.com/lisaposthumus-pfn_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 dark:bg-red-900 hover:bg-red-800 dark:hover:bg-red-950 text-white font-bold py-3 px-8 transition-colors duration-200"
          >
            Schedule Free Trial Class
          </a>
        </div>
      </div>
    </section>
  )
}
