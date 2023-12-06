import React from 'react';
import Kcee from '../images/Kcee.jpg';
import Norbert from '../images/Norbert.jpg';
import Melvin from '../images/Melvin.JPG';
import John from '../images/John.jpg';
import './Teams.css';



const HeadTeams = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'KCEE WISDOM',
      position: 'CEO',
      photoUrl: Kcee, 
    },
    {
      id: 2,
      name: 'NYQUIST NWAUKWU',
      position: 'CTO',
      photoUrl: Melvin,
    },
    {
        id: 3,
        name: 'MELVIN BENJAMIN',
        position: 'TO',
        photoUrl: Melvin, 
      },
      {
        id: 4,
        name: 'AGBO NORBERT',
        position: 'UX DESIGNER',
        photoUrl: Norbert,
      },
      {
        id: 5,
        name: 'JOHN KERIANS',
        position: 'GRAPHIC DESIGNER',
        photoUrl: John, 
      },
      {
        id: 6,
        name: 'CHRISTOGUNUS',
        position: 'PROFESSIONAL TRADER',
        description: 'Leads the technology and product development teams.',
        photoUrl: John, 
      },
  ];

  return (
    <div className="head-teams-container">
      <h2>OUR HEAD TEAMS WORKING.</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <div className="team-member">
              <img src={member.photoUrl} alt={member.name} className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadTeams;
