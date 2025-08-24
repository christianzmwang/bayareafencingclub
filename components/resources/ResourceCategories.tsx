export default function ResourceCategories() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Although much effort goes into educating young fencers, their parents often have
            to figure things out on their own. We hope that the resources provided below
            can answer some of the questions about navigating this wonderful sport!
          </p>
        </div>

        {/* USA Fencing Membership */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>USA Fencing Membership is required to fence at BAFC:</strong> To sign up, please click{' '}
            <a 
              href="https://member.usafencing.org/signup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-semibold underline"
            >
              HERE
            </a>
            . Once you have a membership inform the front desk of your membership number.
          </p>
        </div>

        {/* Equipment Guide */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Please download{' '}
            <a 
              href="https://drive.google.com/file/d/1zB3DVa6xoG4pPfM7zu6f-jHrtdIkEHdV/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-semibold underline"
            >
              here
            </a>
            {' '}for a guide to purchasing equipment.
          </p>
        </div>

        {/* How-to Guides Section */}
        <div className="mb-12">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to obtain a USFA membership
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Watch this video guide to learn how to register for your USA Fencing membership, which is required for all competitive fencing activities.
              </p>
              
              {/* Video Embed */}
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1LFVJUlZO6Nf3VZeJK5STfKVk50QJcWjG/preview"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
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

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to register for a Local tournament:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Watch this video guide to learn how to register for local fencing tournaments and navigate the registration process.
              </p>
              
              {/* Video Embed */}
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1cLCZLWhlP6-IcJbSRUEFjzY8dz7Ar2zn/preview"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
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

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                How to use our{' '}
                <a 
                  href="https://bayareafencing.pike13.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 underline"
                >
                  booking website
                </a>
                :
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Watch this video guide to learn how to navigate our Pike13 booking system to schedule lessons, view class schedules, and manage your account.
              </p>
              
              {/* Video Embed */}
              <div className="mb-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1f1k3VewVwHIOXerioXZnJeJNcNHSfhIF/preview"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
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

        {/* Tournament Checklist */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Fencing Tournament Checklist
          </h2>

          {/* Documentation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Documentation:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Proof of USA Fencing Membership</li>
              <li>Proof of Age: USA Fencing has verification program but having proof is a good idea</li>
            </ul>
          </div>

          {/* Equipment */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Equipment: <span className="text-sm font-normal">(equipment <strong>bolded</strong> must be equipment check at both regional and national events)</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li><strong>2 working weapons</strong></li>
              <li><strong>2 working body cords</strong></li>
              <li><strong>2 working mask cord</strong></li>
              <li><strong>Mask</strong></li>
              <li><strong>Lame (foil or saber)</strong></li>
              <li><strong>Glove (saber must be FIE saber glove)</strong></li>
              <li><strong>Chest protector (Mandatory for females) (Mandatory FIE for Foil)</strong></li>
              <li><strong>Underarm protector</strong></li>
              <li><strong>Fencing jacket (must overlay knickers by 10 inches)</strong></li>
              <li><strong>Fencing pants (knickers)</strong></li>
              <li><strong>Socks (knee-high, must cover leg completely, up to the fencing knickers)</strong></li>
            </ul>
          </div>

          {/* Equipment Maintenance Kit */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Equipment maintenance kit:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Screwdriver</li>
              <li>Wrench alley (if your athlete uses pistol grip)</li>
              <li>Foil tape for foil</li>
              <li>First-Aid kit: Ibuprofen, band-aid, ice pack, etc.</li>
            </ul>
          </div>

          {/* Food */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Food:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Water bottle or energy drink</li>
              <li>Snacks for in between rounds: Fruit, trail mix, veggies, energy bars</li>
            </ul>
          </div>

          {/* Extra Clothing */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Extra clothing:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Change of clothes for post fencing/Extra T-shirt</li>
              <li>BAFC Warm-up jacket</li>
              <li>Face towel</li>
            </ul>
          </div>

          {/* Extras */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Extras:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>Money for snacks, lunch, etc</li>
              <li>Portable or folding chair (parent)</li>
              <li>Entertainment for breaks between bouts</li>
            </ul>
          </div>

          {/* Policy Note */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Please familiarize yourself with all club competition policies on club website.
            </p>
          </div>
        </div>

        {/* Try a Free Trial Class */}
        <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Experience what we're all about with a free trial class
          </p>
          <a
            href="https://calendly.com/lisaposthumus-pfn_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 dark:bg-red-900 hover:bg-red-800 dark:hover:bg-red-950 text-white font-bold py-3 px-8 transition-colors duration-200"
          >
            Free Trial Class
          </a>
        </div>
      </div>
    </section>
  )
}
