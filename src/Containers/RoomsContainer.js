import React from "react";
import RoomsFilters from "../components/RoomsFilters/RoomsFilters";
import RoomList from "../components/RoomList/RoomList";
import { RoomConsumer } from "../context";
import Loading from "../components/Loading/Loading";

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilters rooms={rooms} />
            <h6 className="text-center">{sortedRooms.length > 1 ? sortedRooms.length + " rooms" : sortedRooms.length + " room"} found!</h6>
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
