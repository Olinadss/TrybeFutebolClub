export interface ClubsAndMatchs {
  id: number
  clubeName: string
  homeClubMatchs: [{
    id: number
    homeTeam: number
    homeTeamGoals: number
    awayTeam: number
    awayTeamGoals: number
    inProgress: boolean
  }]
}
