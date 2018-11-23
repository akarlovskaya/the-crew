import React from 'react';

import styles from './CrewMember.module.scss';

const CrewMember = (props) => {

  if (props) {
    const { image, name, origin } = props;
    return (
      <li className={styles.infoContainer} onClick={props.clicked}>
        <a href="#">
          <img src={image} alt={`${name} avatar`}/>
          <h2>{name}</h2>
          <p><strong>Origin:</strong> {origin.city} </p>
          <p><strong>Planet:</strong> {origin.street}</p>
          {/* <br/>(coordinates: {origin.geo.lat}, {origin.geo.lng}) */}
        </a>
      </li>
    )
  }
}

export default CrewMember;
