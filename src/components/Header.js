import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Content from '../components/Content';
import { Component } from 'react';
import axios from 'axios';
import { API_URL_IMG, API_URL_DATA, API_DEFAULT_URL_IMG } from '../API/Api';
import { withRouter } from 'react-router';
const { TabPane } = Tabs;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getDataFromApi: '',
      currentNumber: 1,
      infoSource: API_URL_DATA,
      imagesSource: API_URL_IMG,
      currentActive: 'people',
      currentPagePhoto: '',
      tabPanels: [
        { name: 'People', link: '/characters' },
        { name: 'Planets', link: '/planets' },
        { name: 'Starchips', link: '/starships' },
      ],
    };
  }

  getData(click) {
    console.log(click);
    console.log('this.state.currentActive', this.state.currentActive);
    const { infoSource, currentActive, currentNumber, imagesSource } = this.state;
    axios
      .get(`${infoSource}${currentActive}/${currentNumber}/`, {
        params: {
          results: 1,
        },
      })
      .then((response) => {
        this.setState(() => ({
          getDataFromApi: response.data,
          currentPagePhoto: `${imagesSource}${currentNumber}`,
        }));
      })
      .catch((error) => {
        console.log(error);
        // this.setState(
        //   () => ({
        //     currentRequestData: 'Data not found',
        //     currentPagePhoto: `https://starwars-visualguide.com/assets/img/characters/${this.state.currentNumber}.jpg`,
        //   })
        // );
      });
  }

  componentDidMount() {
    this.getData();
  }

  renderLink = (to, label) => {
    return <Link to={to}>{label}</Link>;
  };

  click = (id) => {
    this.setState(() => ({
      currentActive: id,
    }));
  };

  onClick = (click) => {
    this.getData(click);
  };

  render() {
    console.log('this.state.getDataFromApi', this.state.getDataFromApi);
    return (
      <Router>
        <div className="card-container">
          <Tabs centered={true} type="card">
            {this.state.tabPanels.map((tab) => {
              return (
                <TabPane tab={this.renderLink(tab.link, tab.name)} key={tab.name}>
                  <Switch>
                    <Route
                      path="/:id"
                      children={
                        <Content
                          onClick={() => this.onClick}
                          click={() => this.click}
                          content={this.state.getDataFromApi}
                        />
                      }
                    />
                  </Switch>
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </Router>
    );
  }
}
