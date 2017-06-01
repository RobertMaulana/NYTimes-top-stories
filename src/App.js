import { StackNavigator } from 'react-navigation';
import News from './components/News';
import DetailNews from './components/DetailNews';

const App = StackNavigator({
  Main: { screen: News },
  DetailNews: { screen: DetailNews }
},{ headerMode: 'screen' });


export default App;
