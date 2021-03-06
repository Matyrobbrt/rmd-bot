module.exports = {
  Ping: require('./ping'),
  Pong: require('./pong'),
  Github: require('./github'),
  BotGithub: require('./bot-github'),
  CurseForge: require('./curseforge'),
  Hi: require('./hi'),
  Rule: require('./rule'),
  Good_Night: require('./good_night'),
  Embed: require('./embed'),

  //Admin
  CustomCommand: require('./admin/custom-command'),
  Crosspost: require('./admin/crosspost'),

  //Fun
  Joke: require('./fun/joke'),

  //Information
  UserInfo: require('./information/user-info'),
  Colour: require('./information/colour'),

  //Level
  Level: require('./level/level'),
  Leaderboard: require('./level/leaderboard'),
  SetXp: require('./level/set-xp'),

  //Moderation
  Slowmode: require('./moderation/slowmode'),
  Role: require('./moderation/role'),
  Lock: require('./moderation/lock'),
  Unlock: require('./moderation/unlock'),
  Kick: require('./moderation/kick'),
  Mute: require('./moderation/mute'),
  Unmute: require('./moderation/unmute'),
  Ban: require('./moderation/ban'),
  Unban: require('./moderation/unban'),
  Warning: require('./moderation/warn'),
  Clear: require('./moderation/clear'),
  React: require('./moderation/react'),
  AnimatedReact: require('./moderation/animated-react'),
  SetPrefix: require('./moderation/setprefix'),

  //Testing
  SimulateJoin: require('./testing/simulate-join'),
  SimulateLeave: require('./testing/simulate-leave'),

  //Utilities
  Suggest: require('./utilities/suggest'),
  Uptime: require('./utilities/uptime'),
  Ticket: require('./utilities/ticket')
}