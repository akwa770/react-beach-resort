import React from 'react'
import Rooms from '../../pages/Rooms'
import Room from '../Room/Room'

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
      return <div className="empty-search">
          <h3>unfortunately no rooms matched your search parameters!</h3>
      </div>
  }
    console.log(rooms);
  return (
    <section className='roomslist'>
      <div className='roomsList-center'>
        {rooms.map(item => {
            return <Room key={item.id} room={item} />
         })}
      </div>
    </section>
  )
}

export default RoomList
