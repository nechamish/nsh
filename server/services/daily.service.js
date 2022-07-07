const fs = require('fs/promises');
const uuid = require('uuid');
const uuidv4 = uuid.v4;

//get all users
async function getDaily(id) {
    console.log("id "+id);
    const data = await getAllJson();
    const user = await data.users.find(u=>u.id===parseInt(id));
    console.log(user);
    return user.managerDaily;
}



//get all the json
async function getAllJson() {
    const dataFile = await fs.readFile('./users.json');
    let data = JSON.parse(dataFile);
    return data;
}

//update json
const updateJson = async (data) => fs.writeFile('./users.json', JSON.stringify(data));

async function addDaily(id, d) {
    console.log(id)
        let daily = await getDaily(id);
        daily.push(d);
        const data = await getAllJson() || [];
        data.users.forEach(u => {
            if(user.id===parseInt(id)){
                u.managerDaily  =daily;
            }
        });
        await updateJson(data);
        return daily;
    }

async function findByIdAndDelete(id){
    const data = await getAllJson();
    const index =await data.users.findIndex(u => u.id === parseInt(id));
    data.users.splice(index, 1);
    try {
        await updateJson(data);
        return 'success!'
    } catch (err) {
        console.error(err)
        return 'faild'
    }
}

const updateUser = async (id, user) => {
    const data = await getAllJson();
    const _user = await data.users.find(u => u.id === parseInt(id));
    Object.assign(_user, user);
    await updateJson(data);
    return _user;
}

module.exports = {
    getDaily, 
    addDaily
}