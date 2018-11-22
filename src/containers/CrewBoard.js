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
      texts: []
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
      // add to each member avatar image
      const updatedMembers = members.map(member => {
        return {
          ...member,
          image: `https://robohash.org/${member.username}?set=set2`
        }
      })

      this.setState({
        members: updatedMembers,
        texts: response[1].data
      });
    });
  }

  

  render() {
    const { members, texts } = this.state;
    
    // create new obj with updated members with text property
    const updatedMemberObjs = members.map(member => {
      member.text = '';

      for ( let i = 0; i < members.length; i++ ) {
        if ( member.id === texts[i].id ) {
          member.text = texts[i].body;
        }
      }
      return member;
    });

    const listOfMembers = updatedMemberObjs.map(item => (
      <CrewMember key={item.id} 
                  name={item.username} 
                  image={item.image} 
                  origin={item.address}
      />
    ));
    console.log(updatedMemberObjs);

    return (
      <div>
          <section>
            <h1>Crew Members Board</h1> 
            <div className={styles.membersContainer}>
              { listOfMembers }
            </div>
          </section>

          <section>
            <MemberDetails />
          </section>

          <section>
            <AddMember />
          </section>
      </div>
    );
  }
}

export default CrewBoard;