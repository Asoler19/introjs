var user ={
    name: 'Alejandro Soler',
    companyName: 'Techlaunch.io',
    address: '742 nw 132th ave Miami, FL 33182',
    email: 'asoler@techlaunch.io',
    picture: "kong.jpg"

}

var invoices = [
    {
        inv_id: "0156321",
        companyName: user.companyName,
        date: "9/7/2017",
        order: "Dell Computers",
        amount: 3,
        cost: 3457.67,
        paid: 3457.67,
    },
    {
        inv_id: "0145632",
        companyName: user.companyName,
        date: "1/5/2017",
        order: "HP Printers",
        amount: 2,
        cost: 248.00,
        paid: 150.00,
    },
    {
        inv_id: "0132110",
        companyName: user.companyName,
        date: "6/14/2016",
        order: "Marketing Coffee Mugs",
        amount: 160,
        cost: 414.00,
        paid: 414.00,
    },
    {
        inv_id: "0134560",
        companyName: user.companyName,
        date: "4/10/2016",
        order: "AC Fans",
        amount: 10,
        cost: 200.00,
        paid: 200.00,
    },
    {
        inv_id: "5121310",
        companyName: user.companyName,
        date: "3/14/2016",
        order: "Video Projectors",
        amount: 180,
        cost: 500.00,
        paid: 500.00,
    },
    {
        inv_id: "0737170",
        companyName: user.companyName,
        date: "1/09/2016",
        order: "Chairs",
        amount: 100,
        cost: 300.00,
        paid: 300.00,
    }
]

   

document.querySelector('.name').textContent = user.name;
document.querySelector('.company_name').textContent = user.companyName;
document.querySelector('.address').textContent = user.address;
document.querySelector('.email').textContent = user.email;

//  adding invoices
for (var i=0; i<invoices.length; i++){
    document.querySelector('.invoiceContainer').innerHTML += `
    <div class="invoice" id=${invoices[i].inv_id}>
        Invoice #:  <br />
        <p>${invoices[i].inv_id} </p>
        Company Name:   <br />
        <p>${invoices[i].companyName} </p>
        Date:  <br />
        <p>${invoices[i].date} </p>
        Order:   <br />
        <p>${invoices[i].order} </p>
        Amount:   <br />
        <p>${invoices[i].amount} </p>
        Cost:   <br />
        <p>$${invoices[i].cost} </p>
        Paid:   <br />
        <p>$${invoices[i].paid} </p>
        Owed:   <br />
        <p>$${invoices[i].cost - invoices[i].paid} </p>
        Paid:   <br />
        <p>$${invoices[i].paid} </p>
    </div> 
    `   
}