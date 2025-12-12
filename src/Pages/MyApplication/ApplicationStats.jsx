import React from 'react';
import { use } from 'react';
import AuthContext from '../../Contexts/AuthContext';

const ApplicationStats = () => {
    
       const { user } = use(AuthContext);

    return (
        <div className="w-full max-w-sm mx-auto rounded-xl shadow-lg bg-base-100 p-5 my-5">
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt={user?.displayName} data-reference="no-reference"/>
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-bold">{user?.displayName}</h2>
          <p className="text-sm opacity-70">{user?.email}</p>
          {/* <span className="badge badge-primary badge-sm mt-1">admin</span> */}
        </div>
      </div>
    </div>
    );
};

export default ApplicationStats;