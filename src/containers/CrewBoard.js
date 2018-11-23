import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';

import CrewMember from '../components/CrewMember/CrewMember';
import MemberDetails from '../components/MemberDetails/MemberDetails';
import AddMember from '../components/AddMember/AddMember';

import styles from './CrewBoard.module.scss';

class CrewBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      selectedMember: null,
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(response => {
      // store only last 6 users
      const members = response[0].data.slice(-6);
      const texts = response[1].data;
      // add to each member avatar image from robohash api and textBody from /posts
      const updatedMembers = members.map(member => {
        return {
          ...member,
          image: `https://robohash.org/${member.username}?set=set2`,
          text: texts[member.id].body
        }
      });

      this.setState({
        members: updatedMembers
      });
    });
  }

  clickEventHandler = id => {
    const selectedMember = this.state.members.filter(member => id === member.id );

    this.setState({
      selectedMember
    });
  }

  

  render() {
    const { members, selectedMember } = this.state;

    const listOfMembers = members.map(item => (
      <CrewMember key={item.id} 
                  name={item.username} 
                  image={item.image} 
                  origin={item.address}
                  clicked={() => this.clickEventHandler(item.id)}
      />
    ));

    return (
      <div className={styles.Board}>
          <section>
            <h1>Crew Members Board</h1> 
            <ul className={styles.membersContainer}>
              { listOfMembers }
            </ul>
          </section>

          <section>
            <h2 style={{textAlign: 'center'}}>Selected Member Info</h2>
            <MemberDetails member={selectedMember} />
          </section>

          <section>
            <h2>Add New Member</h2>
            <AddMember />
          </section>
      </div>
    );
  }
}

export default CrewBoard;