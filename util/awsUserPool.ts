import {
	CognitoUserPool,
} from 'amazon-cognito-identity-js';


const poolData = {
	UserPoolId: 'ap-south-1_3JUZE8JOk', // Your user pool id here
	ClientId: '5rj0cedf3i087acc4k6l8lfcua', // Your client id here
};
// var userPool = new CognitoUserPool(poolData);

// var attributeList = [];

// var dataEmail = {
// 	Name: 'email',
// 	Value: 'email@mydomain.com',
// };


// var attributeEmail = new CognitoUserAttribute(dataEmail);

// attributeList.push(attributeEmail);

// userPool.signUp(dataEmail.Value, 'password', attributeList, null!, function(
// 	err,
// 	result
// ) {
// 	if (err) {
// 		alert(err.message || JSON.stringify(err));
// 		return;
// 	}
// 	var cognitoUser = result?.user;
// 	console.log('user name is ' + cognitoUser?.getUsername());
// });

export default new CognitoUserPool(poolData);