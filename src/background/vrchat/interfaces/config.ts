export interface Config {
/**
 * Unknown (unused)
*/
messageOfTheDay:	string;
/**
 * The client goes to this world if banned from public instances
*/
timeOutWorldId:	string;
/**
 * Unknown (unused)
*/
gearDemoRoomId:	string;
/**
 * Release server version (unused)
*/
releaseServerVersionStandalone:	string;
/**
 * Where you would originally download the game
*/
downloadLinkWindows:	string;
/**
 * Release game build
*/
releaseAppVersionStandalone:	string;
/**
 * Development game build
*/
devAppVersionStandalone:	string;
/**
 * Server version for development build
*/
devServerVersionStandalone:	string;
/**
 * the developer download link (Unused)
*/
devDownloadLinkWindows:	string;
/**
 * Current TOS version
*/
currentTOSVersion: number;
/**
 * Public SDK unitypackage link
*/
releaseSdkUrl:	string;
/**
 * Public SDK version
*/
releaseSdkVersion:	string;
/**
 * Development SDK unitypackage link
*/
devSdkUrl:	string;
/**
 * Development SDK version
*/
devSdkVersion:	string;
/**
 * Whitelisted download locations for assets
*/
whiteListedAssetUrls:	string[];
/**
 * API key used by the client
*/
clientApiKey:	string;
/**
 * Before VRChat had support for vive you would have to download this in order for it to work, now redirects to the game's Steam store page
*/
viveWindowsUrl:	string;
/**
 * Unity version supported by the SDK
*/
sdkUnityVersion:	string;
/**
 * ID of the hub world
*/
hubWorldId:	string;
/**
 * ID of the default spawn in world
*/
homeWorldId:	string;
/**
 * ID of the world used for introduction to the game
*/
tutorialWorldId:	string;
/**
 * If true, the client won't send analytics about your current world (not used in client)
*/
disableEventStream:	boolean;
/**
 * If true, anyone can upload avatars, otherwise, only those with specific tags can (new user and higher)
*/
disableAvatarGating:	boolean;
/**
 * If true, anyone can give feedback, otherwise only users with specific tags can
*/
disableFeedbackGating:	boolean;
/**
 * If true, registration is disabled
*/
disableRegistration:	boolean;
/**
 * Extra plugins to run on the server, comma-separated strings
*/
plugin:	string;
/**
 * Used in the SDK to notify a user they aren't allowed to upload avatars/worlds yet
*/
sdkNotAllowedToPublishMessage:	string;
/**
 * Link to the developer FAQ
*/
sdkDeveloperFaqUrl:	string;
/**
 * Link to the official VRChat Discord
*/
sdkDiscordUrl:	string;
/**
 * Used in game to notify a user they aren't allowed to select avatars in private worlds
*/
notAllowedToSelectAvatarInPrivateWorldMessage:	string;
/**
 * timeout for verification (TODO: what kind of verification), assumed in seconds
*/
userVerificationTimeout: number;
/**
 * timeout between updating, assuming seconds
*/
userUpdatePeriod: number;
/**
 * delay between verifications, assuming seconds
*/
userVerificationDelay: number;
/**
 * Delay before the next verification retry
*/
userVerificationRetry: number;
/**
 * unknown
*/
worldUpdatePeriod: number;
/**
 * unknown
*/
moderationQueryPeriod: number;
/**
 * Default avatar ID
*/
defaultAvatar:	string;
/**
 * of DynamicWorldRows	Extra rows to display in the client's 'world' listing
*/
dynamicWorldRows:	string[];
/**
 * VRChat's office address
*/
address:	string;
/**
 * VRChat's contact email
*/
contactEmail:	string;
/**
 * VRChat's support email
*/
supportEmail:	string;
/**
 * VRChat's job application email
*/
jobsEmail:	string;
/**
 * VRChat's copyright issues related email
*/
copyrightEmail:	string;
/**
 * VRChat's moderation related email
*/
moderationEmail:	string;
/**
 * unknown
*/
disableEmail:	boolean;
/**
 * Game name (VrChat)
*/
appName:	string;
/**
 * Currently used photon server plugin version
*/
serverName:	string;
/**
 * Currently used photon server plugin codename
*/
deploymentGroup:	string;
/**
 * Build tag for the server plugin
*/
buildVersionTag:	string;
/**
 * API key used by the website
*/
apiKey:	string;
}
