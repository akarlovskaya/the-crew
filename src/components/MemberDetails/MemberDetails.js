import React, { Component } from 'react';


import styles from './MemberDetails.module.scss';

class MemberDetails extends Component {

  render() {
    const { member } = this.props;
    let details = <h3 style={{textAlign: 'center'}}>Click on one of members to see details</h3>;

    if (member) {
      console.log(member);
      const { image, text, username } = member[0];
      // destructuring nested properties
      const {address: {city}} = member[0]; // origin
      const {address: {street}} = member[0]; // planet
      const {company: {catchPhrase}} = member[0]; // motto
      const {address: {geo}} = member[0]; // coordinates

      console.log(geo);

      details = 
        <React.Fragment>
          <article className={styles.detailsWrapper}>

            <div>
              <img src={image} alt={`${username} avatar`}/>
            </div>

            <section>
              <h3>{username}</h3>
              <p>
                <strong>Origin: </strong>
                {city}
              </p>
              <p>
                <strong>Planet: </strong>
                {street} (coordinates: {geo.lat}, {geo.lng})
              </p>
              <p><strong>About: </strong> {text}</p>
              <p>
                <strong>Motto: </strong>
                {catchPhrase}
              </p>
            </section>

          </article>
        </React.Fragment>
    }
    return details;
  }
}

export default MemberDetails;