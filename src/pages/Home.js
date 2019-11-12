import React from 'react'
import BeeClient from "../components/BeeClient";
const Home = (props) => {
  return (
    <div>
      <div className='Page__content'>
        <BeeClient />
      </div>
    </div>
  )
};

Home.propTypes = {};
export default Home