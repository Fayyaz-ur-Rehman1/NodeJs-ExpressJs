const data = require("../data.json");
const fs = require("fs");
const path = require("path");

const htmlfolder = (req, res) => {
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
                       <td>${elm["job Title"]}</td>
                   </tr>
               `).join('')}
           </tbody>
    </table>
    `

    res.send(html)

}

const apidata = (req, res) => {
    return res.json(data);
}

const apigetid = (req, res) => {
    const id = Number(req.params.id);
    const user = data.find(elm => elm.id === id);
    return res.json(user);
}


const adddata = (req, res) => {
    const body = req.body;

    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body["job Title"]) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newData = {
        id: data.length + 1,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        "job Title": body["job Title"]
    };
    data.push(newData);

    const filePath = path.resolve(__dirname, "../data.json");

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Failed to write data:", err);

            return res.status(500).json({ error: "Failed to save data" });
        }
        res.status(201).json(newData);
    });
};

module.exports = { htmlfolder, apidata, apigetid, adddata }