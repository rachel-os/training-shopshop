import item1 from '../../assets/images/item1.jpg';
import item2 from '../../assets/images/item2.jpg';
import item3 from '../../assets/images/item3.jpg';
import item4 from '../../assets/images/item4.jpg';
import item5 from '../../assets/images/item5.jpg';
import item6 from '../../assets/images/item6.jpg';
import item7 from '../../assets/images/item7.jpg';
import item8 from '../../assets/images/item8.jpg';
import item9 from '../../assets/images/item9.jpg';
import item10 from '../../assets/images/item10.jpg';
import { addToCart } from '../Actions/cartActions';

const initState = {
  items: [
    { id: 1, title: 'Aloe soap', desc: 'Sales handshake innovator alpha paradigm shift release & development termsheet beta creative.', price: 361, img: item1 },
    { id: 2, title: 'Superstar', desc: 'Social proof analytics growth hacking user experience  long tail bandwidth technology business.', price: 70, img: item2 },
    { id: 3, title: 'Coco oil', desc: 'Hackathon crowdsource user experience analytics startup ecosystem customer focus product channels.', price: 110, img: item3 },
    { id: 4, title: 'Green plant', desc: 'Business-to-consumer startup launch party supply chain canvas advisor leverage agile iteration.', price: 20, img: item4 },
    { id: 5, title: 'Watch', desc: 'Bandwidth leverage termsheet disruptive seed money influencer angel investor technology traction.', price: 65, img: item5 },
    { id: 6, title: 'Book', desc: 'Alpha funding hacking business model virality research & development responsive web design.', price: 57, img: item6 },
    { id: 7, title: 'Drone', desc: 'Incubator market bandwidth sales partnership customer creative client advisor rockstar.', price: 88, img: item7 },
    { id: 8, title: 'Leica', desc: 'MVP stealth mass market deployment holy grail prototype android monetization startup', price: 810, img: item8 },
    { id: 9, title: 'Stool', desc: 'Iteration analytics infrastructure social media android product management user experience.', price: 128, img: item9 },
    { id:10, title:'Sneakers', desc: 'Focus non-disclosure agreement funding niche market buyer incubator channels.', price: 140, img: item10}
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
 
  return state
}

export default cartReducer;