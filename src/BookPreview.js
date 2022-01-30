import React, {Component} from 'react'
import { Text, View } from 'react-native'
import StyleSheet from './StyleSheet';
import { useMediaQuery } from 'react-native-media-query';
// import LifecastCoverImage from './LifecastCoverImage';
import LifecastBookImage from './LifecastBookImage';
import Link from './gatsby-link';
import StoreIcons from './StoreIcons';

const ratioHeight = 664/1000;
const ratioWidth = 1000/664;
class BookPreview extends Component {
  // state = {
  //   // height: 300
  // };
  constructor(){
    super();
    this.state = {height: 300};
    this.updateSize = () => {
      const windowWidth = Math.min(window.innerWidth,600);
      const height = windowWidth * ratioWidth;
      // const width = height * ratioHeight;
      const width = '100%';
      this.setState({height,width})
    }
  }
  componentDidMount(){
    this.updateSize();
    window.addEventListener('resize', this.updateSize);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateSize);
  }
  render(){
    const embedType = 'single';
    // const embedType = 'widget';
    return (
      <View style={{width:'100%', alignItems:'stretch'}}>
        <iframe
          title="book preview"
          align='middle'
          frameBorder='0'
          src={`https://www.book2look.com/embed/9781735549514&bibletType=${embedType}`}
          // src='https://www.book2look.com/embed/9781735549514&bibletType=widget'
          style={{
            width: `${this.state.width}`,
            height: `${this.state.height}px`,
          }}
        />
      </View>
    );
  }
}

export default BookPreview
