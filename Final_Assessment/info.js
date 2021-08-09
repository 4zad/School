/*
    ==================================================
    Final Project
    ==================================================
    Name    : Muhammad Ahmed
    ID      : 146908207
    Email   : mahmed224@myseneca.ca
    Section : NAA
    Date    : 05-08-2021
*/

insertErr = (errorStr) =>
{
    let errPanel = document.getElementById('panel');
    let errContainer = document.createElement('p');
    let newline = document.createElement('br');
    let error = document.createTextNode(errorStr);

    errContainer.appendChild(error);
    errPanel.appendChild(errContainer);
    errPanel.appendChild(newline);
}

deleteChild = () =>
{
    let parent = document.getElementById('panel')

    child = parent.lastElementChild;
    while (child)
    {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}

password = () =>
{
    let flag = true, loopFlag, i;

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    //password match validation
    for (i = 0, loopFlag = true; i < password.length && loopFlag; i++)
    {
        if (password[i] != confirmPassword[i])
        {
            flag = false;
            loopFlag = false;
            insertErr('Password fields must match.');
        }
    }
    //password length validation
    if (password.length != 6)
    {
        if (flag) flag = false;
        insertErr('Password must be exactly 6 characters in length.');
    }
    //starts with alphabet validation
    if (!(/[a-zA-Z]/).test(password[0]))
    {
        if (flag) flag = false;
        insertErr('Password must begin with an letter.');
    }
    //includes an uppercase validation
    if (!(/.*[A-Z].*/).test(password))
    {
        if (flag) flag = false;
        insertErr('Password must contain atleast 1 uppercase.');
    }
    //includes a digit validation
    if (!(/.*[0-9].*/).test(password))
    {
        if (flag) flag = false;
        insertErr('Password must contain atleast 1 digit.');
    }

    return flag;
}

username = () =>
{
    let flag = true;

    const username = document.getElementById('username').value;

    //starts with alphabet validation
    if (!(/[a-zA-Z]/).test(username[0])) {
        if (flag) flag = false;
        insertErr('Username must begin with an letter.');
    }

    return flag;
}

validate = (form) =>
{
    let flag = true;

    deleteChild();
    if (flag) flag = password();
    else password();
    if (flag) flag = username();
    else username();
    if (flag) insertErr('SUCCESS!')

    return flag;
}

