function Header (props) {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Player: { props.totalPlayers }</span>
        </header>
    );
}
//We can also declare a react component with an arrow function like below
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>x</button>
                { props.name }
            </span>

            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( prevState => ({
            // score: prevState.score - 1
            score: prevState.score > 0 ? prevState.score - 1 : 0
        }));
    }

    //another way of creating state
    // constructor() {
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                name: "Bayo",
                id: 1
              },
              {
                name: "Lara",
                id: 2
              },
              {
                name: "Dotun",
                id: 3
              },
              {
                name: "Doyin",
                id: 4
              },
              {
                name: "Damola",
                id: 5
              },
              {
                name: "Dire",
                id: 6
              }
        ] 
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => ({
            players: prevState.players.filter(p => p.id !== id)
        }));
    }

    render() {
        return (
            <div className="scoreboard">
            <Header 
            title="Scoreboard" 
            // totalPlayers={ n => n + 10 } 
            totalPlayers={ this.state.players.length }
            />
    
            {/* Players list */}
            { this.state.players.map(player =>
                <Player 
                name={ player.name } 
                id={player.id}
                key={ player.id.toString() }
                removePlayer={this.handleRemovePlayer}
                />
             )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);