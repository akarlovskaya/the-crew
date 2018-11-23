import React from 'react';

import styles from './AddMember.module.scss';

const AddMember = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>

        <label htmlFor="origin">Origin</label>
        <input type="text" id="origin"/>

        <label htmlFor="motto">Motto</label>
        <textarea name="motto" id="motto" rows="5" cols="40"/>

        <label htmlFor="textBody">About</label>
        <textarea name="about" id="textBody" rows="7" cols="40"/>

        <input type="submit"/>
      </form>

    </div>
  )
}

export default AddMember;