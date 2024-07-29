// Facebook SDK Initialization
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_APP_ID', // 862267692418794
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
    });
};

// Function to check Facebook login status
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

// Callback function to handle Facebook login status
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        // The user is logged into Facebook and your app
        console.log('User is logged in:', response);
        // Fetch user details or handle successful login
    } else {
        // The user is not logged into Facebook or your app
        console.log('User is not logged in:', response);
        // Prompt user to log in or handle login failure
    }
}