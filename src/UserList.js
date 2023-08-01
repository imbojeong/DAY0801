import './App.css';

function User({user}) {
    return(
        <div>
            <b>{user.username}</b>
            <b>{user.email}</b>
        </div>
    );
}
function UserList(){

    const users = [
        {
            id :1,
            username : "qh",
            email: "qh@naver.com"
        },
        {
            id :2,
            username : "wjd",
            email: "wjd@naver.com"
        },
        {
            id :3,
            username : "wjd1",
            email: "wjd1@naver.com"
        }


    ];
    return(
        <div>

            <User user={users[2]} />

        </div>
    )
}
export default UserList;



{/*
                <b>이름 : {users[0].username}</b>
                <br/>
                <b>이메일 : {users[0].email}</b>
                <b>이름 : {users[1].username}</b>
                <br/>
                <b>이메일 : {users[1].email}</b>
                <b>이름 : {users[2].username}</b>
                <br/>
                <b>이메일 : {users[3].email}</b>
*/}