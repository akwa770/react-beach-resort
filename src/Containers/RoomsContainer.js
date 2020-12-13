import React from 'react'
import RoomsFilters from '../components/RoomsFilters/RoomsFilters'
import RoomList from '../components/RoomList/RoomList'
import {RoomConsumer} from '../context'
import Loading from '../components/Loading/Loading'

const RoomsContainer = () => {
  return (
    <RoomConsumer>
          {value => {
              const { loading, sortedRooms, rooms } = value
              if (loading) {
                  return <Loading />
              }
              return (<div>
                  hello from RoomsContainer
                  <RoomsFilters rooms={rooms}/>
                  <RoomList rooms={sortedRooms}/>
                </div>)
       }}
    </RoomConsumer>

  )
}

export default RoomsContainer
