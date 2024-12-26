import React from 'react';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Zain',
      role: 'Frontend Developer',
      bio: 'I am a passionate frontend developer with expertise in React, Next.js, and modern UI/UX design principles. I love creating interactive and visually appealing user interfaces.',
      photo: '/path-to-your-photo.jpg', // Replace with your actual photo path
      skills: ['React', 'Next.js', 'Firebase', 'GSAP', 'Tailwind CSS'],
    },
    {
      name: 'Your Teammate',
      role: 'Backend Developer', // Replace this role with the actual role
      bio: 'A highly skilled backend developer who specializes in creating efficient and secure APIs. Always enthusiastic about solving complex problems.', // Replace with the actual bio
      photo: '/path-to-teammate-photo.jpg', // Replace with your teammate's photo path
      skills: ['Node.js', 'MongoDB', 'Express', 'GraphQL'], // Replace with actual skills
    },
  ];

  return (
    <section className="about-us-section py-12 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="mission-vision text-center mb-12">
          <p className="text-lg font-semibold mb-4">
            We are a dynamic duo committed to creating innovative web applications that solve real-world problems and provide exceptional user experiences.
          </p>
          <p className="text-gray-700">
            Our mission is to bring creativity and functionality together to develop projects that make a difference. With a passion for learning and growth, we aim to push the boundaries of technology and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-white p-6 rounded-lg shadow-neumorphic text-center transition-transform hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-inner-neumorphic"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <h4 className="text-lg font-semibold text-gray-600 mb-4">{member.role}</h4>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <div className="skills">
                <h4 className="text-lg font-semibold mb-2">Skills & Technologies</h4>
                <ul className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="extra-content mt-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <p className="text-gray-700 mb-6">
            Our team is dedicated to delivering quality projects with cutting-edge technology and user-focused design. We believe in collaboration, innovation, and excellence.
          </p>
          <p className="text-gray-700">
            Together, we bring a blend of creativity and technical expertise to every project, ensuring it stands out and meets the needs of users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
