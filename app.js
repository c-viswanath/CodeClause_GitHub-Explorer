myname=document.getElementById('name');
myusername=document.getElementById('username');
myfollowers=document.getElementById('followers');
myfollowing=document.getElementById('following');
myrepos=document.getElementById('public_repos');
myimage=document.getElementById('image');
myViewmore=document.getElementById('viewmoreatag');
const apiUrl= "https://api.github.com/users/c-viswanath";
async function getMyInfo(){
    const response=await fetch(apiUrl);

    if(response.status==404){
        alert("Error fetcing the Details!")
    }else{
        var data= await response.json();

        myusername.innerHTML=data.login;
        myname.innerHTML=data.name;
        myfollowers.innerHTML=data.followers;
        myfollowing.innerHTML=data.following;
        myrepos.innerHTML=data.public_repos;
        myimage.src=data.avatar_url;
        myViewmore.href=data.html_url;
    }
}
getMyInfo();


searchnameinput=document.getElementById('inputsearch');
searchname=document.getElementById('namesearch');
searchusername=document.getElementById('usernamesearch');
searchfollowers=document.getElementById('followerssearch');
searchfollowing=document.getElementById('followingsearch');
searchrepos=document.getElementById('public_repossearch');
searchimages=document.getElementById('imagesearch');
searchviewmore=document.getElementById('viewmoresearch');
searchbutton=document.getElementById('searchbutton');

const apiUrlSearch= "https://api.github.com/users/";
async function getSearchInfo(username){
    const response=await fetch(apiUrlSearch+username);

    if(response.status==404){
        alert("Error fetcing the Details!")
    }else{
        var datasearch= await response.json();

        searchusername.innerHTML=datasearch.login;
        searchname.innerHTML=datasearch.name;
        searchfollowers.innerHTML=datasearch.followers;
        searchfollowing.innerHTML=datasearch.following;
        searchrepos.innerHTML=datasearch.public_repos;
        searchimages.src=datasearch.avatar_url;
        searchviewmore.href=datasearch.html_url;
    }
}

searchbutton.addEventListener("click",()=>{
    getSearchInfo(searchnameinput.value);
})
