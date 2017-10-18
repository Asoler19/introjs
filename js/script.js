var user ={
    name: 'Alejandro Soler',
    companyName: 'Techlaunch.io',
    address: '742 nw 132th ave Miami, FL 33182',
    email: 'asoler@techlaunch.io',
    picture: "kong.jpg"

}

document.querySelector('.name').textContent = user.name;
document.querySelector('.company_name').textContent = user.companyName;
document.querySelector('.address').textContent = user.address;
document.querySelector('.email').textContent = user.email;

