export interface ClubsAndMatchsAwayTeam {
  id: number
  clubName: string
  awayClubMatchs: [{
    id: number
    homeTeam: number
    homeTeamGoals: number
    awayTeam: number
    awayTeamGoals: number
    inProgress: boolean
  }]
}
