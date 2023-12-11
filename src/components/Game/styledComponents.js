import styled from 'styled-components'

export const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #223a5f;
  padding: 30px;
  align-items: center;
  min-height: 100vh;
`

export const ScoreBoardConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: #ffffff 2px solid;
  padding: 20px;
  border-radius: 16px;
  width: 70%;
  margin-bottom: 30px;
`
export const GameHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 600;
  width: 120px;
  padding: 5px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 140px;
  height: 100px;
`
export const ScoreHeading = styled.h1`
  color: #223a5f;
  font-weight: 400;
  font-size: 17px;
  font-family: 'Roboto';
`

export const ScorePoints = styled.p`
  color: #223a5f;
  font-weight: 600;
  font-size: 17px;
  font-family: 'Roboto';
`

export const RulesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border: 0px;
  border-radius: 12px;
  color: #223a5f;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 15px;
  cursor: pointer;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RulesCloseButton = styled.button`
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`

export const RulesImage = styled.img`
  width: 500px;
  height: 400px;
`

export const PlayingViewContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  flex-wrap: wrap;
`

export const ItemButtonContainer = styled.button`
  background-color: transparent;
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border: 0px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`

export const GameResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

export const GameResultsItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`

export const GameResultsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;
`

export const TryAgainButton = styled.button`
  background-color: #ffffff;
  border: 0px;
  border-radius: 12px;
  color: #223a5f;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 15px;
  cursor: pointer;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
