import React, { Component } from 'react';

import CrewMember from '../components/CrewMember/CrewMember';
import MemberDetails from '../components/MemberDetails/MemberDetails';
import AddMember from '../components/AddMember/AddMember';

import styles from './CrewBoard.module.scss';

class CrewBoard extends Component {
  render() {
    return (
      <div>
          <section>
            <h1>Board</h1> 
            <div className={styles.membersContainer}>
              <CrewMember />
              <CrewMember />
              <CrewMember />
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