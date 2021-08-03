import React from 'react'

import "./newuser.css";

export default function Newuser() {
    return (
        <div className="newUser">
           <h1 className="newUserTitle">New User</h1>
           <form className="newUserForm">
               <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john"/>
               </div>
               <div className="newUserItem">
                    <label>full Name</label>
                    <input type="text" placeholder="john Smith"/>
               </div>
               <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="john@gmail.com"/>
               </div>
               <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
               </div>
               <div className="newUserItem">
                    <label>Phone</label>
                    <input type="password" placeholder="+1 123 456 78"/>
               </div>
               <div className="newUserItem">
                    <label>Address</label>
                    <input type="password" placeholder="New York : USA"/>
               </div>
               <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label for="other">Other</label>
                    </div>
               </div>
               <div className="newUserItem">
                   <label>Active</label>
                   <select className="newUserSelect" name="active" id="active">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
               </div>
           </form>
        </div>
    )
}
