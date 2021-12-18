import React from 'react';

    const UserCard = ({ allPeers }) => {
      return (
        <div>
          <center><h1>Peers Available</h1></center>
          {allPeers.map((data) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{data.body}</h6>
                
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default UserCard