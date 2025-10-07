const users = [
{ id: 1, name: "John", isAdmin: false, isSubscriptionPaid: false },
{ id: 2, name: "Robert", isAdmin: false, isSubscriptionPaid: true },
{ id: 3, name: "Piere", isAdmin: true, isSubscriptionPaid: true }
];

function isAuthenticated(requette, reponse, next) {
    const token = requette.headers.authorization;
    const tokenKnown= "Bearer 12345";
    const tokenAuto= token.sokit(" %")[0];
    console.log(tokenAuto);
    if (token=== tokenKnown){
       next();
    }else{

        reponse.status(401).json({message: "unauthorized"});
    }
}
function isAdmin(requette, reponse, next) {
    const token = requette.headers.authorization;
    const isAdmin= users.find(user=> user.isAdmin=== true);
    const tokenAdmin= token && isAdmin;

    console.log(tokenAdmin);
    if (tokenAdmin=== true){
       next();
    }else{

        reponse.status(403).json({message: "forbidden"});   
    }

}
function isSubscriptionPaid(requette, reponse, next) {
    const token = requette.headers.authorization;
    const isSubscriptionPaid= users.find(user=> user.isSubscriptionPaid=== true);
    const tokeSubscribe= token && isSubscriptionPaid;   

    console.log(token);
    if (tokeSubscribe=== true){
       next();
    }  else{

        reponse.status(402).json({message: "payment required"});   
    }   
}


export { isAuthenticated, isAdmin, isSubscriptionPaid };