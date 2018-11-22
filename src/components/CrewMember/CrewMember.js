import React from 'react';

import styles from './CrewMember.module.scss';

const CrewMember = (props) => {

  if (props) {
    const { image, name, origin } = props;
    return (
      <div className={styles.infoContainer}>
        <img src={image} alt={`${name} avatar`}/>
        <h2>{name}</h2>
        <p><strong>Origin:</strong> {origin.city} </p>
        <p><strong>Planet:</strong> {origin.street} <br/>(coordinates: {origin.geo.lat}, {origin.geo.lng}) </p>
      </div>
    )
  }
}

export default CrewMember;
