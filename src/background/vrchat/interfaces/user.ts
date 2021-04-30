export interface User {
/**
  Version of VRChat TOS that has been accepted
*/
acceptedTOSVersion:	number;
/**
Date account is scheduled for deletion
*/
accountDeletionData: string;
/**
of strings	Each string is a user's ID
*/
activeFriends:	string[];
/**
If user is allowing public avatars to be copied from them in -game
*/
allowAvatarCopying:	boolean;
/**
User defined biography
*/
bio:	string;
/**
User defined links
*/
bioLinks:	string[];
/**
ID of current avatar
*/
currentAvatar:	string;
/**
URL of current avatar's .vrca file
*/
currentAvatarAssetURL:	string;
/**
URL of current avatar's display image
*/
currentAvatarImageUrl:	string;
/**
URL of current avatar's thumbnail image
*/
currentAvatarThumbnailImageUrl:	string;
/**
Date user made the VRChat account; format YYYY - MM - DD
*/
date_joined:	string;
/**
DeveloperType
*/
developerType:	string;
/**
User's current displayed name
*/
displayName:	string;
/**
User's email
*/
email:	string;
/**
If user's email has been verified
*/
emailVerified:	boolean;
/**
ID of fallback avatar
*/
fallbackAvatar:	string;
/**
Feature
*/
feature:	string[];
/**
user defined group name, used to categorize friends
*/
friendGroupNames:	string[];
/**
User's friend key, probably used in backend to track friends
*/
friendKey:	string;
/**
Friends's User IDs
*/
friends:	string[];
/**
If user has defined their birthday
*/
hasBirthday:	boolean;
/**
If user has an email
*/
hasEmail:	boolean;
/**
If user has logged in from the game - client(steam, oculus, etc)
*/
hasLoggedInFromClient:	boolean;
/**
If user has a pending(not verified) email
*/
hasPendingEmail:	boolean;
/**
ID of user's home world
*/
homeLocation:	string;
/**
User's ID
*/
id:	string;
/**
If logged in user and this user are friends
*/
isFriend:	boolean;
/**
Date - time of last client login; format YYYY - MM - DDTHH: mm: SSZ
*/
last_login:	string;
/**
Name for last client platform the user logged in on
*/
last_platform:	string;
/**
User's email, but obfuscated
*/
obfuscatedEmail:	string;
/**
User's pending email, but obfuscated
*/
obfuscatedPendingEmail:	string;
/**
ID of oculus account
*/
oculusId:	string;
/**
of strings	Each string is a user ID, all users are offline
*/
offlineFriends:	string[];
/**
of strings	Each string is a user ID, all users are online in -game
*/
onlineFriends:	string[];
/**
of PastDisplayName	Each string is a user's past display name
*/
pastDisplayNames:	string[];
/**
State
*/
state:	string;
/**
Status
*/
status:	string;
/**
User defined status
*/
statusDescription:	string;
/**
Details about user's steam account
*/
steamDetails:	string[];
/**
ID of steam account
*/
steamId:	string;
/**
of strings	Each string is a tag given by developers or the game, usually denoting things like trust and permissions
*/
tags:	string[];
/**
If user has 2fa enabled
*/
twoFactorAuthEnabled:	boolean;
/**
If user has unsubscribed from VRChat emails
*/
unsubscribe:	boolean;
/**
URL to image file used as user's icon
*/
userIcon:	string;
/**
User's login name
*/
username:	string;
}
