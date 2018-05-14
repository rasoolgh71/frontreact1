
class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
        title:'react clock'
     }
   }

   render(){
      return (
        <div>
          < Header title={this.state.title}/>
          <Clock/>
        </div>
      );
   }
}

const Header = (props) => (
    <div className="header">
        <div className="container">
            <div className="row m-auto">

                <div className="h1 ml-3 my-auto text-light" href="/"></div>
            </div>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

class Clock extends React.Component {

    constructor() {
        super();

        this.state = {
            date: new Date(),
            isDateVisible: true
        };

        this.toggleDate = this.toggleDate.bind(this);
    }

    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTime() {
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }

    toggleDate() {
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
    }

    render() {
        return (
            <div>
                <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
                <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
            </div>
        );
    }
}
const Panel = (props) => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div className="col-md-4 mx-auto">
                    <div className="panel">
                        <label id="date-switch" className="switch">
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
                            <span className="slider round"></span>
                        </label>
                        <label className="panel-switch-text" htmlFor="date-switch">
                            <i className="fa fa-calendar"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

Panel.defaultProps = {
    dateOn: true,
    toggleDate: () => {},
};

Panel.propTypes = {
    dateOn: PropTypes.bool,
    toggleDate: PropTypes.func
};

const Display = (props) => (
    <div className="container-fluid">
        <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className="display">
                    <div className="display-time">{DateTime.toTimeString(props.date)}</div>
                    { props.isDateVisible && <div className="display-date">{DateTime.toDateString(props.date)}</div> }
                </div>
            </div>
        </div>
    </div>
);

Display.defaultProps = {
    date: new Date(),
    isDateVisible: true
};

Display.propTypes = {
    date: PropTypes.object,
    isDateVisible: PropTypes.bool
};

class DateTime extends React.Component {

    constructor(date) {
        super();
        this.date = date ? date : new Date();

        this.monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'july', 'august', 'september',
            'October', 'November', 'December'
        ];

        this.dayNames = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];
    }

    hours() {
        return this.formatUnitOfTime(this.date.getHours());
    }

    minutes() {
        return this.formatUnitOfTime(this.date.getMinutes());
    }

    seconds() {
        return this.formatUnitOfTime(this.date.getSeconds());
    }

    dayOfWeek() {
        return this.dayNames[this.date.getDay()];
    }

    dayOfMonth() {
        return this.formatUnitOfTime(this.date.getUTCDate());
    }

    month() {
        return this.monthNames[this.date.getMonth()];
    }

    year() {
        return `${this.date.getFullYear()}`;
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }

    static toDateString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.dayOfWeek().substring(0, 3)} ${dateTime.dayOfMonth()} ${dateTime.month()} ${dateTime.year()}`;
    }

    static toTimeString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.seconds()}`;
    }
}

class Jalali extends React.Component{
    constructor(props){
      super(props);
      //m = moment('1360/5/26', 'jYYYY/jM/jD')
      this.state={

         //data:moment('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD HH:mm:ss')
         //data:moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm').format('YYYY-M-D HH:mm:ss')
          //data:moment('1981 5 17', 'YYYY jM D').format('YYYY/MM/DD')
          //data:moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm').format('YYYY-M-D HH:mm:ss')
         //data:moment('1360/5/26', 'jYYYY/jM/jD').format('jYYYY/jM/jD [is] YYYY/M/D')
          //data:moment.loadPersian('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss')
          //data:moment.jDaysInMonth(1395, 11)
          data:moment('1391/12/30', 'jYYYY/jMM/jDD').isValid()
      }
    }
    //moment('2013-8-25', 'YYYY-M-D').endOf('jMonth').format('jYYYY/jM/jD ')
    render(){
      return(
        <div>
           <h1>jalai calender</h1>
           <h3>{this.state.data}</h3>
           <h4> {moment('1360/5/26', 'jYYYY/jM/jD').format('jYYYY/jM/jD [is] YYYY/M/D')}</h4>
        </div>
      )
    }
}

ReactDOM.render(<App/>,document.getElementById("watch"))
ReactDOM.render(<Jalali/>,document.getElementById("cal"))