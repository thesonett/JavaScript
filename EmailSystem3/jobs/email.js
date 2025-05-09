const mailer = require('nodemailer')

const employeeDetails = [
    // yyyy-mm-dd
    { name: "Sonett", email: "sonettjsaha@gmail.com", dob: "1999-05-03", lastLogin: "2025-01-03" },
    { name: "Joy", email: "joys0178000@gmail.com", dob: "1998-05-03", lastLogin: "2025-04-10" },
    { name: "Priya", email: "priya@gmail.com", dob: "2001-05-03", lastLogin: "2025-01-03" },
    { name: "Sahil", email: "sahil@gmail.com", dob: "1991-05-03", lastLogin: "2025-02-01" },
    { name: "Ankita", email: "ankita@gmail.com", dob: "1985-05-25", lastLogin: "2025-01-01" }
];

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joys0178000@gmail.com',
        pass: 'woqosigncqqlqxwe'
    }
})

function activeEmployees() {
    const today = new Date()
    const nintyDaysAgo = new Date(today);
    nintyDaysAgo.setDate(nintyDaysAgo.getDate() - 90);

    const totalActiveEmployees = employeeDetails.filter((item) => new Date(item.lastLogin) > nintyDaysAgo)
    return totalActiveEmployees
}


function getAllBirthdayEmployees() {
    const today = new Date().toISOString().split('T')[0].split('-')
    const month = today[1]
    const day = today[2]

    const totalActiveEmployees = activeEmployees()
    
    const employees = totalActiveEmployees.filter((item) => 
        item.dob.split('-')[1] === month && item.dob.split('-')[2] === day
    )

    return employees
}

function sendEmail() {
    const activeEmployees = getAllBirthdayEmployees()
    console.log(activeEmployees)

    if (activeEmployees.length === 0) {
        console.log('🎈 No birthdays today among active employees.');
        return;
    }

    transporter.sendMail({
        from: 'joys0178000@gmail.com',
        to: (activeEmployees.map((item) => item.email)).join(','),
        subject: '🎉 Happy Birthday Darling!',
        text: 'Wish you a very happy birthday. May your all wishes come true!! Enjoy your day :D'
    }, (error, info) => {
        if(error) {
            console.log(error)
            console.log('Mail is not sent due to some error!!')
        }
        else {
            console.log(info.response)
            console.log('Email sent!!')
        }
    })
}

sendEmail()