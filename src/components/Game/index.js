import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'
import {
  GamePageContainer,
  ScoreBoardConatiner,
  GameHeading,
  ScoreContainer,
  ScoreHeading,
  ScorePoints,
  RulesContainer,
  RulesButton,
  RulesCloseButton,
  RulesImage,
  PlayingViewContainer,
  ItemButtonContainer,
  ItemImage,
  GameResultsContainer,
  GameResultsItemsContainer,
  GameResultsItemContainer,
  TryAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    showGameResults: false,
    selectedDetails: '',
    randomDetails: '',
    resultText: '',
  }

  restartGame = () => {
    this.setState({showGameResults: false})
  }

  renderShowGameResults = () => {
    const {selectedDetails, randomDetails, resultText} = this.state
    return (
      <GameResultsContainer>
        <GameResultsItemsContainer>
          <GameResultsItemContainer>
            <GameHeading>YOU</GameHeading>
            <ItemButtonContainer type="button">
              <ItemImage alt="your choice" src={selectedDetails.imageUrl} />
            </ItemButtonContainer>
          </GameResultsItemContainer>
          <GameResultsItemContainer>
            <GameHeading>OPPONENT</GameHeading>
            <ItemButtonContainer type="button">
              <ItemImage alt="opponent choice" src={randomDetails.imageUrl} />
            </ItemButtonContainer>
          </GameResultsItemContainer>
        </GameResultsItemsContainer>
        <GameHeading as="p">{resultText}</GameHeading>
        <TryAgainButton onClick={this.restartGame} type="button">
          PLAY AGAIN
        </TryAgainButton>
      </GameResultsContainer>
    )
  }

  renderPlayingView = () => {
    const {score} = this.state
    return (
      <PlayingViewContainer>
        {choicesList.map(each => {
          const {id, imageUrl} = each

          const updateSelectedDetails = () => {
            const selectedId = id
            const randomNumber = Math.floor(Math.random() * choicesList.length)
            const randomDetails = choicesList[randomNumber]
            const randomId = randomDetails.id
            if (selectedId === choicesList[0].id) {
              if (randomId === choicesList[0].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'IT IS DRAW',
                }))
              } else if (randomId === choicesList[1].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score + 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU WON',
                }))
              } else {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score - 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU LOSE',
                }))
              }
            } else if (selectedId === choicesList[1].id) {
              if (randomId === choicesList[1].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'IT IS DRAW',
                }))
              } else if (randomId === choicesList[2].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score + 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU WON',
                }))
              } else {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score - 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU LOSE',
                }))
              }
            } else if (selectedId === choicesList[2].id) {
              if (randomId === choicesList[2].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'IT IS DRAW',
                }))
              } else if (randomId === choicesList[0].id) {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score + 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU WON',
                }))
              } else {
                this.setState(prevState => ({
                  randomDetails,
                  score: prevState.score - 1,
                  selectedDetails: each,
                  showGameResults: true,
                  resultText: 'YOU LOSE',
                }))
              }
            }
          }

          return (
            <ItemButtonContainer
              key={each.id}
              data-testid={`${id.toLowerCase()}Button`}
              onClick={updateSelectedDetails}
              type="button"
            >
              <ItemImage alt={each.id} src={imageUrl} />
            </ItemButtonContainer>
          )
        })}
      </PlayingViewContainer>
    )
  }

  render() {
    const {score, showGameResults} = this.state
    return (
      <GamePageContainer>
        <ScoreBoardConatiner>
          <GameHeading>ROCK PAPER SCISSORS</GameHeading>
          <ScoreContainer>
            <ScoreHeading as="p">Score</ScoreHeading>
            <ScorePoints>{score}</ScorePoints>
          </ScoreContainer>
        </ScoreBoardConatiner>

        {showGameResults
          ? this.renderShowGameResults()
          : this.renderPlayingView()}

        <RulesContainer>
          <Popup
            className="popup-content"
            modal
            trigger={<RulesButton>RULES</RulesButton>}
          >
            {close => (
              <>
                <RulesCloseButton onClick={() => close()}>
                  <RiCloseLine className="wrong-icon" />
                </RulesCloseButton>
                <RulesImage
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </>
            )}
          </Popup>
        </RulesContainer>
      </GamePageContainer>
    )
  }
}

export default Game
