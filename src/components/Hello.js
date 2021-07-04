import React from 'react';

function Hello({ user }) {
    return user.name ? <h1>안녕하세요! {user.name}</h1> : <button>Login</button>;
}

export default Hello;