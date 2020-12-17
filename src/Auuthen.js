import React from 'react'
var firebase=require('firebase')

var config={
        apiKey: "AIzaSyDfr3cfd2jgVkGw4h6UfLqZjty9viZecM4",
        authDomain: "udemyapp-cad80.firebaseapp.com",
        databaseURL: "https://udemyapp-cad80.firebaseio.com",
        projectId: "udemyapp-cad80",
        storageBucket: "udemyapp-cad80.appspot.com",
        messagingSenderId: "764813343577",
        appId: "1:764813343577:web:26f0f0cb8e7dd3fda26a48",
        measurementId: "G-7BRST840WJ"
      
}
firebase.initializeApp(config)

function Auuthen() {
    return (
        <div>
            <input type="email" placeholder="Enter your Email" ref="email" /><br />
            <input type="password" placeholder="Enter your password" ref="password" /><br />
<button>Log in</button>
<button>Log in</button>
<button>Log in</button>
        </div>
    )
}

export default Auuthen
