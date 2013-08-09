var Server =
{
    GameList : 0,
    ChannelList : 1,
    Ping : 3,
    Login : 4,
    Register : 5,
    UserList : 6,
    FriendList : 7,
    ChatMessage : 8,
    JoinChannel : 9,
    LeaveChannel : 10,
    TeamList : 11,
    AddFriend : 12,
    RemoveFriend : 13,
    RequestDuel : 14,
    AcceptDuel : 15,
    RefuseDuel : 16,
    DevPoints : 17,
    ChatCommand : 18,
    DevPointCommand : 19,
    TournamentList : 20,
    TournamentStart : 21,
    TournamentJoin : 22,
    TournamentLeave : 23,
    TournamentIsReady : 24,
    TournamentCreate : 25,
    Stats : 26,
    TeamStats : 27,
    TeamCommand : 28 
};

var Client =
{
    GameList : 0,
    RemoveRoom : 1,
    UpdatePlayers : 2,
    LoginAccepted : 3,
    LoginFailed : 4,
    ServerMessage : 5,
    Banned : 6,
    Kicked : 7,
    RegisterAccept : 8,
    RegisterFailed : 9,
    Pong : 10,
    RoomStart : 11,
    UserList : 12,
    AddUser : 13,
    RemoveUser : 14,
    FriendList : 15,
    JoinChannelAccept : 16,
    Message : 17,
    DuelRequest : 18,
    DevPoints : 19,
    UserStats : 20,
    TeamStats : 21,
    TeamList : 22,
    AcceptDuelRequest : 23,
    RefuseDuelRequest : 24,
    StartDuel : 25,
    TeamRequest : 26,
    GameServers : 29,
    RemoveServer : 30,
    AddServer : 31,
    ChannelList : 32,
    TournamentList : 33,
    TournamentRoomList : 34,
    TournamentRommUpdate : 35,
    TournamentMessage : 36,
    CreateRoom : 37
};

function isOneByte(packet)
{
    switch (packet)
    {
        case Client.LoginFailed:
        case Client.Banned:
        case Client.Kicked:
        case Client.RegisterAccept:
        case Client.RegisterFailed:
        case Client.Pong:
        case Client.RefuseDuelRequest:
            return true;
    }
    return false;
}

function isLarge(packet)
{
    switch (packet)
    {
        case Client.GameList:
        case Client.UserList:
        case Client.FriendList:
        case Client.TeamList:
        case Client.ChannelList:
            return true;
    }
    return false;
}

exports.Client = Client;
exports.Server = Server;
exports.isOneByte = isOneByte;
exports.isLarge = isLarge;
