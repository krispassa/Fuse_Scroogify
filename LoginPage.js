function login_clicked()
{
    // TODO: validate login credentials

    router.push("home");
}

function newUser_clicked()
{
    // TODO: validate login credentials

    router.push("register");
}

module.exports = {
  newUser_clicked: newUser_clicked,
  login_clicked: login_clicked
}
