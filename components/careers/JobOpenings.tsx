export default function JobOpenings() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Bay Area Fencing Club is one of the fastest growing clubs in the country with
            our headquarters located in the vibrant town of Los Gatos in the beautiful and
            most dynamic San Francisco Bay Area where many world class companies call home. Bay
            Area Fencing Club is excited to open a new club in the City of Pleasanton in
            the ever growing robust Tri Valley Area.
          </p>
        </div>

        {/* Job Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Title:</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Fencing Coach (Foil), Fencing Coach (Saber)
          </p>
        </div>

        {/* Job Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Summary:</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We are seeking a highly skilled and passionate Foil Coach to join our esteemed
            fencing program. As a Fencing Coach, you will be responsible for instructing and
            guiding athletes in the art of fencing, developing their skills, and fostering a
            positive and supportive learning environment. The ideal candidate should
            possess extensive knowledge and experience in fencing techniques, strategies, and
            training methodologies. This role requires exceptional coaching abilities, excellent
            communication skills, and a strong commitment to promoting sportsmanship and
            personal growth among athletes.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsibilities:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>Develop and implement comprehensive training programs tailored to the needs and skill levels of individual fencers.</li>
            <li>Instruct athletes on proper fencing techniques, footwork, blade-work, and tactical strategies.</li>
            <li>Conduct group and individual training sessions, ensuring a safe and effective learning environment.</li>
            <li>Evaluate fencers' performance and provide constructive feedback and guidance for improvement.</li>
            <li>Prepare athletes for competitions, including physical conditioning, mental preparation, and game strategies.</li>
            <li>Organize and supervise practice sessions, drills, and sparring exercises.</li>
            <li>Foster a positive team culture that emphasizes sportsmanship, discipline, and respect.</li>
            <li>Collaborate with other coaches, staff members, and parents to support the overall success of the fencing program.</li>
            <li>Stay updated with the latest advancements and trends in fencing techniques and training methods.</li>
          </ul>
        </div>

        {/* Qualifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Qualifications:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>Extensive experience as a Fencing Coach, preferably at the competitive level. Previous athletes with outstanding international competition results preferred but not required.</li>
            <li>Demonstrated expertise in coaching and training athletes of different age groups and skill levels.</li>
            <li>Strong interpersonal and communication skills, with the ability to motivate and inspire athletes.</li>
            <li>Possession of relevant certifications or credentials from recognized fencing organizations or federations is highly desirable.</li>
            <li>CPR and first aid certifications are a plus.</li>
            <li>Ability to work flexible hours, including evenings and weekends, to accommodate training and competition schedules.</li>
            <li>Proficient English skills required. Will sponsor work visa to the United States for qualified candidates.</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We offer competitive compensation, health insurance, and the opportunity to work
            with dedicated athletes in a supportive and dynamic environment. Will offer
            immigration assistance for highly qualified coaches. If you are a passionate
            Fencing Coach committed to helping athletes reach their full potential, we invite you
            to apply for this position. Visit our web site bayareafencing.club to learn more
            about us.
          </p>
        </div>

        {/* Application Instructions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Apply:</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            To apply, please submit your resume, cover letter, and any relevant
            certifications or references to: 
            <a href="mailto:info@bayareafencing.club" className="text-red-600 hover:text-red-700 font-semibold ml-1">
              info@bayareafencing.club
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
