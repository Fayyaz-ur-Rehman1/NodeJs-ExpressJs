const express = require("express");
const data = require("./fayyaz.json")
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

// list all user with HTML document
app.get("/users", (req, res) => {
    const html = `
     <table border="1px"> 
     <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address</th>
                </tr>
            </thead>

        <tbody>
                ${data.map(elm => `
                    <tr>
                        <td>${elm.id}</td>
                        <td>${elm.first_name}</td>
                        <td>${elm.last_name}</td>
                        <td>${elm.email}</td>
                        <td>${elm.gender}</td>
                        <td>${elm.ip_address}</td>
                    </tr>
                `).join('')}
            </tbody>
     </table>
    `
    res.send(html);
})

// List all user data with JSON formet
app.get("/users/api", (req, res) => {
    res.json(data);
})

// Get Specific User
app.get("/users/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.find(elm => elm.id === id);
    res.json(user);
});

//Edit specific User Info
app.patch("/users/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedData = req.body;
    const findUser = data.find(elm => elm.id === id);
    if (!findUser) {
        return res.status(404).json({ error: "User not found" });
    } else if (updatedData.first_name) {
        findUser.first_name = updatedData.first_name;
    } else if (updatedData.email) {
        findUser.email = updatedData.email;
    }

    fs.writeFile("./fayyaz.json", JSON.stringify(data), () => {
        res.json({ success: "successfully patched", updatedData: findUser })
    })
    res.send(findUser);
})

// delete specfic user info
app.delete("/users/api/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.findIndex(elm => elm.id === id);

    if (user === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    const deletedUser = data.splice(user, 1);

    fs.writeFile("./fayyaz.json", JSON.stringify(data), () => {
        res.json({ success: "User deleted", deletedUser: deletedUser[0] });
    })
})

// create new user 
app.post("/users/api", (req, res) => {
    const body = req.body;


    const newUser = {
        id: data.length + 1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address: body.ip_address
    };

    data.push(newUser);


    fs.writeFile("./fayyaz.json", JSON.stringify(data), () => {
        res.status(201).json(newUser);
    });
});

app.listen(PORT, console.log(`Server is Start at Port ${PORT}`))