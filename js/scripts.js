$(document).ready(function(){
    $('#searchUser').on("keyup", function(e){
        let username = e.target.value;


        $.ajax({
            url:"https://api.github.com/users/"+username,
            data:{
                client_id: "7e36be3f5fe7b3a7f155",
                client_secret:"e0a3e732be410e4a30ee31496126e1a723a8f50a"
            }
        }).done(function(user){
            $("#profile").html(`
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">${user.name}</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="thumbnail avatar" src="${user.avatar_url}">
                                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">Go to profile</a>
                            </div>
                            <div class="col-md-9">
                                <span class="label label-default">Public Repositories: ${user.public_repos}</span>
                                <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                                <span class="label label-success">Followers: ${user.followers}</span>
                                <span class="label label-info">Follwoing: ${user.following}</span>
                                <br>
                                <br>
                                <ul class="list-group">
                                    <li class="list-group-item">Bio: ${user.bio}</li>
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since ${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});