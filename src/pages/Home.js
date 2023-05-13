
import Header from '../components/Header/Header';

import NewsItem from '../components/NewsItem/NewsItem';

export default function Home(){
    return  <> 
        <div style={{width:'100%',position:'relative',overflowX:'hidden'}}>
            <Header/> <NewsItem/> <NewsItem/> <NewsItem/> <NewsItem/>
        </div>
         
           </>
}