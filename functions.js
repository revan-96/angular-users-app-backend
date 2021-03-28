const nameAndIdOnly = (users) => {
    console.log(users)
    return users.map(user=>{
        return {id: user.id, first_name: user.first_name}
    })
}

module.exports = {
    nameAndIdOnly
}
