class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.toggleText = this.toggleText.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleText() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleText}>{this.state.visibility ? 'Hide Options' : 'Show Options'}</button>
                <p>{this.state.visibility && 'This Text is now visible'}</p>
            </div>
        )
    }
}
  s
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
