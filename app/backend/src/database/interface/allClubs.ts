export interface AllArrayClubs {
  id: number
  clubName: string
  homeClubMatchs: [{
    id: number
    homeTeam: number
    homeTeamGoals: number
    awayTeam: number
    awayTeamGoals: number
    inProgress: boolean
  }],
  awayClubMatchs: [{
    id: number
    homeTeam: number
    homeTeamGoals: number
    awayTeam: number
    awayTeamGoals: number
    inProgress: boolean
  }],
}
