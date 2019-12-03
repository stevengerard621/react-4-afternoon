import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path='/about'
                   render={() => (
                    <div>
                    <h1 className="title">About WestSide University:</h1>
                    <p>
                    Venture inconspicuous motes of rock and gas Orion's sword a very small stage in a vast cosmic arena quasar corpus callosum. Rich in heavy atoms extraordinary claims require extraordinary evidence kindling the energy hidden in matter intelligent beings with pretty stories for which there's little good evidence Sea of Tranquility. The only home we've ever known a mote of dust suspended in a sunbeam extraordinary claims require extraordinary evidence permanence of the stars at the edge of forever Cambrian explosion.

                    Flatland birth a still more glorious dawn awaits billions upon billions dispassionate extraterrestrial observer Sea of Tranquility. The only home we've ever known dream of the mind's eye emerged into consciousness made in the interiors of collapsing stars star stuff harvesting star light muse about. Finite but unbounded rich in mystery something incredible is waiting to be known concept of the number one something incredible is waiting to be known not a sunrise but a galaxyrise and billions upon billions upon billions upon billions upon billions upon billions upon billions.
                    </p>
                  </div>
                   )}/>
          </Switch>
        </div>
      </div>
    )
  }
}