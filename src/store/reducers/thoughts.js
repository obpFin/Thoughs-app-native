import { LOGIN, FETCH_THOUGHTS, ADD_THOUGHT } from '../actions/actionTypes';

import uuid from 'uuid';
import moment from 'moment';

const testThoughts = [
  {
    id: uuid(),
    creatorName: 'Tami',
    text: '"Style is never out of fashion". Maikkarilla suvereeni juontaja Late Karhuvaara oli liekeissä-taas kerran; Oskari Saaren haastattelu alkavasta formulakaudesta oli nappisuoritus!! Illaksi kotiin legendaariseen "Finnair slogan" tyyliin!! "Det blir spännande" sanoisi ruotsin "Aurinkokuningas", ystäväni Niklas Wikegård!! Kevyeltä tuntui; kondis nousee- SIMPLY GREAT!!!',
    date: new Date('Feb 17, 2018 03:24:00')
  },
  {
    id: uuid(),
    creatorName: 'Tami',
    text: 'Kuntokoulu ohi, fillari sai kyytiä 45 min (115-125) 100 vatsaa, 50 rinnallevetoa- "slow and steady-gets You ready"-niin se menee!!Eilen hikinen maratontappio, feed back veljille pelin jälkeen: "Peli ei ole oikeudenmukaista-se on PELI"',
    date: new Date('May 23, 2018 12:16:00')
  },
  {
    id: uuid(),
    creatorName: 'Tami',
    text: 'nyt katse eteenpäin =game 2; 15.30 kevyt harjoitus + pelin purku-Aittolan videotykki + Aurinkokuninkaan verbaliikka= kova combination!! Nyt kylpylään, huippudinner mme:n kanssa ja early to bed, koska aamulla vielä 9 reikää peliä, kamojen pakkaus ja sitten home, sweet home!!',
    date: new Date('Aug 30, 2017 21:04:00')
  },
  {
    id: uuid(),
    creatorName: 'Tami',
    text: 'Keep up the good work!!Tässä hengessä kaikille taistelijoille ja upeille daameille have a great week; kitisijät lukekaa lehdet tarkkaan, Pohjois-Korean liiderit jo on uho päällä, joten pikkuhiljaa KITISIJÖILLEKIN kirkastuu: "There is no paradise"; joten koettakaa kestää ja jos pinna on lujilla-menkää lähimetsään ja huutakaa 30 min suoraa huutoa-se helpottaa-luulisin!!',
    date: new Date('Dec 22, 2017 14:34:00')
  },
]

const initialState = {
  thoughts: testThoughts
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THOUGHTS: {
      return {
        ...state
      }
    };
    case ADD_THOUGHT: {
      return {
        ...state,
        thoughts: state.thoughts.concat({
          id: uuid(),
          creatorName: action.creatorName,
          text: action.text,
          date: moment().toDate()
        })
      }
    };
    default:
      return state;
  }
}

export default reducer;