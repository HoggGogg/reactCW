import React from 'react'

const UserInfo: React.FC = () => (
  <div style={{display:'flex',alignItems:'center',gap:10}}>
    <img src='https://i.pravatar.cc/40' alt='user' style={{width:40,height:40,borderRadius:20}} />
    <span style={{color:'#ffffff'}}>Pretty Man</span>
  </div>
)

export default UserInfo
